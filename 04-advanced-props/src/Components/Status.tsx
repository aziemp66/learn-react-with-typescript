import React from "react";

type StatusProps = {
  status: "loading" | "success" | "error";
};

const Status = ({ status }: StatusProps) => {
  let message: string;
  if (status === "loading") {
    message = "Loading...";
  } else if (status === "success") {
    message = "Data Fetched Successfully";
  } else {
    message = "Error Fetching Data";
  }
  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
};

export default Status;
