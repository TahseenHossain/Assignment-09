
const About = ({about}) => {
    const { id, title, img, details} = about;
  return (
    <div>
      <div>
        <div className="mb-12  mx-8">
          <h2 className="text-5xl text-[#FF477E] underline mb-4">{title}</h2>
          <h3 className="text-3xl">{details}</h3>
        </div>
      </div>
    </div>
  );
};

export default About;