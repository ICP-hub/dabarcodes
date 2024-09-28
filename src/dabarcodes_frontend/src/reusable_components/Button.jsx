const Button = ({
  onClick,
  divClassName = "",
  buttonClassName = "",
  children,
}) => {
  return (
    <div className={divClassName}>
      <button
        onClick={onClick}
        className={`btn text-[#E7F8FE]  px-[28px] py-[11px] rounded-[5px] ${buttonClassName}`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
