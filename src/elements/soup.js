import React from 'react'
import styles from '../styles/app.css'; 

class Soup extends React.Component{
    render(){
        return(
            <div className={styles.dish_type}>
               <input id="spiciness_scale" className={styles.input} type='number' min="0" max="10"></input>
            </div>
        );
    }
}

export default Soup;

//spiciness_scale - spiciness scale (1-10)