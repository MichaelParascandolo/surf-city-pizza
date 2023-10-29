const Contact = () => {
  return (
    <section className="p-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-md">
            <h2 className="text-center mb-4">Contact Info</h2>
            <ul className="list-group list-group-flush lead">
              <li className="list-group-item">
                <span className="fw-bold">
                  Address: <br />
                </span>
                1017 Long Beach Blvd, Surf City, NJ 08008&nbsp;
                <i className="bi bi-geo-alt"></i>
              </li>
              <li className="list-group-item">
                <span className="fw-bold">
                  Primary Number: <br />
                </span>
                (609)-361-8150&nbsp;<i className="bi bi-telephone"></i>
              </li>
              <li className="list-group-item">
                <span className="fw-bold">
                  Secondary Number: <br />
                </span>
                (609)-361-7500&nbsp;<i className="bi bi-telephone"></i>
              </li>
            </ul>
          </div>
          <div className="col-md d-none d-md-block d-lg-block">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3071.467834915334!2d-74.16851198255615!3d39.6616896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c1a9a3df4cd12d%3A0x6523545a977f2782!2sSurf%20City%20Pizza!5e0!3m2!1sen!2sus!4v1651707216472!5m2!1sen!2sus"
              width="600"
              height="400"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
              style={{ border: "1px solid black" }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
