import React from "react";
 import styles from './Student.module.css';

function StudentCard({data1, handleClick })
{
    return (
        <div className={`${data1.is_selected ? styles.selected : styles.unselected} ${styles.card}`} onClick={() => { handleClick(data1.id) }} >
        <h2 className={styles.heading}>{`${data1.first_name} ${data1.last_name}`}</h2>
            <h3>{data1.email}</h3>
            <img src={data1.avatar} alt="/"></img>
        </div>
    )
}

export default StudentCard