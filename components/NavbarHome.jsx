import Button from "./Button";
import styles from "../styles/Navbar.module.css";
import Link from 'next/link';

const NavbarHome = () => {
  return (
    <div className={styles.container}>
      <div className={styles.Title}>
        <div>
          <img src="/logo/Surveillhanz.png" />
        </div>
        <div>
          <h1> Surveillhanz</h1>
        </div>
      </div>
      <div className={styles.navbarActions}>
        <Button variant="primary"><Link href="/">Home</Link></Button>
        <Button variant="secondary"><Link href="/Dashboard">Dashboard</Link></Button>
        <Button variant="secondary"><Link href="/AboutUs">About Us</Link></Button>
      </div>
      </div>
  );
};
export default NavbarHome;
