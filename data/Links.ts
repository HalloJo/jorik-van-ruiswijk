export type LinkProps = {
  href: string;
  label: string;
  secondary?: boolean;
};

export const Navigation: LinkProps[] = [
  {
    label: "work",
    href: "#work",
  },
  {
    label: "me",
    href: "#me",
  },
  {
    label: "contact",
    href: "#contact",
    secondary: true,
  },
];

export const Social: LinkProps[] = [
  {
    href: "https://www.linkedin.com/in/jorikvanruiswijk/",
    label: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/jorik.van.ruiswijk/",
    label: "Instagram",
  },
  {
    href: "https://github.com/HalloJo",
    label: "GitHub",
  },
  {
    href: "https://www.behance.net/HiJorikVanRuiswijk",
    label: "Behance",
  },
];

export const Telephone: LinkProps = {
  href: "tel:0631976419",
  label: "06 31 97 64 19",
};

export const Email: LinkProps = {
  href: "mailto:jorikvanruiswijk@gmail.com",
  label: "jorikvanruiswijk@gmail.com",
};
