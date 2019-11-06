import React, { Component } from "react";

// Components
import Layout from "../../components/Layout";
import VisitorLayout from "../../components/Visitor/layout";
import ReviewItem from "../../components/Visitor/reviewitem";
import { Column } from "../../theme/style/styles";
import { MainHeader, PageColumn } from "../../components/Visitor/styled";
import { AddReviewForm } from "../../components/Forms/index";

// Styles.jsx
import StyleWrapper from "./styles";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      review: ""
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
              <MainHeader>Reviews</MainHeader>
              <Column>
                <AddReviewForm
                  inputs={this.state}
                  handleOnChange={this.handleOnChange}
                  handleSubmit={this.handleSubmit}
                />
                <br />
                <ReviewItem
                  rating={2.5}
                  starNo={2}
                  name="Jane Doe"
                  review={this.state.review}
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
