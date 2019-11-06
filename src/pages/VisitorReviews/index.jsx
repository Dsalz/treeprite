import React, { Component } from "react";

// Components
import Layout from "../../components/Layout";
import VisitorLayout from "../../components/Visitor/layout";
import ReviewItem from "../../components/Visitor/reviewitem";
import { Column, Row } from "../../theme/style/styles";
import { Header } from "../../theme/style/typeface";
import { MainHeader, PageColumn } from "../../components/Visitor/styled";

// Styles.jsx
import StyleWrapper from "./styles";
import Button from "../../components/Button";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [
        {
          rating: 3.5,
          starNo: 2,
          name: "Jane Doe",
          review:
            "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum..."
        },
        {
          rating: 2.5,
          starNo: 2,
          name: "Jane Doe",
          review:
            "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum..."
        },
        {
          rating: 1.5,
          starNo: 2,
          name: "Jane Doe",
          review:
            "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum..."
        }
      ]
    };
  }

  openNewReviewPage = () => {
    window.location.href = "/visitor/add-review";
  };
  render() {
    const { reviews } = this.state;
    return (
      <Layout>
        <StyleWrapper>
          <VisitorLayout>
            <PageColumn>
              <MainHeader>Reviews</MainHeader>
              <Column>
                <Row
                  border="1px solid rgba(0, 0, 0, 0.5)"
                  borderRadius="10px"
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                  justifyContent="space-between"
                  padding="15px 3vw"
                  alignItems="center"
                  flexWrap="wrap"
                >
                  <Column
                    width="220px"
                    margin="0"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                  >
                    Overall Rating
                    <Row flexWrap="nowrap" justifyContent="flex-start">
                      <Header
                        fontSize="45px"
                        marginHeader="0 1vw 0 0"
                        headerColor="#006494"
                      >
                        4.5
                      </Header>
                      <Column margin="12px 5px 0">
                        <Row flexWrap="nowrap" justifyContent="flex-start">
                          {Array(4)
                            .fill(undefined)
                            .map(a => (
                              <svg
                                key={a}
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                style={{ marginRight: "6px" }}
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M23.9501 9.19911C23.8311 8.83311 23.517 8.56815 23.136 8.51215L16.064 7.47913L12.899 1.07411C12.558 0.386105 11.431 0.386105 11.09 1.07411L7.92406 7.48011L0.863051 8.51215C0.483051 8.56815 0.167056 8.83411 0.0490558 9.19911C-0.0689442 9.56411 0.0290302 9.9651 0.30403 10.2331L5.41304 15.2191L4.21104 22.2631C4.14604 22.6421 4.30105 23.0241 4.61305 23.2501C4.78805 23.3771 4.99603 23.4411 5.20503 23.4411C5.36503 23.4411 5.52705 23.4031 5.67705 23.3241L11.996 20.0011L18.326 23.3251C18.666 23.5031 19.078 23.4761 19.388 23.2481C19.699 23.0221 19.853 22.6401 19.788 22.2601L18.578 15.2181L23.6951 10.2321C23.9711 9.96513 24.0691 9.56511 23.9501 9.19911ZM16.787 14.1452C16.55 14.3772 16.441 14.7111 16.498 15.0391L17.452 20.5902L12.4631 17.9681C12.3161 17.8911 12.155 17.8532 11.994 17.8532C11.831 17.8532 11.67 17.8911 11.524 17.9691L6.54304 20.5891L7.49003 15.0371C7.54603 14.7111 7.43706 14.3762 7.20006 14.1452L3.17204 10.2141L8.74004 9.39912C9.06704 9.35212 9.35103 9.14613 9.49803 8.84913L11.994 3.79914L14.4891 8.84815C14.6371 9.14515 14.92 9.35112 15.248 9.39912L20.822 10.2141L16.787 14.1452Z"
                                  fill="#006494"
                                />
                              </svg>
                            ))}
                        </Row>
                        <Row
                          margin="0"
                          justifyContent="flex-start"
                          alignItems="flex-start"
                          fontSize="12px"
                          color="rgba(0, 0, 0, 0.4)"
                        >
                          87 reviews
                        </Row>
                      </Column>
                    </Row>
                  </Column>
                  <Button
                    margin="10px 0"
                    content="Add a Review"
                    width="175px"
                    onClick={this.openNewReviewPage}
                  />
                </Row>
                {reviews.map(review => (
                  <ReviewItem {...review} />
                ))}
              </Column>
            </PageColumn>
          </VisitorLayout>
        </StyleWrapper>
      </Layout>
    );
  }
}

export default index;
