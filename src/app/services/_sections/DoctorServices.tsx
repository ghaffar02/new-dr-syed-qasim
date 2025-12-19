// DoctorDetailPage.tsx

import pngs from "@/_assets/pngs";
import DoctorSection from "@/_components/DoctorSection";
import type { DoctorSectionProps } from "@/_components/DoctorSection";

const sectionsData: DoctorSectionProps[] = [
  {
    title: "Luxe Composite Bonding",
    description:
      "Transform your smile with precision and elegance. Luxe Composite Bonding is a minimally invasive cosmetic treatment that reshapes, restores, and enhances your teeth using high-quality composite resin. Perfect for fixing chips, gaps, or uneven edges, this advanced treatment offers immediate results with a natural finish — all in a single visit. I combine artistic skill with clinical expertise to craft smiles that are both stunning and long-lasting.",
    titleMob: "Luxe Composite Bonding",
    descriptionMob:
      "Transform your smile with precision and elegance. Luxe Composite Bonding is a minimally invasive cosmetic treatment that reshapes, restores, and enhances your teeth using high-quality composite resin.",
    image: pngs.services1,
    imageLeft: false,
  },
  {
    title: "Composite bonding",
    description:
      "Enhance your smile with precision and care through my expert composite bonding service. This minimally invasive treatment repairs chipped, discoloured, or uneven teeth using tooth-coloured resin for a natural-looking result. At Dr Syed Qasim’s clinic, I blend aesthetics with function to restore your smile quickly, comfortably, and effectively—often in just one visit.",
    titleMob: "Composite bonding",
    descriptionMob:
      "Enhance your smile with precision and care through my expert composite bonding service. This minimally invasive treatment repairs chipped, discolored, or uneven teeth using tooth-colored resin for a natural-looking result.",
    image: pngs.services2,
    imageLeft: true,
    textAlignMobile: "end",
    // bgColor:"#80858633"
    bgImage: true,
  },
  {
    title: "Porcelain veneers",
    description:
      "Transform your smile with natural-looking porcelain veneers. At Dr Syed Qasim’s clinic, I offer custom-crafted veneers that cover imperfections such as chips, stains, gaps, and uneven teeth. Designed to match the shape and color of your natural teeth, porcelain veneers provide a long-lasting, beautiful smile with minimal tooth alteration. Trust our expertise to enhance your appearance with precision and care.",
    titleMob: "Porcelain veneers",
    descriptionMob:
      "Transform your smile with natural-looking porcelain veneers. I offer custom-crafted veneers that cover imperfections such as chips, stains, gaps, and uneven teeth.",
    image: pngs.services3,
    imageLeft: false,
  },
  {
    title: "Invisalign",
    description:
      "Achieve a beautifully aligned smile without the discomfort of traditional braces. Invisalign offers a discreet, comfortable, and effective way to straighten your teeth using clear, removable aligners. At Dr Syed Qasim’s clinic, I provide customized Invisalign treatment plans tailored to your dental goals — all with minimal interruption to your daily life.",
    titleMob: "Invisalign",
    descriptionMob:
      "Achieve a beautifully aligned smile without the discomfort of traditional braces. Invisalign offers a discreet, comfortable, and effective way to straighten your teeth using clear, removable aligners.",
    image: pngs.services4,
    imageLeft: true,
    textAlignMobile: "end",
    bgImage: true,
  },
  {
    title: "surgical dentistry",
    description:
      "Restore your smile with confidence through my advanced implant and surgical dental solutions. Dr Syed Qasim offers precise, minimally invasive treatments for missing teeth, bone loss, and oral health issues requiring surgical care. Using state-of-the-art technology and techniques, I ensure safe procedures, faster healing, and long-lasting results tailored to your needs.",
    titleMob: "surgical dentistry",
    descriptionMob:
      "Restore your smile with confidence through my advanced implant and surgical dental solutions. Dr Syed Qasim offers precise, minimally invasive treatments for missing teeth, bone loss, and oral health issues requiring surgical care.",
    image: pngs.services5,
    imageLeft: false,
  },
  {
    title: "Full mouth rehabilitation",
    description:
      "Restore your smile, function, and confidence with comprehensive full mouth rehabilitation. At Dr Syed Qasim’s clinic, I take a personalized approach to rebuilding your oral health through a combination of advanced restorative and cosmetic treatments. Whether you're dealing with worn, damaged, or missing teeth, I create a tailored treatment plan designed to bring comfort, balance, and beauty.",
    titleMob: "Full mouth rehabilitation",
    descriptionMob:
      "Restore your smile, function, and confidence with comprehensive full mouth rehabilitation. At Dr Syed Qasim’s clinic, I take a personalized approach to rebuilding your oral health through a combination of advanced restorative and cosmetic treatments.",
    image: pngs.services6,
    imageLeft: true,
    textAlignMobile: "end",
    // bgColor:"#80858633"
    bgImage: true,
  },
];

const DoctorServicesPage = () => {
  return (
    <>
      {sectionsData.map((section, index) => (
        <DoctorSection key={index} {...section} />
      ))}
    </>
  );
};

export default DoctorServicesPage;
