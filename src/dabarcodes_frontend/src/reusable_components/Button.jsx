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
        className={`bg-[#0D90C1] hover:bg-[#0A6A9A] text-white px-[28px] py-[11px] rounded-[5px] ${buttonClassName}`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
