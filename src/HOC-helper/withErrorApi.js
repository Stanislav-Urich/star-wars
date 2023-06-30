import React, { useState } from "react";
import ErrorMesseg from "../components/ErrorMesseg.js/ErrorMesseg";


export const WithErrorApi = (Wiew) => {
  const WithErrorApiComponent = (props) => {
    const [errorApi, setErrorApi] = useState(false);

    return (
      <>
        {errorApi ? (
          <ErrorMesseg/>
        ) : (
          <Wiew setErrorApi={setErrorApi} {...props} />
        )}
      </>
    );
  };

  return WithErrorApiComponent;
};