import React from "react";
import { Row, Column } from "../../theme/style/styles";
import { Header } from "../../theme/style/typeface";
import { SideBarLinksColumn, SideFooterImage, Text } from "./styled";

const VisitorSideFooter = ({
  title,
  image,
  company,
  review,
  noOfReviews,
  starNo
}) => {
  return (
    <Row margin="20px 0 0" height="auto">
      <SideBarLinksColumn>
        <Header altHeader textAlignHeader="center">
          {title}
        </Header>
        <Row justifyContent="space-between">
          <SideFooterImage src={image} />
          <Column width="65%">
            <Row flexWrap="nowrap" justifyContent="flex-start">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.634 7.97L7.55499 0.901001C7.30399 0.650001 6.96701 0.436993 6.54501 0.261993C6.12201 0.0869934 5.73599 0 5.38599 0H1.267C0.923998 0 0.627007 0.126007 0.376007 0.376007C0.125007 0.627007 0 0.923998 0 1.267V5.38599C0 5.73599 0.0869934 6.12201 0.261993 6.54501C0.436993 6.96701 0.650001 7.30001 0.901001 7.54501L7.98001 14.634C8.22401 14.878 8.521 15 8.871 15C9.214 15 9.515 14.878 9.772 14.634L14.634 9.76199C14.878 9.51799 15 9.221 15 8.871C15 8.528 14.878 8.228 14.634 7.97ZM4.064 4.064C3.817 4.312 3.518 4.436 3.168 4.436C2.818 4.436 2.52 4.312 2.272 4.064C2.025 3.817 1.901 3.518 1.901 3.168C1.901 2.818 2.025 2.52 2.272 2.272C2.52 2.025 2.818 1.901 3.168 1.901C3.518 1.901 3.817 2.025 4.064 2.272C4.312 2.52 4.436 2.819 4.436 3.168C4.436 3.518 4.312 3.817 4.064 4.064Z"
                  fill="#053C69"
                />
              </svg>
              <Text>{company}</Text>
            </Row>
            <Row flexWrap="nowrap" justifyContent="flex-start">
              <Header headerColor="#053C69">{review}</Header>
              <Column margin="-2px 5px 0">
                <Row flexWrap="nowrap" justifyContent="flex-start">
                  {Array(starNo)
                    .fill(undefined)
                    .map(a => (
                      <svg
                        key={a}
                        width="18"
                        height="18"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.969 5.75002C14.895 5.52102 14.698 5.35503 14.46 5.32003L10.04 4.67501L8.062 0.671011C7.849 0.241011 7.14402 0.241011 6.93102 0.671011L4.95299 4.67501L0.539969 5.32003C0.301969 5.35503 0.104997 5.52102 0.030997 5.75002C-0.043003 5.97802 0.0179936 6.22802 0.189994 6.39602L3.38299 9.51201L2.63201 13.915C2.59101 14.151 2.68799 14.39 2.88299 14.531C2.99299 14.611 3.12298 14.651 3.25298 14.651C3.35298 14.651 3.45396 14.627 3.54796 14.578L7.497 12.501L11.454 14.579C11.666 14.689 11.924 14.672 12.117 14.53C12.312 14.389 12.408 14.15 12.368 13.913L11.611 9.51101L14.809 6.39501C14.982 6.22801 15.043 5.97802 14.969 5.75002ZM10.492 8.84102C10.344 8.98602 10.276 9.19401 10.311 9.39901L10.908 12.869L7.78899 11.23C7.69699 11.182 7.59696 11.158 7.49596 11.158C7.39496 11.158 7.29402 11.182 7.20202 11.231L4.08898 12.868L4.68102 9.39803C4.71602 9.19403 4.64799 8.98502 4.49999 8.84102L1.98296 6.38402L5.46197 5.87401C5.66697 5.84501 5.84397 5.71603 5.93597 5.53103L7.49596 2.37502L9.05602 5.53002C9.14802 5.71602 9.32502 5.84501 9.53002 5.87401L13.014 6.38402L10.492 8.84102Z"
                          fill="#053C69"
                        />
                      </svg>
                    ))}
                </Row>
                <Row
                  margin="0"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  fontSize="12px"
                >
                  {noOfReviews} reviews
                </Row>
              </Column>
            </Row>
          </Column>
        </Row>
      </SideBarLinksColumn>
    </Row>
  );
};

export default VisitorSideFooter;
