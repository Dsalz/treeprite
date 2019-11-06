import React, { Component } from "react";

// Components
import Layout from "../../components/Layout";
import VisitorLayout from "../../components/Visitor/layout";
import { Column } from "../../theme/style/styles";
import { MainHeader, PageColumn } from "../../components/Visitor/styled";
import { ContactUsForm } from "../../components/Forms/index";

// Styles.jsx
import StyleWrapper from "./styles";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    };
  }

  // onChange handler for input fields
  handleOnChange = e => {
    const { name, value } = e.target;
    this.setState({ ...this.state, [name]: value });
  };

  handleSubmit = e => {
    return;
  };
  render() {
    return (
      <Layout>
        <StyleWrapper>
          <VisitorLayout>
            <PageColumn>
              <MainHeader hasBottomBorder>Contact Us</MainHeader>
              <Column>
                <ContactUsForm
                  inputs={this.state}
                  handleOnChange={this.handleOnChange}
                  handleSubmit={this.handleSubmit}
                />
              </Column>
            </PageColumn>
          </VisitorLayout>
        </StyleWrapper>
      </Layout>
    );
  }
}

export default index;
