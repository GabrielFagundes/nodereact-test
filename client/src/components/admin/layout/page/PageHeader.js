import React from "react";
import MdArrowBack from "react-icons/lib/md/arrow-back";

const PageHeader = () => (
  <div className="page-header">
    <div className="title">
      <div className="arrow-back">
        <MdArrowBack
          className="arrow-icon"
          onClick={() => {
            window.history.back();
          }}
        />
      </div>
      <h1 className="page-title has-text">Apps</h1>
    </div>
  </div>
);
export default PageHeader;
