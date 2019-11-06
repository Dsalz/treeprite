import React from "react";
import { NavLink } from "react-router-dom";
import { Row } from "../../theme/style/styles";
import { SideBarLinksColumn } from "./styled";

const sidebarOptions = [
  {
    name: "About Us",
    link: "/visitor/about"
  },
  {
    name: "Business Hours",
    link: "/visitor/business-hours"
  },
  {
    name: "Reviews",
    link: "/visitor/reviews"
  },
  {
    name: "Services",
    link: "/visitor/services"
  },
  {
    name: "FAQs",
    link: "/visitor/faqs"
  },
  {
    name: "Contact Us",
    link: "/visitor/contact-us"
  }
];

const VisitorSideNav = ({ active }) => {
  return (
    <Row height="auto">
      <SideBarLinksColumn>
        {sidebarOptions.map(option => (
          <NavLink to={option.link}>{option.name}</NavLink>
        ))}
      </SideBarLinksColumn>
    </Row>
  );
};

export default VisitorSideNav;
