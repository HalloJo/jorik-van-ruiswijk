import styles from "../LanguageSelector/LanguageSelector.module.scss";

type LanguageSelectorProps = {
  changeLanguage: (event) => void;
};

const LanguageSelector = ({ changeLanguage }: LanguageSelectorProps) => {
  return (
    <select
      className={styles.language}
      name="language"
      onChange={changeLanguage}
    >
      <option value="en">🇬🇧</option>
      <option value="nl">🇳🇱</option>
    </select>
  );
};

export default LanguageSelector;
