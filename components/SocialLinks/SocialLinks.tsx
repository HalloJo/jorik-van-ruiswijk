import React from "react";
import cn from "clsx";
import { LinkProps } from "../../data/Links";
import { motion as m, Variants } from "framer-motion";
import * as Animation from "../../utils/animations";
import styles from "../SocialLinks/SocialLinks.module.scss";

interface SocialLinksProps {
  socials: LinkProps[];
  className?: string;
  isStacked?: boolean;
}

const SocialLinks = ({
  socials,
  className,
  isStacked = false,
}: SocialLinksProps) => {
  return (
    <m.ul
      className={cn(
        styles.socialLinks,
        isStacked && [styles.isStacked],
        className
      )}
      {...Animation.inViewContainer}
    >
      {socials.map((socialItem, index) => {
        const { label, href } = socialItem;
        return (
          <m.li
            className={styles.socialLinks__item}
            {...Animation.inViewChild}
            key={index}
          >
            <a href={href} target="_blank" rel="noreferrer">
              {label}
            </a>
          </m.li>
        );
      })}
    </m.ul>
  );
};

export default SocialLinks;
