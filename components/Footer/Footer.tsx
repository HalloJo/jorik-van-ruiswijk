import styles from "../Footer/Footer.module.scss";
import Container from "../Container/Container";
import Row from "../Row/Row";
import Column from "../Column/Column";
import { LinkProps } from "../../data/Links";
import { motion as m, Variants } from "framer-motion";
import * as Animation from "../../utils/animations";
import * as Content from "../../data/Content";
import SocialLinks from "../SocialLinks/SocialLinks";
import Typography from "../Typography/Typography";

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
    <footer className={styles.footer}>
      <Container className={styles.footer__container}>
        <Row className={styles.footer__row}>
          <Column
            width="12 md:6"
            className={styles.footer__info}
            as={m.div}
            {...Animation.inViewContainer}
          >
            <Typography
              variant="body"
              size="small"
              className={styles.footer__title}
              as={m.div}
              {...Animation.inViewChild}
            >
              {Content.Footer.title}
            </Typography>
            <m.ul
              className={styles.footer__links}
              {...Animation.inViewContainer}
              id="contact"
            >
              <m.a
                className={styles.footer__link}
                href={email.href}
                {...Animation.inViewChild}
              >
                {email.label}
              </m.a>
              <m.a
                className={styles.footer__link}
                href={telephone.href}
                {...Animation.inViewChild}
              >
                {telephone.label}
              </m.a>
            </m.ul>
          </Column>
          <Column
            width="12 md:6"
            className={styles.footer__social}
            as={m.div}
            {...Animation.inViewContainer}
          >
            <SocialLinks
              socials={social}
              className={styles.footer__socialLinks}
            />
            <Typography
              variant="body"
              size="small"
              className={styles.footer__copyright}
              as={m.div}
              {...Animation.inViewChild}
            >
              {currentDate} | &copy; {Content.Hero.title}
            </Typography>
          </Column>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
