import styles from "./SideBar.module.css";

const SideBar = () => {
  return (
    <div className={styles.SideBar}>
      <div className={styles.Title}>
        <p>Title</p>
      </div>
      <ul className={styles.List}>
        <li>
          <p>C++</p>
        </li>
        <li>
          <p>Java</p>
        </li>
        <li>
          <p>1123123123</p>
        </li>
        <li>
          <p>adsfasdasaf</p>
        </li>
        <li>
          <p>qweewqrwreq</p>
        </li>
        <li>
          <p>DigitalForensic with CTF</p>
        </li>
      </ul>
    </div>
  );
};
export default SideBar;
