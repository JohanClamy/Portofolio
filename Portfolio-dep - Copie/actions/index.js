import axios from "axios";
import Cookie from "js-cookie";

import { getCookieFromReq } from "../helpers/utils";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  timeout: 3000
});

const setAuthHeader = req => {
  const token = req ? getCookieFromReq(req, "jwt") : Cookie.getJSON("jwt");

  if (token) {
    return { headers: { authorization: `Bearer ${token}` } };
  }
  return undefined;
};

const rejectPromise = resError => {
  let error = {};

  if (resError && resError.response && resError.response.data) {
    error = resError.response.data;
  } else {
    error = resError;
  }

  return Promise.reject(error);
};

export const getSecretData = async req => {
  const url = "http://localhost:3000/api/v1/secret";

  return await axios
    .get(url, setAuthHeader(req))
    .then(response => response.data);
};

export const getPortfolios = async () => {
  return await axiosInstance.get("/portfolios").then(response => response.data);
};

export const getPortfolioById = async id => {
  return await axiosInstance
    .get(`/portfolios/${id}`)
    .then(response => response.data);
};

export const createPortfolio = async portfolioData => {
  return await axiosInstance
    .post("/portfolios", portfolioData, setAuthHeader())
    .then(response => response.data)
    .catch(error => rejectPromise(error));
};
