import React from "react";
import * as Input from "../Input";
import { FormWrapper, ForgetPassword, Terms } from "./styles";
// import { Label } from '../../theme/style/typeface'
import { CardWrapper } from "../Card";
import Button from "../Button";
import { Row } from "../../theme/style/styles";
import { SubLabel } from "../../theme/style/typeface";

export const ForgotPasswordForm = ({ ...props }) => {
  return (
    <CardWrapper
      width="662px"
      height="289px"
      boxShadow="0"
      backgroundColor="#fff"
    >
      <FormWrapper>
        <Input.Main
          label="Email"
          placeholder="Enter Email"
          name="email"
          value={props.inputs.email}
          onChange={props.handleOnChange}
        />
        <Button
          loading={props.inputs.loading}
          content="SUBMIT"
          onClick={props.handleSumbit}
        />
      </FormWrapper>
    </CardWrapper>
  );
};
export const ResetPasswordForm = ({ ...props }) => {
  return (
    <CardWrapper
      width="662px"
      height="289px"
      boxShadow="0"
      backgroundColor="#fff"
    >
      <FormWrapper>
        <Input.Main
          label="New Password"
          placeholder="Enter New Password"
          name="password"
          type="password"
          value={props.inputs.password}
          onChange={props.handleOnChange}
          margin="0 auto 25px"
        />
        <Input.Main
          label="Confirm Password"
          placeholder="Confirm Password"
          name="confirmPassword"
          type="password"
          value={props.inputs.confirmPassword}
          onChange={props.handleOnChange}
          margin="0 auto 10px"
        />
        <Button
          content="SUBMIT"
          loading={props.inputs.loading}
          onClick={props.handleSumbit}
        />
      </FormWrapper>
    </CardWrapper>
  );
};
export const LoginForm = ({ ...props }) => {
  return (
    <CardWrapper
      width="100%"
      height="350px"
      boxShadow="0"
      alignItems="flex-start"
      backgroundColor="#fff"
      {...props}
    >
      <FormWrapper>
        <Input.Main
          label="Email"
          placeholder="Enter Email"
          name="email"
          type="email"
          value={props.inputs.email}
          onChange={props.onChange}
          margin="30px auto 25px"
        />
        <Input.Main
          label="Password"
          placeholder="Enter Password"
          name="password"
          type="password"
          value={props.inputs.password}
          onChange={props.onChange}
          margin="25px auto 0"
        />
        <Button
          content="LOGIN"
          onClick={props.clicked}
          margin="40px auto 10px"
          loading={props.inputs.loading}
        />
        <ForgetPassword
          onClick={() => props.history.push("/login/forgotpassword")}
        >
          Forgot Password?
        </ForgetPassword>
      </FormWrapper>
    </CardWrapper>
  );
};
export const PartnerFormOne = ({ ...props }) => {
  return (
    <CardWrapper
      width="100%"
      height="350px"
      boxShadow="0"
      alignItems="flex-start"
      backgroundColor="#fff"
      margin="0 0 0"
      {...props}
    >
      <FormWrapper>
        <Input.Main
          label="Name of Individual (Registering for Company)"
          placeholder="Enter Name"
          name="repName"
          type="text"
          value={props.inputs.repName}
          onChange={props.handleOnChange}
          margin="30px auto 0"
        />
        <Input.Main
          label="Email"
          placeholder="Enter Email"
          name="repEmail"
          type="email"
          value={props.inputs.repEmail}
          onChange={props.handleOnChange}
          margin="30px auto 0"
        />

        <Input.MainPhoneFormatter
          label="Phone Number"
          placeholder="Enter Phone Number"
          name="repPhone"
          type="text"
          value={props.inputs.repPhone}
          onValueChange={props.onValueChange}
          format="+234(#) ### ### ####"
          mask="_"
          margin="30px auto 0"
        />
        <Input.Main
          label="Number on Means of Identification (Individual Registering for Company )"
          placeholder="eg: 123456"
          name="repIdNumber"
          type="text"
          value={props.inputs.repIdNumber}
          onChange={props.handleOnChange}
          margin="30px auto 0"
        />
        <Input.MainUpload
          label="Upload Means of Identification (Individual Registering for Company )"
          placeholder={props.inputs.repIdFilename || "Browse"}
          type="file"
          onChange={props.onFileChange}
          width="138px"
          margin="30px auto 0 0"
        />
        <Button
          content="NEXT"
          loading={props.inputs.loading}
          width="218px"
          height="32px"
          onClick={props.handleRegister}
          margin="30px 0 10px auto"
        />
      </FormWrapper>
    </CardWrapper>
  );
};
export const PartnerFormTwo = ({ ...props }) => {
  return (
    <CardWrapper
      width="100%"
      height="350px"
      boxShadow="0"
      alignItems="flex-start"
      backgroundColor="#fff"
      {...props}
    >
      <FormWrapper>
        <Input.Main
          label="Name of Company (As it appears on CAC Documents)"
          placeholder="Enter Name"
          name="companyName"
          type="text"
          value={props.inputs.companyName}
          onChange={props.handleOnChange}
          margin="30px auto 0"
        />
        <Input.Main
          label="Business Address "
          placeholder="Enter Address"
          name="businessAddress"
          type="text"
          value={props.inputs.businessAddress}
          onChange={props.handleOnChange}
          margin="20px auto 0"
        />

        <Input.Main
          label="RC Number"
          placeholder="eg: 123456"
          name="rcNumber"
          type="text"
          value={props.inputs.rcNumber}
          onChange={props.handleOnChange}
          margin="20px auto 0"
        />
        <Input.Main
          label="Email Address"
          placeholder="eg: example@example.com"
          name="email"
          type="email"
          value={props.inputs.email}
          onChange={props.handleOnChange}
          margin="20px auto 0"
        />

        <Input.MainPhoneFormatter
          label="phoneNumber"
          placeholder="eg: +234(0) 800 000 0000"
          name="repPhone"
          type="text"
          onValueChange={props.onValueChange}
          format="+234(#) ### ### ####"
          mask="_"
          margin="20px auto 0"
        />
        <Input.Main
          label="Password"
          placeholder="Enter Password"
          name="password"
          type="password"
          value={props.inputs.password}
          onChange={props.handleOnChange}
          margin="25px auto 0"
        />
        <Row justifyContent="flex-start">
          <Input.CheckBox
            name="terms"
            onChange={props.handleCheckbox}
            type="checkbox"
            label="I accept the"
            checked={props.inputs.terms}
          />
          <Terms onClick={props.handleTerms}>Terms & Policies</Terms>
        </Row>

        <Row>
          <Button
            altButton="true"
            content="PREVIOUS"
            width="218px"
            height="32px"
            onClick={props.handleGoBack}
            margin="20px 0 10px auto"
          />
          <Button
            content="NEXT"
            width="218px"
            height="32px"
            loading={props.inputs.loading}
            onClick={props.handleSignUp}
            margin="20px 0 10px auto"
          />
        </Row>
      </FormWrapper>
    </CardWrapper>
  );
};

