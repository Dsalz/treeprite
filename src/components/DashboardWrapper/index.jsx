import React, { useEffect, useState } from "react";
// import { Wrapper } from '../../theme/style/styles'

// components
import DashboardNav from "../DashboardNav";
import SideNav from "../Sidebar";

export default ({ ...props }) => {
  const [sidebar, setSideBar] = useState({ toggle: false });
  const handleToggle = () => {
    const toggle = !sidebar.toggle;
    setSideBar({ toggle });
  };
  useEffect(() => {
    let viewPort = window.innerWidth;
    if (viewPort < 800) {
      setSideBar({
        toggle: true
      });
    }
    window.addEventListener("resize", event => {
      viewPort = event.target.innerWidth;
      if (viewPort < 800) {
        setSideBar({
          toggle: true
        });
      }
    });
  }, []);
  return (
    <>
      <DashboardNav handleToggle={handleToggle} sidebar={sidebar} {...props} />
      <SideNav sidebar={sidebar.toggle} {...props} />
      {props.children}
    </>
  );
};
