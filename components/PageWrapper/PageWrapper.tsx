import { ReactNode } from "react";
import Footer from "../Footer/Footer";
import * as Links from "../../data/Links";
import Navigation from "../Navigation/Navigation";
import Page from "../Page/Page";

interface PageProps {
  children: ReactNode;
  className?: string;
}

const PageWrapper = ({ children, className }: PageProps) => {
  return (
    <Page>
      <Page.Header>
        <Navigation navigation={Links.Navigation} social={Links.Social} />
      </Page.Header>
      {children}
      <Page.Footer>
        <Footer
          social={Links.Social}
          telephone={Links.Telephone}
          email={Links.Email}
        />
      </Page.Footer>
    </Page>
  );
};

export default PageWrapper;
