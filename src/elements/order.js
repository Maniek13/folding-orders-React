import React from 'react'
import styles from '../styles/app.css'; 
import Pizza from './pizza';
import Soup from './soup';
import Sandwich from './sandwich';

class Orders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kind: "",
      selected: false
    };
  }

  selectedValue(evt){
    this.setState({kind: evt.target.value, selected: true});
  }

  kind(){
    switch (this.state.kind) {
      case 'pizza':
        return <Pizza/>;
      break;
      case 'soup':
        return <Soup/>;
      break;
      case 'sandwich':
        return <Sandwich/>;
      break;
    }
  }

  submit(){
  }


  render() {
    return (
      <React.Fragment >
      <input id="name" type="text" className={styles.input} />
      <input id="preparation_time" type="time" step="1" className={styles.input} />
      <select id="type" className={styles.input } defaultValue={''}  onChange={this.selectedValue.bind(this)} >
        <option value="" disabled >Chose a dish</option>
        <option value="pizza">Pizza</option>
        <option value="soup">Soup</option>
        <option value="sandwich">Sandwich</option>
      </select>
      {this.state.selected ? this.kind() : ""}
      <button className={styles.order_submit} onClick={this.submit.bind(this)}>Submit</button>
    </React.Fragment>
    );
  }
}





export default Orders;
