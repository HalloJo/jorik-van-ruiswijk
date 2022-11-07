import React from 'react';
import styles from '../WorkCard/WorkCard.module.scss'

const WorkCard = ({...item}) => {
    
    const {label, src, alt} = item
    
    return (
        <div className={styles.workCard}>
            <img className={styles.workCard__image} src={src} alt={alt} />
            <p className={styles.workCard__label}>{label}</p>
        </div>
    )
}

export default WorkCard