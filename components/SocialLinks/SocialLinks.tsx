import React from "react";
import cn from "clsx";
import { LinkProps } from "../../data/Links";
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
    <ul
      className={cn(
        styles.socialLinks,
        isStacked && [styles.isStacked],
        className
      )}
    >
      {socials.map((socialItem, index) => {
        const { label, href } = socialItem;
        return (
          <li className={styles.socialLinks__item} key={index}>
            <a href={href} target="_blank" rel="noreferrer">
              {label}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialLinks;
