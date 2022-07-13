import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <p>CWM</p>
      <div className={styles.Button}>
        <a
          href="https://github.com/CodingWithMe-Hongik/2022CodingWithMe"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/img/GitHubLogo.png" alt="Github" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
