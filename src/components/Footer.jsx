import { pageLinks, socialLinks } from "../Data";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((l) => {
          return (
            <li key={l.id}>
              <a href={l.href} className="footer-link">
                {l.alt}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((l) => {
          return (
            <li key={l.id}>
              <a
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="footer-icon"
              >
                <i className={l.className}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
