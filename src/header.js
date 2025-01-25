export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="d-flex  justify-content-between">
          <div className="logo">
            <h1 className="h1-logo">cofe</h1>
          </div>

          <div className="header-lest">
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                {" "}
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#coffe">Coffee</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href=""> Pages</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
