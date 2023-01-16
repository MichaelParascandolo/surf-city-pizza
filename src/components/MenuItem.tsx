const MenuItem = ({
  name,
  desc,
  price,
  stack,
}: {
  name: string;
  desc?: string;
  price?: string;
  stack?: boolean;
}) => {
  return (
    <>
      {/* <div className="col-lg"> */}
      <div className={stack ? "col-lg" : "col-sm"}>
        {desc ? (
          <>
            <p className="lead">{name}</p>
            <p className="text-muted">
              {desc}
              {price ? <span>{price}</span> : null}
            </p>
          </>
        ) : (
          <>
            <p className="lead">
              {name}
              {price ? <span>{price}</span> : null}
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default MenuItem;
