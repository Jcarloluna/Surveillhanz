import styles from "/styles/AboutUs/AboutUsText.module.css";

const AboutUsText = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerTitle}>
        <h1>About Us</h1>
      </div>
      <div className={styles.containerDefinition}>
        <p>
          We are 4th Year Students from Technological University of the Philippines - 
          Cavite. Currently taking up Embedded System subject, this website is part of 
          our journey towards building a ReactJS Application.
          </p>
      </div>
    </div>
  );
};

export default AboutUsText;
