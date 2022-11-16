export type SocialItem = {
    label: string,
    href: string
    icon: string,
    alt: string,
  }
  
  export type Socials = SocialItem[]
  
  export const social: Socials = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jorikvanruiswijk/",
      icon: "/assets/social/linkedin-in.svg",
      alt: "LinkedIn logo"
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/jorik.van.ruiswijk/",
        icon: "/assets/social/instagram.svg",
        alt: "Instagram logo"
    },
    {
        label: "GitHub",
        href: "https://github.com/HalloJo",
        icon: "/assets/social/github.svg",
        alt: "GitHub logo"
    },
    {
        label: "Behance",
        href: "https://www.behance.net/HiJorikVanRuiswijk",
        icon: "/assets/social/behance.svg",
        alt: "Behance logo"
    },
  ];
  