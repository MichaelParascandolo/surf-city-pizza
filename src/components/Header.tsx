import Logo from "./Logo";

const header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-0 fixed-top">
      <div className="container">
        <a href="/" className="navbar-brand text-center">
          <Logo />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="/" className="nav-link text-success">
                <span>Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link text-white">
                <span>About</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="/menu" className="nav-link text-danger">
                <span>Menu</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default header;
