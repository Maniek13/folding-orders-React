import React  from 'react'
import styles from '../styles/app.css';
import ValidForm from './FieldValid';

class Pizza extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
            noOfSlices : 0,
            diameter : 0
        }
    }

    valid(){
        if(ValidForm.exist(this.state.noOfSlices) === true && ValidForm.exist(this.state.diameter) === true){
            return true;
        }
        else{
            return false;
        } 
    }
   
    dishDetails(){
        return this.state;
    }

    noOfSlices(e){
        this.setState({noOfSlices : e.target.value});
    }

    diameter(e){
        this.setState({diameter : e.target.value});
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