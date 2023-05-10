import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="sm:px-[100px] bg-slate-900 text-white footer p-10">
        <div className="flex  gap-4">
          <Link to="/terms-and-condition" className="link link-hover">
            Terms of use
          </Link>
          <Link to="/privacy-policy" className="link link-hover">
            Privacy policy
          </Link>
          <Link to="/cookie-policy" className="link link-hover">
            Cookie policy
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
