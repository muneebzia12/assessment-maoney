import React from "react";

const EmailInput = () => {
  return (
    // <div className="email-input-container">
    //   <input type="email" placeholder="Email" className="email-input" />
    //   <span className="download-btn emailicon">Subscribe</span>
    // </div>
    <div className="email-input-container">
      <input style={{fontFamily:'light'}} type="email" className="email-input" placeholder="Your email" />
      <div className="icon-rtl"></div>
    </div>
  );
};

export default EmailInput;
