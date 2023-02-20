
import cn from 'clsx'
import styles from "../Container/Container.module.scss";

interface ContainerProps {
    children: React.ReactNode
    className?: string,
}

const Container = ({children, className}: ContainerProps) => {
    return (
        <div className={cn(styles.container, className)}>{children}</div>
    )
}

export default Container