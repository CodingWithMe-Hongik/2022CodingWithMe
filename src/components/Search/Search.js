import SearchModal from "../UI/SearchModal";

import styles from "./Search.module.css";
import SearchItem from "./SearchItem";

const Search = (props) => {
  return (
    <SearchModal onClose={props.onClose}>
      <div className={styles.inputBox}>
        <img src="/img/SearchIconBlack.png" alt="SearchIcon" />
        <input type="text"></input>
      </div>
      <div className={styles.searchList}>
        <ul>
          <SearchItem />
        </ul>
      </div>
      <div className={styles.closeButton} onClick={props.onClose}>
        <p>Close</p>
      </div>
    </SearchModal>
  );
};

export default Search;
