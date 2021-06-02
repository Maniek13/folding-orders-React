import React from 'react'
import styles from '../styles/app.css'; 
import ValidForm from './FieldValid';

class Soup extends React.Component{
    dish_details = {spicinessScale : ""};

    static valid(){
        if(ValidForm.exist(this.spicinessScale) === true){
            return true;
        }
        else{
            return false;
        } 
    }

    static dishDetails(){
        return this.dish_details;
    }

    render(){
        return(
            <div className={styles.dish_tepes_form}>
               <input id="spiciness_scale" className={styles.input} type='number' min="0" max="10" onChange={e => this.dish_details.spicinessScale = e.target.value}></input>
            </div>
        );
    }
}

export default Soup;