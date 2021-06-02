import React from 'react'
import styles from '../styles/app.css';
import ValidForm from './FieldValid';

class Pizza extends React.Component{
    dish_details = {
        noOfSlices : "",
        diameter : ""
    } 

    static valid(){
        if(ValidForm.exist(this.noOfSlices) === true && ValidForm.exist(this.diameter) === true){
            return true;
        }
        else{
            return false;
        } 
    }

    static dishDetails(){
        console.log(this.dish_details);
        return this.dish_details;
    }

    render(){
        return(
            <div className={styles.dish_tepes_form}>
                <input id="no_of_slices" className={styles.input } type='number' min="0" onChange={e => this.dish_details.noOfSlices = e.target.value}></input>
                <input id="diameter" className={styles.input } type='number' step="0.1" min="10" onChange={e => this.dish_details.diameter = e.target.value}></input>
            </div>
        );
    }
}

export default Pizza;