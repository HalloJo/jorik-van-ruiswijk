import { ReactNode } from "react"
import cn from 'clsx'
import styles from "../Page/Page.module.scss";

interface PageProps {
    children: ReactNode,
    className?: string,
}

function Page ({children, className}: PageProps) {
    return (
        <main className={cn(styles.page, className)}>
            {children}
        </main>
    )
}

function PageHeader ({children, className}: PageProps) {
    return (
        <div className={cn(styles.header, className)}>{children}</div>
    )
}

function PageFooter ({children, className}: PageProps) {
    return (
        <div className={cn(styles.footer, className)}>{children}</div>
    )
}

Page.Header = PageHeader
Page.Footer = PageFooter

export default Page
export {
    PageHeader,
    PageFooter
}