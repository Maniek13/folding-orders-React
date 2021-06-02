import React from 'react'
import styles from '../styles/app.css'; 
import Pizza from './Pizza';
import Soup from './Soup';
import Sandwich from './Sandwich';
import ValidForm from './FieldValid';
import Send from './SendData';


class Orders extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false,
      error: false
    };

    this.order = {
      name: "",
      preparation_time: "00:00:00",
      type: "",
      noOfSlices: 0
    }
  }

  selectedValue(evt){
    this.order.type = evt.target.value;
    this.setState({selected: true});
  }

  kind(){
    switch (this.order.type) {
      case 'pizza':
        return Pizza.render();
      case 'soup':
        return <Soup/>;
      case 'sandwich':
        return <Sandwich/>;
      default:
        break;
    }
  }

  kindValid(){
    if(this.order.type === 'pizza') {
      return Pizza.valid();
    }
    else if(this.order.type === 'soup'){
      return Soup.valid();
    }
    else if(this.order.type === 'sandwich'){
      return Sandwich.valid();
    }
  }

  kindGet(){
    if(this.order.type === 'pizza') {
      this.order  = Object.assign(this.order, Pizza.dishDetails());
    }
    else if(this.order.type === 'soup'){
      this.order = Object.assign(this.order, Soup.dishDetails());
    }
    else if(this.order.type === 'sandwich'){
      this.order = Object.assign(this.order, Sandwich.dishDetails());
    }
  }


  submit(){
    console.log(this);
    this.setState({error : false})
    if(ValidForm.valid(this.order.name, "string")  === true && ValidForm.exist(this.order.name) === true && ValidForm.valid(this.order.preparation_time, "time") === true && ValidForm.exist(this.order.type) === true && this.kindValid() === true){
      this.kindGet();
     
      Send(this.order);
    }
    else{
      this.responde = "Incorrectly completed form, all fields is required. Name must contains only letters and - or space.";
      this.setState({error : true})
    }
  }


  render() {
    return (
      <React.Fragment >
      <input id="name" type="text" className={styles.input}  onChange={e => this.order.name = e.target.value}/>
      <input id="preparation_time"  defaultValue = "00:00:00" type="time" step="1" className={styles.input} onChange={e => this.order.preparation_time = e.target.value}/>
      <select id="type" className={styles.input } defaultValue={''}  onChange={this.selectedValue.bind(this)} >
        <option value="" disabled >Chose a dish</option>
        <option value="pizza">Pizza</option>
        <option value="soup">Soup</option>
        <option value="sandwich">Sandwich</option>
      </select>
      {this.state.selected ? this.kind() : ""}
      <button className={styles.order_submit} onClick={this.submit.bind(this)}>Submit</button>
      {this.state.error ? <div className={styles.error} >{this.responde}</div> : ""}
    </React.Fragment>
    );
  }
}

export default Orders;
