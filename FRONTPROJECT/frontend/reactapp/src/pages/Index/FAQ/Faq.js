import React from "react";
import "./Faq.css";
import Question from "./Question/Question";
import 'bootstrap/dist/css/bootstrap.min.css';

const Faq = () => {
  return (
    <div className="faq__body">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <Question />
            <Question />
            <Question />
          </div>
          <div className="col-lg-6">
            <Question />
            <Question />
            <Question />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;