import styles from "../Footer/Footer.module.scss";
import Container from "../Container/Container";
import Row from "../Row/Row";
import Column from "../Column/Column";
import { LinkProps } from "../../data/Links";

const Footer = ({
  social,
  telephone,
  email,
}: {
  social: LinkProps[];
  telephone: LinkProps;
  email: LinkProps;
}) => {
  const currentDate = new Date().getFullYear();

  return (
    <footer className={styles.footer} id="contact">
      <Container className={styles.footer__container}>
        <Row className={styles.footer__row}>
          <Column width="12 md:6" className={styles.footer__info}>
            <p className={styles.footer__title}>Contact me</p>
            <ul className={styles.footer__links}>
              <a className={styles.footer__link} href={email.href}>
                {email.label}
              </a>
              <a className={styles.footer__link} href={telephone.href}>
                {telephone.label}
              </a>
            </ul>
          </Column>
          <Column width="12 md:6" className={styles.footer__social}>
            <ul className={styles.footer__socialLinks}>
              {social.map((item, index) => {
                const { label, href } = item;
                return (
                  <li className={styles.footer__socialItem} key={index}>
                    <a href={href} target="_blank" rel="noreferrer">
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <p className={styles.footer__copyright}>
              &copy; Jorik van Ruiswijk | {currentDate}
            </p>
          </Column>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
