import style from "../css/ServiceCard.module.css";
import Electricianphoto from "../assets/electricianphoto.jpg";
import { useNavigate } from "react-router-dom";

function ServiceCard({ services }) {
  const navigate = useNavigate();

  return (
    <>
      
      <div className={style.populerservicesCardsContainer}>
        {services?.map(service => (
          <div
            key={service.service_id}
            className={style.populerservicesCards}
            onClick={() =>
              navigate("/services", { state: service })
            }
          >
            <div className={style.imgcontainer}>
              <img
                src={Electricianphoto}
                alt={service.serviceName}
              />
            </div>

            <h3>{service.serviceName}</h3>
            <p className={style.description}>
              {service.description}
            </p>

            <div className={style.rating}>
              <span>⭐ {service.rating}</span>
              <span>
                ({service.reviews_count} reviews)
              </span>
            </div>

            <p>₹ {service.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default ServiceCard;
