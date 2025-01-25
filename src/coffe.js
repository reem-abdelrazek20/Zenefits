import Coffetype from "./coffetype";
export default function Coffee() {
  return (
    <div className="box" id="coffe">
      <div className="container">
        {" "}
        <div className="text-center">
          {" "}
          <h2>What kind of Coffee we serve for you</h2>
          <p>Who are in extremely love with eco friendly system.</p>
        </div>
        <div className="row">
          <Coffetype name="Cappuccino" price="22" />
          <Coffetype name="Mocha" price="21" />
          <Coffetype name="Macchiato" price="42" />
          <Coffetype name="Ristretto" price="23" />
          <Coffetype name="Affogato" price="32" />
          <Coffetype name="Americano" price="44" />
          <Coffetype name="Piccolo Latte" price="41" />
          <Coffetype name="Piccolo Latte" price="41" />
          <Coffetype name="Coffee Latte" price="41" />
        </div>
      </div>
    </div>
  );
}
