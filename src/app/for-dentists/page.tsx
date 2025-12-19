"use client";
import Referralform from "./_sections/Referralform";
import Footer from "@/_components/Footer";
import DoctorSection from "@/_components/DoctorSection";
import pngs from "@/_assets/pngs";
import HeroComponent from "@/_components/HeroComponent";
import { Suspense } from "react";

export default function ForDentistspage() {
  return (
    <>
      <HeroComponent
        pcBg="/bgimageFor.webp"
        mobileBg="/mobileForD.webp"
        title="Connecting with Dentists"
        titleMob="Connecting with Dentists"
        description="I support dentists through collaboration, referrals, and shared clinical care."
        descriptionMob="I support dentists through collaboration, referrals, and shared clinical care."
      />

      <DoctorSection
        title="learn Courses"
        description="I am committed to advancing the field of dentistry through education and mentorship. My professional training courses are designed for dental students and practitioners seeking to enhance their clinical skills, stay updated with the latest techniques, and gain hands-on experience under expert guidance."
        titleMob="learn Courses"
        descriptionMob="I am committed to advancing the field of dentistry through education and mentorship. My professional training courses are designed for dental students and practitioners seeking to enhance their clinical skills, stay updated with the latest techniques, and gain hands-on experience under expert guidance."
        bgColor="#fff"
        image={pngs.forDector}
        // imageLeft={true}
      />

      <DoctorSection
        title="Our Academy"
        description="Empowering the next generation of dental professionals through hands-on training, expert-led workshops, and evidence-based education. Dr Syed Qasim’s Academy is committed to raising clinical standards and sharing knowledge that shapes confident, skilled practitioners ready to make a real difference in modern dentistry."
        titleMob="Our Academy"
        descriptionMob="Empowering the next generation of dental professionals through hands-on training, expert-led workshops, and evidence-based education. Dr Syed Qasim’s Academy is committed to raising clinical standards and sharing knowledge that shapes confident, skilled practitioners ready to make a real difference in modern dentistry."
        bgColor="#fff"
        image={pngs.fordentail}
        imageLeft={true}
        textAlignMobile="end"
        bgImage={true}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <Referralform />
      </Suspense>
      <Footer />
    </>
  );
}
