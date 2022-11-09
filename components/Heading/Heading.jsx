import styles from '../Heading/Heading.module.scss'

const Heading = ({heading, exception}) => {
    return (
        <h2 className={`${styles.heading} ${styles[exception]}`}>{heading}</h2>
    )
}

export default Heading