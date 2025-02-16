import "./informationBanner.css";

const InformationBanner = ({ title, titleSecound, description, benefits }) => {
  return (
    <section className="info-banner">
      <h2>
        {title} <span className="pink">{titleSecound}</span>
      </h2>
      <p>{description}</p>
      <div className="benefits-container">
        {benefits.map((benefit, index) => (
          <div className="benefit" key={index}>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InformationBanner;
