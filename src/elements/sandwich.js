import React from 'react'
import styles from '../styles/app.css'; 
import ValidForm from './FieldValid';
import Static from "./Static";

class Sandwich extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
            slicesOfBread : 0
        }
    }

    valid(){
        if(ValidForm.exist(this.state.slicesOfBread) === true){
            return true;
        }
        else{
            return false;
        } 
    }

    dishDetails(){
        return this.state;
    }

    spicinessScale(e){
        Static.dishDetails = {slicesOfBread : e.target.value};
    }


    render(){
        return(
            <div className={styles.dish_tepes_form}>
                <input id="slices_of_bread" className={styles.input} type='number'  min="0" onChange={this.spicinessScale.bind(this)}></input>
            </div>
        );
    }
}

export default Sandwich;

