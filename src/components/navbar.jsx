import logo from "../assets/images/logo.svg";
import { pageLinks, socialLinks } from "../Data";

const navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <ul className="nav-links" id="nav-links">
          {pageLinks.map((l) => {
            return (
              <li key={l.id}>
                <a href={l.href} className="nav-link">
                  {l.text}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((l) => {
            return (
              <li key={l.id}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="nav-icon"
                >
                  <i className={l.className}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default navbar;
