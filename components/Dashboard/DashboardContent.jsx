import styles from "/styles/Dashboard/DashboardContent.module.css";

const DashboardContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerText}>
        <h1>Dashboard</h1>
      </div>
      <div className={styles.containerTable}>
        <table className={styles.Table}>
          <thead>
            <th>
              No.
            </th>
            <th>
              Image
            </th>
            <th>
              DateTime
            </th>
            <th>
              Action
            </th>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Image 1</td>
              <td>2022-11-24 09:13:09.863682</td>
              <td><button className={styles.TableAction}>View Image</button></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Image 2</td>
              <td>2022-11-24 09:13:12.863682</td>
              <td><button className={styles.TableAction}>View Image</button></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Image 3</td>
              <td>2022-11-24 09:13:15.863682</td>
              <td><button className={styles.TableAction}>View Image</button></td>
            </tr>
            <tr>
              <td>4</td>
              <td>Image 4</td>
              <td>2022-11-24 09:13:19.863682</td>
              <td><button className={styles.TableAction}>View Image</button></td>
            </tr>
            <tr>
              <td>5</td>
              <td>Image 5</td>
              <td>2022-11-24 09:13:09.863682</td>
              <td><button className={styles.TableAction}>View Image</button></td>
            </tr>
            <tr>
              <td>6</td>
              <td>Image 6</td>
              <td>2022-11-24 09:13:09.863682</td>
              <td><button className={styles.TableAction}>View Image</button></td>
            </tr>
            <tr>
              <td>7</td>
              <td>Image 7</td>
              <td>2022-11-24 09:13:09.863682</td>
              <td><button className={styles.TableAction}>View Image</button></td>
            </tr>
            <tr>
              <td>8</td>
              <td>Image 8</td>
              <td>2022-11-24 09:13:09.863682</td>
              <td><button className={styles.TableAction}>View Image</button></td>
            </tr>
            <tr>
              <td>9</td>
              <td>Image 9</td>
              <td>2022-11-24 09:13:09.863682</td>
              <td><button className={styles.TableAction}>View Image</button></td>
            </tr>
            <tr>
              <td>10</td>
              <td>Image 10</td>
              <td>2022-11-24 09:13:09.863682</td>
              <td><button className={styles.TableAction}>View Image</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardContent;
