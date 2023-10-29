import Logo from "./Logo";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center position-relative p-2">
      <div className="container">
        <Logo />
        <p className="lead">
          <i className="bi bi-heart-fill text-danger"></i>
          &nbsp;THANK YOU FOR SHOPPING&nbsp;
          <i className="bi bi-heart-fill text-danger"></i>
        </p>
        <p className="mb-0">
          Copyright &copy; {new Date().getFullYear()} | Surf City Pizza
        </p>
        <p className="mb-0">
          <a
            href="http://michaelparascandolo.com"
            target="_blank"
            rel="noreferrer"
          >
            Created by Michael Parascandolo
          </a>
        </p>
        <button
          onClick={scrollToTop}
          className="btn btn-custom position-absolute bottom-0 end-0 p-2"
        >
          <i className="bi bi-arrow-up-circle h1 text-danger"></i>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
