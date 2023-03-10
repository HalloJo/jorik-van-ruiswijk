import LanguageSelector from "../LanguageSelector/LanguageSelector";
import styles from "../NavigationList/NavigationList.module.scss";
import Typography from "../Typography/Typography";

const NavigationList = ({ navigation, changeLanguage }) => {
  return (
    <ul className={styles.navigationList}>
      {navigation.map((item) => {
        const { label, href, secondary } = item;

        return (
          <a className={styles.navigationList__item} key={label} href={href}>
            <li className={secondary && styles.secondary}>{label}</li>
          </a>
        );
      })}
      <LanguageSelector changeLanguage={changeLanguage} />
    </ul>
  );
};

export default NavigationList;
