import styles from "../NavigationList/NavigationList.module.scss";

const NavigationList = ({ navigation }) => {
  return (
    <ul className={styles.navigationList}>
      {navigation.map((item) => {
        const { label, id } = item;

        return (
          <a className={styles.navigationList__item} key={label} href={id}>
            <li>{label}</li>
          </a>
        );
      })}
    </ul>
  );
};

export default NavigationList;
