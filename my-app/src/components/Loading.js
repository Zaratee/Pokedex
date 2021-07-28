import React from "react";
import "../App.css";

const Loading = () => {

    return(
    <div className=" center-flex">
        <div className="loading-container">
          <div className="loading-img"></div>
          <div className="center-flex">
          <div className="loading-spin"></div>
          </div>
        </div>
      </div>
    )
}

export default Loading;