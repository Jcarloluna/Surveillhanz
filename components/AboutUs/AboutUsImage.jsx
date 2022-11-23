import styles from "/styles/AboutUs/AboutUsImage.module.css";

const AboutUsImage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.teamNameContainer}>
            <div className={styles.teamName}>
                <h1> TEAM CPETS: 100% </h1>
            </div>
        </div>
        <div className={styles.containerImage}>
            <img src="/images/AboutUsImage.png" alt="Developers' Group Photo" />
        </div>
    </div>
    
  );
};

export default AboutUsImage;
