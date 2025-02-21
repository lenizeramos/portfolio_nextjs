import SocialMediaIcons from "./SocialMediaIcons";
import H2Title from "./H2Title";


const ContactSection = () => {
  return (
    <section id="contact" className="w-full flex flex-col justify-center items-center bg-bgColorStart p-8 border-t border-gray-700">
      <H2Title titleLabel={"Contact me"} />
      <SocialMediaIcons />
    </section>
  );
};

export default ContactSection;
