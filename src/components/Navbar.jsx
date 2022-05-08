import { Link } from "react-router-dom";
export const Navbar = () => {
  const nav = [
    { title: "Home", to: "/" },
    { title: "Counter", to: "/counter" },
    
  ];
  return (
    <div>
      {nav.map((e, i) => (
        <Link key={i} style={{"margin":"10px"}} to={e.to}>
          {e.title}
        </Link>
      ))}
    </div>
  );
};