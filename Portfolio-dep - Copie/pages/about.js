import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";

class About extends React.Component {
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage className="about-page" title="test" />
      </BaseLayout>
    );
  }
}

export default About;
