const ServiceCard = ({ service }) => {
  const { title, img, price } = service;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={img}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body  text-left">
        <h2 className="card-title font-bold">{title}</h2>
        <p className="text-lg font-semibold text-orange-500">Price: ${price}</p>
        
      </div>
    </div>
  );
};

export default ServiceCard;
