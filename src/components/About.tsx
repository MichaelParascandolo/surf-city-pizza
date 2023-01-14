import Logo from "./Logo";
function About() {
  return (
    <>
      <section className="p-3 bg-dark text-light" id="about">
        <div className="container">
          <h2 className="mb-4">About</h2>
          <div className="row align-items-center justify-content-between">
            <div className="col-md">
              <iframe
                style={{
                  width: "100%",
                  height: "350px",
                  display: "block",
                  marginBottom: "10px",
                  border: "1px solid white",
                }}
                src="https://www.youtube-nocookie.com/embed/5zO9YLCBovk"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="col-md text-center">
              <Logo />
              <p className="lead">PIZZERIA & ITALIAN RESTAURANT</p>
              <p className="lead">
                <p className="lead">OPEN SEVEN DAYS A WEEK</p>
                <i className="bi bi-geo-alt"></i> 1017 Long Beach Blvd, Surf
                City, New Jersey 08008
              </p>
              <a
                href="https://www.facebook.com/SurfCityPizza"
                target="_blank"
                className="btn btn-lg btn-primary mt-2"
                rel="noreferrer"
                style={{ backgroundColor: "#4267b2" }}
              >
                LIKE US ON FACEBOOK&nbsp;
                <i className="bi bi-facebook" style={{ fontSize: "25px;" }}></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
