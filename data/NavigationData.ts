type NavigationItem = {
  label: string;
  id: string;
  secondary?: boolean;
};

export type Navigation = NavigationItem[];

export const navigation: Navigation = [
  {
    label: "work",
    id: "#work",
  },
  {
    label: "me",
    id: "#me",
  },
  {
    label: "contact",
    id: "#contact",
    secondary: true,
  },
];
