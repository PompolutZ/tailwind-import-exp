import React from "react";
import styles from "./Header.module.css";

interface Props {}

const Header: React.FC<Props> = (props) => {
  return <div className={styles.headerTag}>Header part here</div>;
};

export default Header;