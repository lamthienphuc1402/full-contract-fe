import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex justify-between items-center bg-black text-white text-lg p-4">
      <div className="font-bold">Logo Công ty PPC</div>
      <div>
        <Link className="hover:text-red-400" to="/contracts">
          Contracts
        </Link>
      </div>
      <div>Content here</div>
    </nav>
  );
};

export default Header;
