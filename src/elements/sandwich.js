import React from 'react'
import styles from '../styles/app.css'; 
import ValidForm from './FieldValid';

class Sandwich extends React.Component{
    static dish_details = {slicesOfBread : ""};

    static valid(){
        if(ValidForm.exist(this.slicesOfBread) === true){
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
                <input id="slices_of_bread" className={styles.input} type='number'  min="0" onChange={e => this.dish_details.slicesOfBread = e.target.value}></input>
            </div>
        );
    }
}

export default Sandwich;

