
const Career = ({career}) => {
    const { job_title, qualification, experience, expected_salary } = career;
    return (
        <div>
      <div>
        <div className="mb-12  mx-8">
          <h2 className="text-5xl text-[#FF477E] underline mb-4">{job_title}</h2>
          <h3 className="text-3xl">{qualification}</h3>
          <h3 className="text-3xl">{experience}</h3>
          <h3 className="text-3xl">{expected_salary}</h3>
        </div>
      </div>
    </div>
    );
};

export default Career;