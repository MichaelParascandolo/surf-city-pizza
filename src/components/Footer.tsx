/* eslint-disable jsx-a11y/anchor-is-valid */
import Logo from "./Logo";

function Footer() {
  return (
    <>
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
          <a href="#" className="position-absolute bottom-0 end-0 p-2">
            <i className="bi bi-arrow-up-circle h1 text-danger"></i>
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
