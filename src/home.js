import Header from "./header";
export default function Home() {
  return (
    <>
      <div className="container   home " id="home">
        <div style={{ zIndex: "7" }}>
          <h3>NOW YOU CAN FEEL THE ENERGY</h3>
          <h1>Start your day with a black Coffee</h1>
          <button>BUY NOW</button>
        </div>
        <div className="overlay"></div>{" "}
      </div>
    </>
  );
}
