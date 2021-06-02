import React  from 'react'
import styles from '../styles/app.css';
import ValidForm from './FieldValid';
import Static from "./Static";

class Pizza extends React.Component{

    static defaultProps = {
        noOfSlices : 0,
            diameter : 0
      }

    constructor(props) {
        super(props);
    
        this.state = {
            noOfSlices : 0,
            diameter : 0
        }
    }

    valid(){
        if(ValidForm.exist(Static.dishDetails.noOfSlices) === true && ValidForm.exist(Static.dishDetails.diameter) === true){
            return true;
        }
        else{
            return false;
        } 
    }

    noOfSlices(e){
        Static.dishDetails = {noOfSlices : e.target.value};
    }

    diameter(e){
        Static.dishDetails =  {diameter : e.target.value};
    }


    render(){
        return(
            <div className={styles.dish_tepes_form}>
                <input id="no_of_slices" className={styles.input } type='number' min="0" onChange={this.noOfSlices.bind(this)}></input>
                <input id="diameter" className={styles.input } type='number' step="0.1" min="10" onChange={this.diameter.bind(this)}></input>
            </div>
        );
    }
}

export default Pizza;