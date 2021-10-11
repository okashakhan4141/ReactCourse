import styles from "./Layout.module.css";
import MainNavBar from "./MainNavBar";

function Layout(props) {
  return (
    <div>
      <MainNavBar></MainNavBar>
      <main className={styles.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
