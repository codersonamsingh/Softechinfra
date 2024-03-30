import React from "react";
import Navbar from "../../components/Layout/Navbar";
import OurFeaturesTab from "../../components/Common/OurFeaturesTab";
import PageHeader from "../../components/Common/PageHeader";
import AboutArea from "../../components/AboutTwo/AboutArea";
import FunFactsTwo from "../../components/Common/FunFactsTwo";
import WhyChooseUs from "../../components/AboutTwo/WhyChooseUs";
import Solution from "../../components/Common/Solution";
import Testimonials from "../../components/Common/Testimonials";
import OurTeamTwo from "../../components/Common/OurTeamTwo";
import SubscribeStyleThree from "../../components/Common/SubscribeStyleThree";
import PartnerWithTitle from "../../components/Common/Partner/PartnerWithTitle";
import Footer from "../../components/Layout/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageHeader
        pageTitle="About Us "
        breadcrumbTextOne="Home"
        breadcrumbUrl="/"
        breadcrumbTextTwo="About Us "
      />

      <AboutArea />

      <OurFeaturesTab />

      <FunFactsTwo />

      <WhyChooseUs />

      <Solution />

      <Testimonials />

      <hr />

      <OurTeamTwo />

      <SubscribeStyleThree />

      <PartnerWithTitle />
      
      <Footer />
    </>
  );
}
