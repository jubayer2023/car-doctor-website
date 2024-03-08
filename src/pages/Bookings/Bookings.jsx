import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import BookingsRow from "./BookingsRow";

const Bookings = () => {
  const { user } = useContext(AuthContext);

  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBookings(data);
      });
  }, [url]);

  const handleDeleteBooking = (id) => {
    let confirmation = confirm("Are you sure you want to delete ?");

    if (confirmation) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          alert('Successfully deleted!!')
          if (data.deletedCount > 0) {
            const remainingBookings = bookings.filter((booking) => booking._id !== id);
            setBookings(remainingBookings);
          }
        });
    }
  };

  return (
    <div className="overflow-x-auto py-6 md:py-12 bg-neutral-100">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Photo</th>
            <th>Services</th>
            <th>Date</th>
            <th>Price</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {/* row  */}
          {bookings.map((bookingItem) => (
            <BookingsRow
              key={bookingItem._id}
              bookingItem={bookingItem}
              handleDeleteBooking={handleDeleteBooking}
            ></BookingsRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bookings;
