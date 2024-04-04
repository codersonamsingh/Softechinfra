"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const WhyChooseUs: React.FC = () => {
  return (
    <>
      <div className="choose-area-two ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="choose-content">
                <div className="section-title text-left">
                  <span className="sub-title">Why Choose Us</span>
                  <h2>Engaging New Audiences Through Smart Approach</h2>

                  <p>
                  Softechinfra, An Indian startup in IT Services is a highly motivated and well-established firm with a solid and long-term record in the field of study, planning and execution of development projects. Established in the year 2014 in Calcutta, India. 
                  The company has remained an independent, fully Indian owned, providing services in software engineering, throughout India and many foreign country since that time.
                   The key agenda of the company is to deliver a completly bug free and trustworthy software as per need of the client.
                  </p>

                  {/* <p>
                    Nullam quis ante. Etiam sit amet orci eget eros faucibus
                    tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
                    Donec sodales sagittis magna. Sed consequat, leo eget
                    bibendum sodales, augue velit cursus nunc. Donec vitae
                    sapien ut libero venenatis faucibus tempus.
                  </p> */}
                </div>

                <div className="choose-btn">
                  <Link href="/about" className="default-btn">
                    Discover More <span></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="choose-image">
                <Image
                  src="/images/machine-learning/about3.png"
                  alt="image"
                  width={677}
                  height={520}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
