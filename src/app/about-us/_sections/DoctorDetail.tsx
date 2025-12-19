import pngs from "@/_assets/pngs";
import DoctorSection from "@/_components/DoctorSection";
import type { DoctorSectionProps } from "@/_components/DoctorSection";

const sectionsData: DoctorSectionProps[] = [
  {
    title: "Get to Know Me",
    description:
      "I am a dedicated dental team providing high-quality care in a relaxed and friendly setting.",
    titleMob: "Get to Know Me",
    descriptionMob:
      "I am a dedicated dental team providing high-quality care in a relaxed and friendly setting.",
    image: pngs.about1,
    imageLeft: false,
  },
  {
    title: "What Sets me Apart",
    description:
      "I take the time to listen, understand your needs, and create a treatment plan that works for you. Every patient is different, and I make sure my care reflects that.",
    titleMob: "What Sets me Apart",
    descriptionMob:
      "I take the time to listen, understand your needs, and create a treatment plan that works for you. Every patient is different, and I make sure my care reflects that.",
    image: pngs.about2,
    imageLeft: true,
    textAlignMobile: "end",
    bgImage: true,
  },
  {
    title: "Trusted Care",
    description:
      "I am your partner in long-term oral health. Whether you're coming in for a simple cleaning or a full smile transformation, you’ll always be treated like family.",
    titleMob: "Trusted Care",
    descriptionMob:
      "I am your partner in long-term oral health. Whether you're coming in for a simple cleaning or a full smile transformation, you’ll always be treated like family.",
    image: pngs.about3,
    imageLeft: true,
  },
];

const DoctorDetailPage = () => {
  return (
    <>
      {sectionsData.map((section, index) => (
        <DoctorSection key={index} {...section} />
      ))}
    </>
  );
};

export default DoctorDetailPage;
