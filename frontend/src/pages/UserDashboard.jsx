import style from "../css/userdashboard.module.css";

function UserDashboard() {
  return (
    <>
        <div className={style.simplediv}></div>

    <div className={style.userdashboard}>
      
      {/* Header Section */}
      <div className={style.userHeading}>
        <div className={style.userInfo}>
          <div className={style.avatar}>R</div>

          <div>
            <h2>Rahul Panchal</h2>
            <p>panchalrahulbhai946@gmail.com</p>
          </div>
        </div>

        <button className={style.bookBtn}>
          Book A Service →
        </button>
      </div>

      {/* Stats Section */}
      <div className={style.statsContainer}>
        <div className={style.card}>
          <h1>1</h1>
          <p>Total Bookings</p>
        </div>

        <div className={style.card}>
          <h1>1</h1>
          <p>Active</p>
        </div>

        <div className={style.card}>
          <h1>0</h1>
          <p>Completed</p>
        </div>

        <div className={style.card}>
          <h1>₹0</h1>
          <p>Total Spent</p>
        </div>
      </div>

    </div>
    </>
    
  );
}

export default UserDashboard;
