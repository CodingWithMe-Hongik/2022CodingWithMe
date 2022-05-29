import styles from "./Footer.module.css";
import GitHubLogo from "../../img/GitHubLogo.png";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <p>CWM</p>
      <div className={styles.Button}>
        <div>1</div>
        <a
          href="https://namu.wiki/w/GitHub?from=깃허브"
          target="_blank"
          rel="noreferrer"
        >
          <img src={GitHubLogo} alt="Github" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
