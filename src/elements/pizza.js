import React from 'react'
import styles from '../styles/app.css'; 

class Pizza extends React.Component{
    render(){
        return(
            <div className={styles.dish_tepes_form}>
                <input id="no_of_slices" className={styles.input } type='number' min="0"></input>
                <input id="diameter" className={styles.input } type='number' step="0.1" min="10"></input>
            </div>
        );
    }
}

export default Pizza;

/* no_of_slices - # of slices (number field)
diameter - diameter (float field)
*/