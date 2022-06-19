function NotFound() {
  return (
    <>
      <section>
        <div>
          <h1 className="text-center mt-5" style={{ fontSize: "70px" }}>
            404 😅
          </h1>
          <p className="lead mb-5">
            We could not find the page you were looking for.
            <br />
            <a href="/">
              <strong>Click Here</strong>
            </a>{" "}
            to return to our home page.
          </p>
        </div>
      </section>
    </>
  );
}

export default NotFound;
