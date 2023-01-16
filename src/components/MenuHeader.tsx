const MenuHeader = ({ title, desc }: { title: string; desc?: string }) => {
  return (
    <>
      <h3 className="text-uppercase">{title}</h3>
      {desc ? <h6 className="mb-5">{desc}</h6> : null}
    </>
  );
};

export default MenuHeader;