export const UpdateProFileForm = ({ ...props }) => {
  return (
    <CardWrapper
      width="90%"
      height="350px"
      alignItems="center"
      padding="24px 0 90px"
      justifyContent="flex-start"
      backgroundColor="#fff"
      {...props}
    >
      <SubLabel>Company Details</SubLabel>
      <FormWrapper alignItems="flex-start">
        <Input.MainAltLabel
          width="625px"
          inputMargin="0 0 0 150px"
          margin="30px 0 0 "
          label="Company Name:"
          name="companyName"
          value={props.inputs.companyName}
          onChange={props.handleOnChange}
        />
        <Input.MainUploadAlt
          width="120px"
          inputMargin="0 0 0 165px"
          margin="30px 0 0 "
          label="Company Logo:"
          onChange={props.handleFileChange}
          placeholder={props.inputs.logoName || "Browser"}
        />

        <Input.MainAltLabel
          width="625px"
          inputMargin="0 0 0 158px"
          margin="30px 0 0 "
          label="Business Type:"
          placeholder="e.g: Transportation Services, Logistics, e.t.c"
          name="businessType"
          value={props.inputs.businessType}
          onChange={props.handleOnChange}
        />
        <Input.MainAltLabel
          width="625px"
          inputMargin="0 0 0 198px"
          margin="30px 0 0 "
          label="Address:"
          placeholder="Enter address here"
          name="businessAddress"
          value={props.inputs.businessAddress}
          onChange={props.handleOnChange}
        />
        <Input.MainAltLabel
          width="625px"
          inputMargin="0 0 0 215px"
          margin="30px 0 0 "
          label="Email:"
          placeholder="test@example.com"
          name="email"
          disabled
          value={props.inputs.email}
          // onChange={props.handleOnChange}
        />
        <Input.MainAltLabel
          width="625px"
          inputMargin="0 0 0 136px"
          margin="30px 0 0 "
          label="Phone Number(s):"
          placeholder="Separate each Number with a comma (,)"
          name="phoneNumber"
          value={props.inputs.phoneNumber}
          onChange={props.handleOnChange}
        />
        <Input.MainAltLabelAlt
          width="281px"
          inputMargin="0 0 0 172px"
          margin="30px 0 0 "
          label="Social Media:"
          placeholder="Enter Page Profile Url"
          media="Facebook"
          name="facebook"
          value={props.inputs.facebook}
          onChange={props.handleOnChange}
        />
        <Input.MainAltLabelAlt
          width="281px"
          inputMargin="0 0 0 248px"
          margin="30px 0 0"
          label=""
          placeholder="Enter Page Profile Url"
          media="Twitter"
          name="twitter"
          value={props.inputs.twitter}
          onChange={props.handleOnChange}
        />
        <Input.MainAltLabelAlt
          width="281px"
          inputMargin="0 0 0 248px"
          margin="30px 0 0 "
          label=""
          placeholder="Enter Page Profile Url"
          media="Instagram"
          name="instagram"
          value={props.inputs.instagram}
          onChange={props.handleOnChange}
        />
        <Button
          content="UPDATE"
          width="625px"
          loading={props.inputs.loading}
          onClick={props.handleSubmit}
          margin="80px 10px 10px auto"
        />
      </FormWrapper>
    </CardWrapper>
  );
};
export const UpdateBusinessForm = ({ ...props }) => {
  return (
    <CardWrapper
      width="90%"
      height="350px"
      alignItems="center"
      padding="24px 0 90px"
      justifyContent="flex-start"
      backgroundColor="#fff"
      {...props}
    >
      <SubLabel>Business Details</SubLabel>
      <FormWrapper alignItems="flex-start">
        <Input.TextAltLabel
          width="625px"
          textareaMargin="0 0 0 150px"
          margin="50px 0 0 "
          label="Business info:"
          name="businessInfo"
          placeholder="Enter details about your business"
          value={props.inputs.businessInfo}
          onChange={props.handleOnChange}
        />

        <Input.MainAltLabel
          width="625px"
          inputMargin="0 0 0 172px"
          margin="30px 0 0 "
          label="Terminals:"
          placeholder="e.g: Oshodi under bridge (Separate each terminal with a comma)"
          name="terminals"
          value={props.inputs.terminals}
          onChange={props.handleOnChange}
        />
        <Input.TextAltLabel
          width="625px"
          textareaMargin="0 0 0 134px"
          margin="30px 0 0 "
          label="Business Hours:"
          placeholder="Enter business days and hours here. (separate each business hour with a comma)"
          name="businessHour"
          value={props.inputs.businessHour}
          onChange={props.handleOnChange}
        />
        <Input.MainAltLabel
          width="625px"
          inputMargin="0 0 0 180px"
          margin="30px 0 0 "
          label="Services:"
          placeholder="Separate each service with a comma"
          name="services"
          value={props.inputs.services}
          onChange={props.handleOnChange}
        />
        <Button
          content="UPDATE"
          width="625px"
          loading={props.inputs.loading}
          onClick={props.handleSubmit}
          margin="80px 10px 10px auto"
        />
      </FormWrapper>
    </CardWrapper>
  );
};

