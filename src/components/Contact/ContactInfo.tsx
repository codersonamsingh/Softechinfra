"use client";

import React from "react";

const ContactInfo: React.FC = () => {
  return (
    <>
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="flaticon-email"></i>
                </div>
                <h3>Email Us</h3>
                <p>info@softechinfra.com</p>
                <p>support@softechinfra.com</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="contact-info-box">
                <div className="icon">
                //  <i className="flaticon-phone-call"></i>
                </div>
                <h3>Our Location</h3>
                <p>ARARIA, BIHAR 854321
                   INDIA Country</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="flaticon-marker"></i>
                </div>
                <h3>Call Us</h3>
                <p>+91 9846173905</p>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
