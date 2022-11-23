import styles from "/styles/Home/Definition.module.css";

const Definition = () => {
  return (
    <div className={styles.container}>
      <div className={styles.Shape}>
        <div className={styles.Question}>
            <h1>What is Object Recognition?</h1>
        </div>
        <div className={styles.Answer}>
          <p>
            The term "object recognition" refers to techniques for physically recognizing 
            known things using optical, auditory, or other physical means inside an object
              space. For instance, an object's presence in a digital image or video stream, 
              as well as its position and location, are identified.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Definition;
