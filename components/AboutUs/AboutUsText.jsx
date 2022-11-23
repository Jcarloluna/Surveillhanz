import styles from "/styles/AboutUs/AboutUsText.module.css";

const AboutUsText = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerTitle}>
        <h1>About Us</h1>
      </div>
      <div className={styles.containerDefinition}>
        <img src="/images/DogCatImage.png" alt="Sample Image Object Recognition" />
      </div>
    </div>
  );
};

export default AboutUsText;
