import style from "../css/home.module.css";
import electricianImg from "../assets/electrician.png";
import plumberImg from "../assets/plumber.png";
import carpenterImg from "../assets/carpenter.png";
import acRepairImg from "../assets/air-conditioner.png";
import houseCleaningImg from "../assets/house.png";
import { useState } from "react";
import location from "../assets/gps.png";
import AllServices from "../components/AllServices";
function Home() {

    const [services, setServices] = useState([]);

    const handleServiceSelect = (e) => {
        setServices(e.target.value);
    }

  return (
    <div className={style.homeContainer}>

        {/* Search a Service... And Intro */}
        <div className={style.homeContent}>
            <h1 className={style.homeHeading}>
            Find Best <span>Services</span> Near You
            </h1>
            <p>Book trusted professionals for all your service needs</p>

            <div className={style.homeSearchContainer}>
                <div className={style.homeLocationSelect}>
                    <img src={location}></img>
                    <select>
                        <option>Ahmedabad</option>
                        <option>Surat</option>
                    </select>
                </div>
            <input
                type="text"
                placeholder="Search for services..."
                value={services}
                onChange={handleServiceSelect}
                className={style.homeSearch}
            />
            <button className={style.homeButton}>Search</button>
            </div>
            <div className={style.homeCategories}>
                <option onClick={handleServiceSelect} value="electrician">Electrician</option>
                <option onClick={handleServiceSelect} value="plumber">Plumber</option>
                <option onClick={handleServiceSelect} value="carpenter">Carpenter</option>
                <option onClick={handleServiceSelect} value="ac-repair">Ac Repair</option>
            </div>
        </div>

        {/* Cards for Services ... */}
        <div className={style.homeServices}>
            <h2>What Are You Looking For?</h2>
            <p>Browse from our wide range of home services</p>
            <div className={style.homeServiceCardsContainer}>
                <div className={style.homeServiceCard}>
                    <img src={electricianImg}></img>
                    <p>Electrician</p>
                </div>
                <div className={style.homeServiceCard}>
                    <img src={plumberImg}></img>
                    <p>Plumber</p>
                </div>
                <div className={style.homeServiceCard}>
                    <img src={carpenterImg}></img>
                    <p>Carpenter</p>
                </div>
                <div className={style.homeServiceCard}>
                    <img src={acRepairImg}></img>
                    <p>AC Repair</p>
                </div>
    
                <div className={style.homeServiceCard}>
                    <img src={houseCleaningImg}></img>
                    <p>House Cleaning</p>
                </div>
            </div>
           
           <AllServices />        
        </div>
    </div>
  );
}

export default Home;