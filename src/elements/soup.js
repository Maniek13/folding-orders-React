import React from 'react'
import styles from '../styles/app.css'; 
import ValidForm from './FieldValid';
import Static from "./Static";

class Soup extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
            spicinessScale : 0
        }
    }

    valid(){
        if(ValidForm.exist(this.state.spicinessScale) === true){
            return true;
        }
        else{
            return false;
        } 
    }

    spicinessScale(e){
        Static.dishDetails = {spicinessScale : e.target.value};
    }

    render(){
        return(
            <div className={styles.dish_tepes_form}>
               <input id="spiciness_scale" className={styles.input} type='number' min="0" max="10" onChange={this.spicinessScale.bind(this)}></input>
            </div>
        );
    }
}

export default Soup;