export const AddRouteForm = ({ ...props }) => {
  const vehicles = props.vehicleTypes.map(vehicle => (
    <option key={vehicle._id} value={vehicle._id}>
      {vehicle.vehicleType}
    </option>
  ));
  return (
    <CardWrapper
      width="90%"
      height="350px"
      alignItems="center"
      padding="24px 0 50px"
      justifyContent="flex-start"
      backgroundColor="#fff"
      {...props}
    >
      <FormWrapper alignItems="flex-start">
        <Row flexWrap="wrap" padding="40px 0 0">
          <Input.Select
            label="Type of Vehicle"
            placeholder="Select type of vehicle"
            labelfontWeight="true"
            marginBottom="20px"
            // value={props.inputs.vehicleType}
            onChange={props.handleSelect}
          >
            <option hidden>Select type of vehicle</option>
            {vehicles}
          </Input.Select>

          <Input.Main
            width="414px"
            marginBottom="20px"
            height="43px"
            labelfontWeight="true"
            label="Vehicle Model"
            placeholder="e.g Ring road, Ibadan"
            name="vehicleModel"
            value={props.inputs.vehicleModel}
            onChange={props.handleOnChange}
          />
        </Row>
        <Row margin="20px auto 0">
          <Row width="50%" flexWrap="nowrap">
            <Input.Main
              width="185px"
              marginBottom="20px"
              height="43px"
              labelfontWeight="true"
              margin="0 18px"
              label="From ?"
              placeholder="e.g: Lagos"
              name="from"
              value={props.inputs.from}
              onChange={props.handleOnChange}
            />
            <Input.Main
              marginBottom="20px"
              width="185px"
              height="43px"
              labelfontWeight="true"
              margin="0 18px"
              label="to ?"
              placeholder="e.g: Abuja"
              name="to"
              value={props.inputs.to}
              onChange={props.handleOnChange}
            />
          </Row>
          <Input.MainFormatter
            width="414px"
            marginBottom="20px"
            height="43px"
            labelfontWeight="true"
            label="Price"
            thousandSeparator
            prefix={"₦"}
            placeholder="Enter Price"
            value={props.inputs.price}
            onValueChange={props.onValueChange}
          />
        </Row>
        <Row margin="20px auto 0">
          <Input.MainDate
            width="414px"
            marginBottom="20px"
            height="43px"
            labelfontWeight="true"
            label="Departure Time"
            placeholderText="e.g 4:00am"
            timeCaption="Time"
            dateFormat="h:mm aa"
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={5}
            name="departing"
            selected={props.inputs.departing}
            onChange={props.handleDatePicker}
          />
          <Input.Main
            width="414px"
            marginBottom="20px"
            height="43px"
            labelfontWeight="true"
            label="Available Seats"
            placeholder="Number of seats"
            disabled="Number of seats"
            value={props.inputs.seats}
            onChange={props.handleOnChange}
          />
        </Row>

        <Row padding="0 45px">
          <Button
            altButton="true"
            content="Publish"
            width="218px"
            loading={props.inputs.loading}
            onClick={props.handleSubmit}
            margin="80px 50px 10px auto"
          />
          <Button
            content="PREVIEW"
            width="409px"
            loading={props.inputs.loading}
            onClick={props.handleShowPreview}
            margin="80px 10px 10px 0"
          />
        </Row>
      </FormWrapper>
    </CardWrapper>
  );
};
export const EditRouteForm = ({ ...props }) => {
  const vehicles = props.vehicleTypes.map(vehicle => (
    <option key={vehicle._id} value={vehicle._id}>
      {vehicle.vehicleType}
    </option>
  ));
  return (
    <CardWrapper
      width="1000px"
      height="350px"
      alignItems="center"
      padding="24px 0 90px"
      justifyContent="flex-start"
      backgroundColor="#fff"
      {...props}
    >
      <FormWrapper alignItems="flex-start">
        <Row flexWrap="nowrap" padding="40px 0 0">
          <Input.Select
            label="Type of Vehicle"
            placeholder="Select type of vehicle"
            labelfontWeight="true"
            // value={props.inputs.vehicleType}
            onChange={props.handleSelect}
          >
            <option hidden>Select type of vehicle</option>
            {vehicles}
          </Input.Select>

          <Input.Main
            width="414px"
            height="43px"
            labelfontWeight="true"
            label="Vehicle Model"
            placeholder="e.g Ring road, Ibadan"
            name="vehicleModel"
            value={props.inputs.vehicleModel}
            onChange={props.handleOnChange}
          />
        </Row>
        <Row margin="20px auto 0">
          <Row width="50%">
            <Input.Main
              width="185px"
              height="43px"
              labelfontWeight="true"
              margin="0 18px"
              label="From?"
              placeholder="e.g: Lagos"
              name="from"
              value={props.inputs.from}
              onChange={props.handleOnChange}
            />
            <Input.Main
              width="185px"
              height="43px"
              labelfontWeight="true"
              margin="0 18px"
              label="to ?"
              placeholder="e.g: Abuja"
              name="to"
              value={props.inputs.to}
              onChange={props.handleOnChange}
            />
          </Row>
          <Input.MainFormatter
            width="414px"
            height="43px"
            labelfontWeight="true"
            label="Price"
            thousandSeparator
            prefix={"₦"}
            placeholder="Enter Price"
            value={props.inputs.price}
            onValueChange={props.onValueChange}
          />
        </Row>
        <Row margin="20px auto 0">
          <Input.MainDate
            width="414px"
            height="43px"
            labelfontWeight="true"
            label="Departure Time"
            placeholderText="e.g 4:00am"
            timeCaption="Time"
            dateFormat="h:mm aa"
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={5}
            name="departing"
            selected={props.inputs.departing}
            onChange={props.handleDatePicker}
          />
          <Input.Main
            width="414px"
            height="43px"
            labelfontWeight="true"
            label="Available Seats"
            placeholder="Number of seats"
            disabled="Number of seats"
            value={props.inputs.seats}
            onChange={props.handleOnChange}
          />
        </Row>

        <Row>
          <Button
            altButton="true"
            content="Cancel"
            width="218px"
            loading={props.inputs.loading}
            onClick={props.onHide}
            margin="80px 10px 10px auto"
          />
          <Button
            content="UPDATE"
            width="309px"
            loading={props.inputs.loading}
            onClick={props.handleEditSubmit}
            margin="80px 60px 10px 0"
          />
        </Row>
      </FormWrapper>
    </CardWrapper>
  );
};

