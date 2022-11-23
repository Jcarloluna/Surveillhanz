import styles from "/styles/Home/Instruments.module.css";

const Instruments = () => {
  return (
    <div className={styles.container}>
      <div className={styles.shape}>
        <div className={styles.firstRow}>
          <div>
              <img src="images/TensorFlowImage.png" alt="TensorFlowLogo" />
          </div>
          <div>
              <img src="images/PythonImage.png" alt="PythonLogo" />
          </div>
        </div>
        <div className={styles.secondRow}>
          <div>
             <img src="images/ReactImage.png" alt="ReactLogo" />
          </div>
          <div>
            <img src="images/NodeJSimage.png" alt="NodeJSLogo" />
          </div>
        </div>

      </div>
      <div className={styles.Title}>
        <h1> Software used on this project</h1>
      </div>
    </div>
  );
};

export default Instruments;
