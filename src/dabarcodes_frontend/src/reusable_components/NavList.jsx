import { Link, useNavigate } from "react-router-dom";

const NavList = ({ items, className, isHR = false }) => {
  const navigate = useNavigate();

  const handleClick = (el) => {
    if (
      el.route === "#testimonials" ||
      el.route === "#partners" ||
      el.route === "#about" ||
      el.route === "#supplier" ||
      el.route === "#home"
    ) {
      // Scroll to the section smoothly if the route is for scrolling
      const targetElement = document.getElementById(el.route.substring(1));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to the route if it's a standard route
      navigate(el.route);
    }
  };

  return (
    <ul className={`flex gap-4 ${className}`}>
      {items.map((el) => (
        <li
          key={el.label}
          className="cursor-pointer hover:underline decoration-[#0D90C1] underline-offset-8"
          onClick={() => handleClick(el)}
        >
          {el.route.startsWith("#") ? (
            <span>{el.label}</span>
          ) : (
            <Link to={el.route}>{el.label}</Link>
          )}

          {isHR && <hr className="mt-1 px-16" />}
        </li>
      ))}
    </ul>
  );
};

export default NavList;