export const BookFormFirst = ({ ...props }) => {
  return (
    <CardWrapper
      width="90%"
      height="350px"
      alignItems="center"
      padding="24px 0 50px"
      justifyContent="flex-start"
      backgroundColor="#fff"
      {...props}
    >
      <FormWrapper alignItems="flex-start" maxWidth="90%">
        <Row margin="20px auto 0">
          <Input.Main
            width="350px"
            maxWidth="100%"
            marginBottom="20px"
            height="43px"
            labelfontWeight="true"
            label="From Where?"
            placeholder="e.g Victoria Island, Lagos"
            name="fromWhere"
            value={props.inputs.fromWhere}
            onChange={props.handleOnChange}
          />
          <Input.Main
            width="350px"
            maxWidth="100%"
            marginBottom="20px"
            height="43px"
            labelfontWeight="true"
            label="To Where?"
            placeholder="e.g Ring Road, Ibadan"
            name="toWhere"
            value={props.inputs.toWhere}
            onChange={props.handleOnChange}
          />
        </Row>
        <Row flexWrap="wrap" padding="40px 0 0">
          <Input.MainDate
            width="350px"
            maxWidth="100%"
            marginBottom="20px"
            height="43px"
            labelfontWeight="true"
            label="When?"
            placeholderText="e.g 12 September 2019"
            timeCaption="Time"
            dateFormat="dd mmmmm yyyy"
            showTimeSelect={false}
            name="when"
            selected={props.inputs.when}
            onChange={val => props.handleDatePicker(val, "when")}
          />
          <Input.Select
            label="What type of trip?"
            labelfontWeight="true"
            marginBottom="20px"
            name="tripType"
            changed={props.handleOnChange}
            value={props.inputs.tripType}
            width="350px"
            maxWidth="100%"
          >
            {props.tripTypes.map(type => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </Input.Select>
        </Row>

        <Row justifyContent="center" flexWrap="wrap" padding="20px 0 0">
          <Input.CheckBox
            label="Would you like to hire a vehicle?"
            onClick={props.handleCheck}
            checkmarkClass={props.inputs.wantsHire && "checked"}
            zIndex="0"
          />
        </Row>

        <Row>
          <Button
            content="CONTINUE"
            display="block"
            width="250px"
            onClick={() => props.nextForm(2)}
            margin="30px auto 0"
          />
        </Row>
      </FormWrapper>
    </CardWrapper>
  );
};

export const ContactUsForm = ({ ...props }) => {
  return (
    <FormWrapper alignItems="flex-start" maxWidth="100%" width="100%">
      <Row margin="20px auto 0">
        <Input.Main
          width="100%"
          maxWidth="100%"
          margin="0"
          marginBottom="20px"
          height="43px"
          labelfontWeight="true"
          label=""
          placeholder="Enter your name"
          name="name"
          value={props.inputs.name}
          onChange={props.handleOnChange}
        />
      </Row>
      <Row flexWrap="wrap" padding="20px 0 0">
        <Input.Main
          width="100%"
          maxWidth="100%"
          margin="0"
          marginBottom="20px"
          height="43px"
          labelfontWeight="true"
          label=""
          placeholder="Enter your email"
          name="email"
          value={props.inputs.email}
          onChange={props.handleOnChange}
        />
      </Row>

      <Row justifyContent="center" flexWrap="wrap" padding="20px 0 0">
        <Input.Text
          width="100%"
          height="150px"
          maxWidth="100%"
          margin="0"
          marginBottom="20px"
          labelfontWeight="true"
          label=""
          name="message"
          value={props.inputs.message}
          onChange={props.handleOnChange}
        />
      </Row>

      <Row>
        <Button
          content="SEND"
          display="block"
          width="100%"
          onClick={props.handleSubmit}
          margin="20px auto 0"
        />
      </Row>
    </FormWrapper>
  );
};

export const AddReviewForm = ({ ...props }) => {
  return (
    <FormWrapper
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      border="1px solid rgba(0, 0, 0, 0.25)"
      borderRadius="10px"
      alignItems="flex-start"
      maxWidth="100%"
      width="100%"
      formPadding="30px 1vw"
    >
      <Row justifyContent="center" flexWrap="wrap" padding="20px 0 0">
        <Input.Text
          width="95%"
          height="190px"
          maxWidth="100%"
          margin="0 auto"
          textareaMargin="20px auto"
          textareaDisplay="block"
          textareaBoxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          marginBottom="20px"
          labelfontWeight="true"
          label="Add a Review"
          labelPadding="0 1vw 1vw"
          name="review"
          value={props.inputs.review}
          onChange={props.handleOnChange}
          placeHolder="Write your review here"
        />
      </Row>

      <Row>
        <Button
          content="ADD"
          display="block"
          width="180px"
          onClick={props.handleSubmit}
          margin="30px 5% 40px auto"
        />
      </Row>
    </FormWrapper>
  );
};
