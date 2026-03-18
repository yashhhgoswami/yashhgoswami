import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer</h4>
                <h5>Teachrity</h5>
              </div>
              <h3>July 2025 - Present</h3>
            </div>
            <p>
              Architected and deployed full-stack AI-powered classroom simulation platform using React.js, NestJS, and MongoDB. Engineered WebRTC-based voice communication system.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Quantum Computing Intern</h4>
                <h5>Defence Research and Development Organisation (DRDO)</h5>
              </div>
              <h3>May 2025 - July 2025</h3>
            </div>
            <p>
              Focused on photonic quantum computing, studying fundamental concepts and simulating key quantum algorithms like QFT and Bernstein-Vazirani using Perceval.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
