import React from "react";
const MyAlert = (props) => {
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{props.alert.msg}</strong>
        <button type="button" data-bs-dismiss="alert"></button>
      </div>
    )
  );
};

export default MyAlert;
