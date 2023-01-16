const ReviewItem = ({ name, text }: { name: string; text: string }) => {
  const styles = {
    star: "bi bi-star-fill text-warning",
  };
  return (
    <>
      <div className="col-md">
        <div className="card">
          <h5 className="card-header text-center">
            <i className="bi bi-person-circle"></i> {name}
          </h5>
          <div className="card-body">
            <p className="card-text">{text}</p>
          </div>
          <div className="card-footer text-uppercase text-center">
            <i className={styles.star}></i>
            <i className={styles.star}></i>
            <i className={styles.star}></i>
            <i className={styles.star}></i>
            <i className={styles.star}></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewItem;
