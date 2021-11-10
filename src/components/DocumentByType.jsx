import React from "react";

/* Utilities */
import { APIRequest } from "../apis/api";

/* Components */
import DocumentListTest from "./DocumentListTest";
import ErrorWarning from "./ErrorWarning";
import LoadingCard from "./LoadingCard";

const DocumentByType = ({ type, URL, tools }) => {
  const [state, setUrl] = APIRequest(`${URL}&data=production&type=${type}`);
  console.log(state.data);

  if (state.isError) {
    return <ErrorWarning />;
  }
  if (state.isLoading) {
    return <LoadingCard />;
  }
  return <DocumentListTest data={state.data.data} />;
};

export default DocumentByType;
