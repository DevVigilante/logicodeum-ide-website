import "./styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h3 className="footer-heading">
            Logicodeum IDE
          </h3>

          <p className="footer-text">
            An IDE built by us, built for you,
            to help you build your software.
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">
            Social Links
          </h4>

          <ul className="footer-list">
            <li>
              <a
                href="https://github.com/Innovative-CST"
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub (Organization)
              </a>
            </li>

            <li>
              <a
                href="https://github.com/DevVigilante"
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub (Owner)
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/innovative_cst"
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>

            <li>
              <a
                href="https://discord.gg/RM5qaZs4kd"
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discord
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">
            Contact
          </h4>

          <p className="footer-text">
            devkumar9760955514@gmail.com
          </p>
        </div>

      </div>
    </footer>
  );
}