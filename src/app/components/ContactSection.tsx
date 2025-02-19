import SocialMediaIcons from "./SocialMediaIcons";
import H2Title from "./H2Title";
import SectionWrapper from "./SectionWrapper";

const ContactSection = () => {
  return (
    <SectionWrapper id="contact">
      <H2Title titleLabel={"Contact Me"} />
      <SocialMediaIcons />
    </SectionWrapper>
  );
};

export default ContactSection;
