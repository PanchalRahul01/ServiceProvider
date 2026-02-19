import style from "../css/BookService.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import { useState } from "react";
import axios from "axios";
import {auth} from "../firebase/setup"

function BookService() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const service = state;

  const [form, setForm] = useState({
    userId: 1, // temporary user id (replace with login user later)
    serviceId: service?.service_id || "",
    bookingDate: "",
    bookingTime: "",
    address: "",
    notes: ""
  });

  // Handle input change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // Submit booking
  const submit = async () => {

    const user=auth.currentUser;

    if(!user){
      navigate("/login");
      return;
    }

    try {
      const payload = {
        ...form,
        bookingTime: form.bookingTime
          ? form.bookingTime + ":00"
          : ""
      };

      await axios.post(
        "http://localhost:8082/BookingService",
        payload
      );

      alert("Booking Successful ✅");
      navigate("/");
    } catch (err) {
      console.log(err.response?.data || err);
      alert("Booking Failed ❌");
    }
  };

  return (
    <div className={style.bookServiceContainer}>

      {/* Back Button */}
      <button onClick={() => navigate(-1)}>
        ← Back
      </button>

      {/* Selected Service Card */}
      {service && <ServiceCard services={[service]} />}

      {/* Booking Form */}
      <div className={style.bookingForm}>
        <h2>Book This Service</h2>

        <div className={style.dateTimeRow}>
          <div>
            <label>Date *</label>
            <input
              type="date"
              name="bookingDate"
              value={form.bookingDate}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Time *</label>
            <input
              type="time"
              name="bookingTime"
              value={form.bookingTime}
              onChange={handleChange}
            />
          </div>
        </div>

        <label>Address *</label>
        <input
          type="text"
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="Enter your full address"
        />

        <label>Notes (optional)</label>
        <textarea
          name="notes"
          value={form.notes}
          onChange={handleChange}
          placeholder="Any special instructions..."
        />

        <label>Choose Professional (optional)</label>
        <select>
          <option>Select Professional</option>
          <option>Priya Sharma</option>
          <option>Rahul Patel</option>
          <option>Anjali Singh</option>
        </select>

        <button
          className={style.bookButton}
          onClick={submit}
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

export default BookService;
