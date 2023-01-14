function Hero() {
  return (
    <>
      <main className="bg-dark text-light p-5 pt-lg-5 pb-lg-4" id="home">
        <h1 className="mt-1">Surf City</h1>
        <h2 className="mb-0">
          <span className="text-success">P</span>
          <span className="text-white">I</span>
          <span className="text-danger">Z</span>
          <span className="text-success">Z</span>
          <span className="text-white">A</span>
        </h2>
        <div className="desc-container">
          <h3>
            <span className="text-success">PIZZERIA </span>& ITALIAN
            <span className="text-danger"> RESTAURANT</span>
          </h3>
          <h3>
            <span className="text-success">609 </span>- 361 -
            <span className="text-danger"> 8150</span>
          </h3>
          <h4>OPEN SEVEN DAYS A WEEK</h4>
        </div>
        <a href="/menu" className="btn btn-danger btn-lg px-4">
          View Our Menu <i className="bi bi-list"></i>
        </a>
      </main>
    </>
  );
}

export default Hero;
