import React from "react";
import "../App.css";

const PageNotFound = (props) => {
    const {setDefault} = props;
    return(
    <div className="center-flex">
        <div className="margin-top page-not-found" onClick={() => setDefault('')}></div>
      </div>
    )
}

export default PageNotFound;