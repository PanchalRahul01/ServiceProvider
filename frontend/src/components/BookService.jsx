import style from "../css/BookService.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import ServiceCard from "./ServiceCard";

function BookService() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const service = state;

  return (
    <div className={style.bookServiceContainer}>

      {/* Back Button */}
      <button onClick={() => navigate(-1)}>
        ← Back
      </button>

      <ServiceCard services={[service]} />

      <div className={style.bookingForm}>
        <h2>Book This Service</h2>

        <div className={style.dateTimeRow}>
          <div>
            <label>Date *</label>
            <input type="date" />
          </div>

          <div>
            <label>Time *</label>
            <input type="time" />
          </div>
        </div>

        <label>Address *</label>
        <input type="text" placeholder="Enter your full address" />

        <label>Notes (optional)</label>
        <textarea placeholder="Any special instructions..." />

        <label>Choose Professional (optional)</label>
        <select>
          <option>Select Professional</option>
          <option>Priya Sharma</option>
          <option>Rahul Patel</option>
          <option>Anjali Singh</option>
        </select>

        <button className={style.bookButton}>
          Book Now
        </button>
      </div>
    </div>
  );
}

export default BookService;
