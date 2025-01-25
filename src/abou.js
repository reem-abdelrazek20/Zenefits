export default function About() {
  return (
    <div className="pb-5 pt-5" itemID="about">
      <div className="container abou ">
        <div className=" row justify-content-start  align-items-center ">
          <div className="col-lg-6  justify-content-center align-items-center d-flex">
            <img src="/img/abou.jpg" className=""></img>
          </div>
          <div className="col-lg-6 ">
            <div>
              <p
                style={{
                  fontSize: "12px",
                  color: "#b68834",
                  textTransform: "uppercase",
                }}
              >
                LIVE COFFEE MAKING PROCESS.
              </p>
              <h2 style={{ paddingBottom: "8px" }}>
                {" "}
                We Telecast our Coffee Making Live
              </h2>
              <p>
                <strong style={{ display: "block", marginBottom: "1rem" }}>
                  We are here to listen from you deliver exellence
                </strong>{" "}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim.
              </p>
              .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
