const BookingsRow = ({ bookingItem }) => {
  // console.log(bookingItem);
  const { service, img, date, price } = bookingItem;
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="avatar">
          <div className="w-16 rounded-xl">{img && <img src={img} />}</div>
        </div>
      </td>
      <td>{service}</td>
      <td>{date}</td>
      <td>$ {price}</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default BookingsRow;
