import "./OurServices.css";
import gifComputer from "../Images/computer-gif.gif";
import gifDocument from "../Images/document-gif.gif";
import gifWork from "../Images/work-gif.gif";

const OurServices = () => {
  return (
    <section className="our-services">
      <h2>My Journey</h2>
      <p>
        Know more about my journey into software development and how my skills
        can help you succeed in web development projects.
      </p>

      <div className="service-cards">
        <div className="service-card">
          <div className="icon-container">
            <img src={gifDocument} alt="GIF Animation" width="48" height="48" />
          </div>
          <h3>BACHELOR’S DEGREE</h3>
          <p>
            Graduated with a Bachelor’s in  <b>Information Systems from UBA</b>,
            Argentina, with a strong foundation in both business and technology
            management.
          </p>
        </div>

        <div className="service-card">
          <div className="icon-container">
            <img src={gifWork} alt="GIF Animation" width="48" height="48" />
          </div>
          <h3>WORK EXPERIENCE</h3>
          <p>
           Worked on frontend and backend development, building applications. I’ve had the chance to
            work at companies like <b>JP Morgan and ExxonMobil</b>, which gave me a lot
            of hands-on experience with real-world projects.
          </p>
        </div>

        <div className="service-card">
          <div className="icon-container">
            <img src={gifComputer} alt="GIF Animation" width="48" height="48" />
          </div>
          <h3>WEB DEVELOPMENT</h3>
          <p>
           Building modern, <b>responsive websites</b> and apps, connecting the
            frontend with the backend. Working with tools like React, Node.js,
            and databases.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
