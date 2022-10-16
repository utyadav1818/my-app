import React from "react";

function Alert(props) {
  const capital = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    props.alertMsg && (
      <div
        className={`alert alert-${props.alertMsg.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capital(props.alertMsg.type)}</strong> {props.alertMsg.message}
      </div>
    )
  );
}

export default Alert;
