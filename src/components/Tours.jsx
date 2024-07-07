import Title from "./Title";
import { tourContent } from "../Data";
const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="Featured" sub="Tours"></Title>

      <div className="section-center featured-center">
        {tourContent.map((content) => {
          const { id, img, p, heading, date, location, days, price } = content;
          return (
            <article key={id} className="tour-card">
              <div className="tour-img-container">
                <img src={img} className="tour-img" alt={heading} />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{heading}</h4>
                </div>
                <p>{p}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{" "}
                    {location}
                  </p>
                  <p>{days} days</p>
                  <p>{price}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Tours;
