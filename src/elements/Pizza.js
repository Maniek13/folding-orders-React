import React  from 'react'
import styles from '../styles/index.module.css';
import ValidForm from '../controllers/ValidForm';
import PizzaObject from '../objects/PizzaObject';

class Pizza extends React.Component{
    static valid(){
        if(ValidForm.valid(PizzaObject.no_of_slices, 'number') === true && ValidForm.valid(PizzaObject.diameter, 'number') === true){
            return true;
        }
        else{
            return false;
        } 
    }

    noOfSlices(e){
        PizzaObject.no_of_slices = e.target.value;
    }

    diameter(e){
        PizzaObject.diameter = e.target.value;
    }


    render(){
        return(
            <div className={styles.dish_types_form}>
                <label>No of slices:</label>
                <input id="no_of_slices" className={styles.input} type='number' defaultValue="0" min="0" onChange={this.noOfSlices.bind(this)}></input>
                <label> Diameter:</label>
                <input id="diameter" className={styles.input} type='number' defaultValue="0" step="0.1" min="10" onChange={this.diameter.bind(this)}></input>
            </div>
        );
    }
}

export default Pizza;
