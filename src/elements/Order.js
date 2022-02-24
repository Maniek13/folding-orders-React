import React from 'react'
import styles from '../styles/index.module.css'; 
import Pizza from './Pizza';
import Soup from './Soup';
import Sandwich from './Sandwich';
import ValidForm from '../controllers/ValidForm';
import Send from '../controllers/SendData';
import PizzaObject from '../objects/PizzaObject';
import SoupObject from '../objects/SoupObject';
import SandwichObject from '../objects/SandwichObject';
import ResponseObject from '../objects/ResponseObject';
import Response from '../elements/Response';


class Orders extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false,
      error: false,
      response: false
    };

    this.order = {
      name: "",
      preparation_time: "00:00:00",
      type: ""
    }
  }

  selectedValue(evt){
    this.order.type = evt.target.value;
    this.setState({selected: true});
  }

  kind(){
    switch (this.order.type) {
      case 'pizza':
        return <Pizza/>;
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
      this.order  = Object.assign(this.order, {no_of_slices : Number(PizzaObject.no_of_slices), diameter : Number(PizzaObject.diameter)});
    }
    else if(this.order.type === 'soup'){
      this.order = Object.assign(this.order, {spiciness_scale : Number(SoupObject.spiciness_scale)});
    }
    else if(this.order.type === 'sandwich'){
      this.order = Object.assign(this.order, {slices_of_bread : Number(SandwichObject.slices_of_bread)});
    }
  }


  async submit(){
    this.setState({error : false});
    this.setState({response : false});

    if(ValidForm.valid(this.order.name, "string")  === true && ValidForm.exist(this.order.name) === true && ValidForm.valid(this.order.preparation_time, "time") === true && ValidForm.exist(this.order.type) === true && this.kindValid() === true){
      this.kindGet();

      await Send(this.order);

      if(ResponseObject.code === 200){
        this.setState({response : true})
      }
      else{
        this.error = Object.entries(ResponseObject.object)[0][1];
        this.setState({error : true});
      }
    }
    else{
      this.error = "Incorrectly completed form, all fields is required. Name must contains only letters, - and space.";
      this.setState({error : true})
    }
  }

  render() {
    return (
      <React.Fragment >
        <div className={styles.main_form}>
          <label>Name:</label>
          <input id="name" type="text" className={styles.input}  onChange={e => this.order.name = e.target.value}/>
          <label>Preparation time:</label> 
          <input id="preparation_time"  defaultValue = "00:00:00" type="time" step="1" className={styles.input} onChange={e => this.order.preparation_time = e.target.value}/>
        </div>

        <div>
            <select id="type" className={styles.type } defaultValue={''}  onChange={this.selectedValue.bind(this)} >
              <option value="" disabled >Chose a dish</option>
              <option value="pizza">Pizza</option>
              <option value="soup">Soup</option>
              <option value="sandwich">Sandwich</option>
              </select>
        </div>

        <div>
          {this.state.selected ? this.kind() : ""}
        </div>

        <button className={styles.order_submit} onClick={this.submit.bind(this)}>Submit</button>
      
        {this.state.error ? <div className={styles.error} >{this.error}</div> : ""}
      
        <div className={styles.response}>
          {this.state.response ? <h1>Zamówienie</h1> : ""}
          {this.state.response ? <Response/> : ""}
        </div>
    </React.Fragment>
    );
  }
}

export default Orders;
