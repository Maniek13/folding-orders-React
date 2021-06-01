import React from 'react'
import styles from '../styles/app.css'; 

class Sandwich extends React.Component{
    render(){
        return(
            <div className={styles.dish_tepes_form}>
                <input id="slices_of_bread" className={styles.input} type='number'  min="0"></input>
            </div>
        );
    }
}

export default Sandwich;

//slices_of_bread - number of slices of bread required (number field)