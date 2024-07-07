import Title from "./Title";
import { serviceContent } from "../Data";
const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="Our" sub="Services"></Title>
      <div className="section-center services-center">
        {serviceContent.map((content) => {
          return (
            <article key={content.id} className="service">
              <span className="service-icon">
                <i className={content.className}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{content.text}</h4>
                <p className="service-text">{content.p}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Services;
