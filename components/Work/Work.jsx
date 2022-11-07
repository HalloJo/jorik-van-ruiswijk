import React from 'react';
import styles from '../Work/Work.module.scss'
import { carouselData } from '../../data/WorkCarouselData'
import WorkCard from '../WorkCard/WorkCard';
import Link from 'next/link';

const Work = () => {

    return (
        <section className={styles.work}>
            <h2 className={styles.work__heading}>Work</h2>
            <div className={styles.work__carousel}>
                {carouselData.map((item)=>{
                    return (
                        <Link href={item.href} >
                            <a className={styles.work__link} target="_blank" rel="noopener noreferrer">
                                <WorkCard  key={item.label} {...item} />
                            </a>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}

export default Work