import { ReactNode } from "react"
import Footer from "../Footer/Footer"
import Navigation from "../Navigation/Navigation"
import Page from "../Page/Page"

interface PageProps {
    children: ReactNode,
    className?: string,
}

const PageWrapper = ({children, className}: PageProps) => {
    return (
        <Page>
            <Page.Header>
                <Navigation/>
            </Page.Header>
            {children}
            <Page.Footer>
                <Footer/>
            </Page.Footer>
        </Page>
    )
}

export default PageWrapper