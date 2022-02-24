import React from 'react'
import styles from '../styles/index.module.css'; 
import ValidForm from '../controllers/ValidForm';
import SandwitchObject from '../objects/SandwichObject';

class Sandwich extends React.Component{
    static valid(){
        if(ValidForm.valid(SandwitchObject.slices_of_bread, 'number') === true){
            return true;
        }
        else{
            return false;
        } 
    }

    spicinessScale(e){
        SandwitchObject.slices_of_bread = e.target.value;
    }

    render(){
        return(
            <div className={styles.dish_types_form}>
                <label>Slices of bread:</label>
                <input id="slices_of_bread" className={styles.input} type='number' defaultValue="0" min="0" onChange={this.spicinessScale.bind(this)}></input>
            </div>
        );
    }
}

export default Sandwich;

