export default function Coffetype({ name, price }) {
  console.log(price);
  return (
    <div className="col-lg-4 ">
      <div className=" coffebox">
        <div className="d-flex  justify-content-between">
          <h4>{name}</h4>
          <p className="p">${price}</p>
        </div>
        <p>
          Usage of the Internet is becoming more common due to rapid advance.
        </p>
      </div>
    </div>
  );
}
