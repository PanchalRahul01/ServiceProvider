import style from "../css/AllServices.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import ServiceCard from "../components/ServiceCard";

function AllServices() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get("http://localhost:8082/services");
        setServices(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className={style.populerservicesContainer}>
        <div className={style.populerservicesCardsContainerHeader}>
                <h2>Book Popular Services</h2>
                <p>Most booked services by people in your city</p>
        </div>
        
      {loading ? (
        <p>Loading services...</p>
      ) : (
        <ServiceCard services={services} />
      )}
    </div>
  );
}

export default AllServices;
