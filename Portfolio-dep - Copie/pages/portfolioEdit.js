import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import withAuth from "../components/hoc/withAuth";
import PortfolioCreateForm from "../components/portfolios/PortfolioCreateForm";
import { Router } from "../routes";

import { Row, Col } from "reactstrap";

import { createPortfolio, getPortfolioById } from "../actions";

class PortfolioEdit extends React.Component {
  static async getInitialProps({ query }) {
    console.log(query);
    let portfolio = {};
    try {
      portfolio = await getPortfolioById(query.id);
    } catch (error) {
      console.error(err);
    }
    console.log(portfolio);
    return { portfolio };
  }
  constructor(props) {
    super();

    this.state = {
      error: undefined
    };

    this.savePortfolio = this.savePortfolio.bind(this);
  }
  savePortfolio(portfolioData, { setSubmitting }) {
    /* setSubmitting(true);
    createPortfolio(portfolioData, { setSubmitting })
      .then(portfolio => {
        setSubmitting(false);
        this.setState({ error: undefined });
        Router.pushRoute("/portfolios");
      })
      .catch(err => {
        const error = err.message || "Server Error";
        setSubmitting(false);
        this.setState({ error });
      }); */
  }
  render() {
    const { error } = this.state;
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage className="portfolio-create-page" title="CreatEdit Portfolio">
          <Row>
            <Col md="6">
              <PortfolioCreateForm
                //onSubmit={this.savePortfolio}
                error={error}
              />
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withAuth("siteOwner")(PortfolioEdit);
