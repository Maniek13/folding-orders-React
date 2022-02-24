import React from 'react'
import styles from '../styles/index.module.css'; 
import ValidForm from '../controllers/ValidForm';
import SoupObject from '../objects/SoupObject';

class Soup extends React.Component{
    static valid(){
        if(ValidForm.valid(SoupObject.spiciness_scale, 'number') === true){
            return true;
        }
        else{
            return false;
        } 
    }

    spicinessScale(e){
        SoupObject.spiciness_scale = e.target.value;
    }

    render(){
        return(
            <div className={styles.dish_types_form}>
                <label>Spiciness scale:</label> 
                <input id="spiciness_scale" className={styles.input} type='number' defaultValue="0"  min="0" max="10" onChange={this.spicinessScale.bind(this)}></input>
            </div>
        );
    }
}

export default Soup;
