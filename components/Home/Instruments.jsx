import styles from "/styles/Home/Instruments.module.css";
import {useInView} from 'react-intersection-observer';

const Instruments = () => {
  const { ref: imagesRef, inView: imagesVisible} = useInView();
  console.log('are images visible?:',imagesRef)
  const { ref: shapeRef, inView: shapeVisible} = useInView();
  const { ref: titleRef, inView: titleVisible} = useInView();

  return (
    <div className={styles.container}>
      <div ref={shapeRef} className={`${styles.shape} ${shapeVisible ? styles.animateShape : ''}` }>
        <div ref={imagesRef} className={`${styles.firstRow} ${imagesVisible ? styles.animateImages : ''}` }>
          <div>
              <img src="images/TensorFlowImage.png" alt="TensorFlowLogo" />
          </div>
          <div>
              <img src="images/PythonImage.png" alt="PythonLogo" />
          </div>
        </div>
        <div ref={imagesRef} className={`${styles.secondRow} ${imagesVisible ? styles.animateImages : ''}` }>
          <div>
             <img src="images/ReactImage.png" alt="ReactLogo" />
          </div>
          <div>
            <img src="images/NodeJSimage.png" alt="NodeJSLogo" />
          </div>
        </div>

      </div>
      <div ref={titleRef} className={`${styles.Title} ${titleVisible ? styles.animateTitle : ''}` }>
        <h1> Software used on this project</h1>
      </div>
    </div>
  );
};

export default Instruments;
