import SearchModal from "../UI/SearchModal";

import styles from "./Search.module.css";
import SearchItem from "./SearchItem";
import useGetItems from "../../hooks/useGetItems";
import { Fragment, useEffect, useState } from "react";
import { filterData } from "../util/filterData";

const Search = (props) => {
  const [input, setInput] = useState("");
  const { loading, error, data, fetchData } = useGetItems();

  let content;

  useEffect(() => {
    fetchData("https://codingwith-3cbaf-default-rtdb.firebaseio.com/main.json");
  }, []);

  if (loading) {
    content = (
      <p style={{ fontSize: "40px", textAlign: "center" }}>Loading...</p>
    );
  }
  if (error) {
    content = <p style={{ fontSize: "40px", textAlign: "center" }}>Error</p>;
  }
  if (data) {
    const filteredData = filterData(data, input);
    content = (
      <div className={styles.searchList}>
        <ul>
          <SearchItem data={filteredData} onClose={props.onClose} />
        </ul>
      </div>
    );
  }

  return (
    <Fragment>
      <SearchModal onClose={props.onClose}>
        <div className={styles.inputBox}>
          <img src="/img/SearchIconBlack.png" alt="SearchIcon" />
          <input
            type="text"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          ></input>
        </div>
        {content}
        <div className={styles.closeButton} onClick={props.onClose}>
          <p>Close</p>
        </div>
      </SearchModal>
    </Fragment>
  );
};

export default Search;
