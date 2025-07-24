import React, { useRef } from "react";
import { Box, Grid } from "@mui/material";

const FormFildArea = ({fields, onSubmit}) => {
   const inputRefs = {
      firstName : useRef(),
      lastName : useRef(),
      age : useRef(),
      email : useRef(),
      password : useRef(),
      confirmPassword : useRef(),
      address : useRef(),
      city : useRef(),
      state : useRef(),
      country : useRef(),
      pincode : useRef(),
      phoneNumber : useRef(),
   }
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {};
    fields.forEach((field) => {
      formData[field] = inputRefs[field]?.current?.value || '';
    });
    console.log('submit value', formData);
    onSubmit(formData);

    // const {
    //   firstName: fnameRef.current?.value || '',
    //   lastName: lnameRef.current?.value || '',
    //   age: ageRef.current?.value || '',
    //   email: emailRef.current?.value || '',
    //   password: pswrdRef.current?.value || '',
    //   confirmPassword: cpswrdRef.current?.value || '',
    //   address: addRef.current?.value || '',
    //   city: cityRef.current?.value || '',
    //   state: stateRef.current?.value || '',
    //   country: countryRef.current?.value || '',
    //   pincode: pincodeRef.current?.value || '',
    //   phoneNumber: phoneRef.current?.value || '',
    // };
  };

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {fields.includes('firstName') && (
            <Grid item xs={12}>
            <input type="text" ref={inputRefs?.firstName} placeholder="First Name" />
          </Grid>
        )}
          {fields.includes('lastName') && (
            <Grid item xs={12}>
            <input type="text" ref={inputRefs?.lastName} placeholder="Last Name" />
          </Grid>
          )}
          {fields.includes('age') && (
            <Grid item xs={12}>
            <input type="number" ref={inputRefs?.age} placeholder="Age" />
          </Grid>
          )}
          {fields.includes('email') && (
           <Grid item xs={12}>
            <input type="email" ref={inputRefs?.email} placeholder="Email" />
          </Grid> 
          )}
          {fields.includes('password') && (
            <Grid item xs={12}>
            <input type="password" ref={inputRefs?.password} placeholder="Password" />
          </Grid>
          )}
          {fields.includes('confirmPassword') && (
            <Grid item xs={12}>
            <input type="password" ref={inputRefs?.confirmPassword} placeholder="Confirm Password" />
          </Grid>
          )}
          {fields.includes('address') && (
            <Grid item xs={12}>
            <input type="text" ref={inputRefs?.address} placeholder="Address" />
          </Grid>
          )}
          {fields.includes('city') && (
            <Grid item xs={12}>
            <input type="text" ref={inputRefs?.city} placeholder="City" />
          </Grid>
          )}
          {fields.includes('state') && (
            <Grid item xs={12}>
            <input type="text" ref={inputRefs?.state} placeholder="State" />
          </Grid>
          )}
          {fields.includes('country') && (
            <Grid item xs={12}>
            <input type="text" ref={inputRefs?.country} placeholder="Country" />
          </Grid>
          )}
          {fields.includes('pincode') && (
            <Grid item xs={12}>
            <input type="number" ref={inputRefs?.pincode} placeholder="Pincode" />
          </Grid>
          )}
          {fields.includes('phoneNumber') && (
            <Grid item xs={12}>
            <input type="text" ref={inputRefs?.phoneNumber} placeholder="Phone Number" />
          </Grid>
          )}
          {/* {fields.includes('submit') && ( */}
            <Grid item xs={12}>
            <button type="submit">Submit</button>
          </Grid>
          {/* )} */}
        </Grid>
      </form>
    </Box>
  );
};

export default FormFildArea;
