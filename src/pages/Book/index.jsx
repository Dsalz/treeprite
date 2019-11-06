import React, { Component } from "react";
import swal from "sweetalert";
import validator from "validator";

// Components
import Layout from "../../container/DashboardWrapper";
import { BookFormFirst as FirstForm } from "../../components/Forms";
// auth
// Styles.jsx
import StyleWrapper from "./styles";
// Generic Components
import { Wrapper, Column } from "../../theme/style/styles";
import { Header } from "../../theme/style/typeface";
const styles = {
  Wrapper: {
    height: "calc(94vh - 103px)"
  },
  Header: {
    altHeader: "true",
    marginHeader: "30px 0"
  },
  Column: {
    width: "calc(100% - 200px)",
    margin: "0 0 45px 200px"
  }
};

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fromWhere: "",
      toWhere: "",
      _id: "",
      when: "",
      tripType: "",
      wantsHire: false,
      tripTypes: ["One Way Trip", "Round Trip"],
      formNo: 1
    };
  }

  // onChange handler for input fields
  handleOnChange = e => {
    const { name, value } = e.target;
    this.setState({ ...this.state, [name]: value });
  };

  handleCheck = e => {
    const { wantsHire } = this.state;
    this.setState({ ...this.state, wantsHire: !wantsHire });
  };

  nextForm = val => {
    this.setState({
      ...this.state,
      formNo: val
    });
  };

  // reusable datepicker handler
  handleDatePicker = (val, field) => {
    this.setState({ [field]: val });
  };
  // function to validate edit route form
  handleSubmit = e => {
    e.preventDefault();
    const {
      departing,
      price,
      to,
      from,
      vehicleTypeId,
      vehicleType,
      vehicleModel,
      _id
    } = this.state;
    if (validator.isEmpty(price)) {
      swal("Empty Pricing", "Please Specify Pricing details", "error");
      return;
    }
    if (validator.isEmpty(from)) {
      swal("From field Empty", "Please Specify Departure", "error");
      return;
    }
    if (validator.isEmpty(to)) {
      swal("To field Empty", "Please Specify destination", "error");
      return;
    }
    if (validator.isEmpty(vehicleType)) {
      swal("No Vehicle Selected", "Please Specify Vehicle Type", "error");
      return;
    }
    if (validator.isEmpty(vehicleModel)) {
      swal("No Model", "Please Specify Vehicle Model", "error");
      return;
    }
    if (validator.isEmpty(departing.toString())) {
      swal("No Depature Time", "Please Specify Departure Time", "error");
      return;
    }
    this.setState({ loading: true }, () => this.handleAddRoute());
  };
  render() {
    const { tripTypes } = this.state;
    return (
      <Layout>
        <StyleWrapper>
          <Wrapper className="fixedheight" {...styles.Wrapper}>
            <Column {...styles.Column} isMainSection>
              <Header {...styles.Header}>Book a Trip</Header>
              <FirstForm
                inputs={this.state}
                handleOnChange={this.handleOnChange}
                onValueChange={this.onValueChange}
                handleSelect={this.handleSelect}
                handleSubmit={this.handleSubmit}
                handleShowPreview={this.handleShowPreview}
                vehicleTypes={this.props.vehicleTypes}
                handleDatePicker={this.handleDatePicker}
                tripTypes={tripTypes}
                handleCheck={this.handleCheck}
                nextForm={this.nextForm}
              />
              {/* <Dashboard /> */}
            </Column>
          </Wrapper>
        </StyleWrapper>
      </Layout>
    );
  }
}

export default index;
