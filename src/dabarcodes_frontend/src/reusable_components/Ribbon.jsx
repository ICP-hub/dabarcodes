const Ribbon = ({ topOffset = "120px", foldSize = "10px", children }) => {
  return (
    <div
      className="ribbon-2 text-white h-[38px]"
      style={{ "--t": topOffset, "--f": foldSize }}
    >
      <p className="text-center text-[14px] mr-4">{children}</p>
    </div>
  );
};

export default Ribbon;
