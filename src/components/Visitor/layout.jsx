import React, { Fragment } from "react";
import VisitorHeader from "./header";
import VisitorSideNav from "./sidenav";
import VisitorSideFooter from "./sidefooter";
import { MainColumn, SideColumn, MainRow } from "../Visitor/styled";

//Images
import ReviewImage from "../../images/ReviewImage.png";
import MiloImage from "../../images/milo.svg";

const VisitorLayout = ({ children }) => (
  <Fragment>
    <VisitorHeader
      image={ReviewImage}
      title="Militova Travels Inc"
      company="Bus & Logistics Company"
      address="Km. 25, Lorem Way, Lokoja, Nigeria"
      numbers="0900000000, 0800000000"
      review="4.5"
      noOfReviews="87"
      starNo={3}
      LinkValue="Treeprite.com/adeandsons"
    />
    <MainRow flexWrap="wrap" justifyContent="space-between" margin="">
      <MainColumn>{children}</MainColumn>
      <SideColumn>
        <VisitorSideNav />
        <VisitorSideFooter
          title="Militova Travels Inc"
          image={MiloImage}
          company="Bus & Logistics Company"
          review="4.5"
          noOfReviews="87"
          starNo={3}
        />
      </SideColumn>
    </MainRow>
  </Fragment>
);

export default VisitorLayout;
