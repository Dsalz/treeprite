import React, { Component } from "react";

// Components
import Layout from "../../components/Layout";
import VisitorLayout from "../../components/Visitor/layout";
import { Row } from "../../theme/style/styles";
import {
  MainHeader,
  RoundedCard,
  SectionHeader,
  PageColumn
} from "../../components/Visitor/styled";

// Styles.jsx
import StyleWrapper from "./styles";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [
        "Oshodi Under Bridge, Lagos",
        "Ikeja Under Bridge, Lagos",
        "Oshodi Under Bridge, Lagos",
        "Ajah Under Bridge, Lagos",
        "Utako Bus stop, Abuja",
        "Zuba Park, Abuja",
        "Onisha Head Bridge, Asaba",
        "Ilaje Bus stop"
      ]
    };
  }
  render() {
    const { locations } = this.state;
    return (
      <Layout>
        <StyleWrapper>
          <VisitorLayout>
            <PageColumn>
              <MainHeader>About Us</MainHeader>
              <RoundedCard>
                <SectionHeader>Business Info</SectionHeader>
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum
              </RoundedCard>
              <RoundedCard>
                <ul style={{ marginTop: "30px", display: "flex" }}>
                  {locations.map(location => (
                    <li>{location}</li>
                  ))}
                </ul>
              </RoundedCard>
              <RoundedCard>
                <SectionHeader>Business Hours</SectionHeader>
                <Row justifyContent="flex-start">
                  <b style={{ marginRight: "10vw" }}>Mon - Sunday</b>
                  <b>4:00am - 11:00pm daily</b>
                </Row>
              </RoundedCard>
              <RoundedCard>
                <SectionHeader>Services</SectionHeader>
                <ul>
                  <li>Car hire</li>
                  <li>Pick up / Drop off</li>
                </ul>
              </RoundedCard>
            </PageColumn>
          </VisitorLayout>
        </StyleWrapper>
      </Layout>
    );
  }
}

export default index;
