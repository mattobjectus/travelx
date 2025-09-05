import Title from "./Title";
import { servicesData } from "../data";
const Services = () => {
  return (
    <section className="section services" id="services">
      <Title titlep1="our" titlep2="servicesss" />

      <div className="section-center services-center">
        {servicesData.map((link) => {
          const { icon, name, description, id } = link;
          return (
            <article className="service">
              <span className="service-icon">
                <i className={icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{name}</h4>
                <p className="service-text">{description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Services;
