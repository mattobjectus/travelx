import Title from "./Title";
import { toursData } from "../data";
export const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title titlep1="featured" titlep2="tours" />
      <div className="section-center featured-center">
        {toursData.map((link) => {
          const {
            image,
            name,
            date,
            description,
            id,
            country,
            duration,
            price,
          } = link;
          return (
            <article key={id} className="tour-card">
              <div className="tour-img-container">
                <img src={image} className="tour-img" alt="" />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{name}</h4>
                </div>
                <p>{description}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{" "}
                    {country}
                  </p>
                  <p>{duration} days</p>
                  <p>from ${price}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
