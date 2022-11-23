import styles from "/styles/Home/Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerText}>
        <h1>Object Recognition</h1>
        <h2>Live objects identification</h2>
      </div>
      <div className={styles.containerImage}>
        <img src="/images/DogCatImage.png" alt="Sample Image Object Recognition" />
      </div>
    </div>
  );
};

export default Hero;
