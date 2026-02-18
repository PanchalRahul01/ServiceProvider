import style from "../css/AllServices.module.css";
import Electricianphoto from "../assets/electricianphoto.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
function AllServices() {

     const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8082/services")
        .then(res => setServices(res.data))
        .catch(err => console.log(err));
    }, []);

    return(
            <div className={style.populerservicesContainer}>
                <div className={style.populerservicesCardsContainerHeader}>

                    <h2 className={style.populerservicesContainerHeader}>Book Pupular Services</h2>
                    <p>Most booked services by people in your city</p>

                </div>    
                <div className={style.populerservicesCardsContainer}>
                    {services.map(service => (
                        <div className={style.populerservicesCards} key={service.service_id}>
                        <div className={style.imgcontainer}>
                        <img src={Electricianphoto} alt={service.serviceName} />
                </div>

                <h3>{service.serviceName}</h3>
                <p className={style.description}>{service.description}</p>

                <div className={style.rating}>
                        <span>⭐ {service.rating}</span>
                        <span>({service.reviews_count} reviews)</span>
                </div>
                    <p>₹ {service.price}</p>
            </div>
            ))}                  
        </div>
    </div>
    );
}

export default AllServices;