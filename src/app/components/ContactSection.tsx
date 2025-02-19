import SocialMediaIcons from "./SocialMediaIcons";

const ContactSection = () => {
  return (
    <section id="contact" className="w-full flex flex-col justify-center items-center bg-[#0b0b0b] p-8">
      <h2 className="text-3xl text-white font-bold text-center mb-8">Contact me</h2>
      <SocialMediaIcons />
    </section>
  );
};

export default ContactSection;
