import React, { Component } from "react";


class Ingredients extends Component{
    
  render(props){
    // console.log("Ingredients Props:", this.props)
    return (
        <div className="ingredients-options" key={this.props.index}>
            <input className="amount select-underline" type="text" name="amount" placeholder="Amount" value={this.props.amount} onChange={this.props.handleChangeAmount} id={"ingredient-amount-" +this.props.index}/>
            <select className="select-underline unit" name='unit' type='text' onChange={this.props.handleChangeUnits} id={"ingredient-units-" +this.props.index} value={this.props.units}>
                        <option  hidden value="">Unit</option>
                        <option value=""> - </option>
                        <option value="tbsp">tbsp</option>
                        <option value="tbs">tbs</option>
                        <option value="cup">cup</option>
                        <option value="g">g</option>
                        <option value="kg">kg</option>
                        <option value="ml">ml</option>
                        <option value="l">l</option>
            </select>
            <input className="ingredients-text select-underline" type="text" placeholder="Ingredient" onChange={this.props.handleChangeName} id={"ingredient-name-" +this.props.index} value={this.props.name}/>
            <ion-icon onClick={this.props.handleDelete} name="close-circle-outline"></ion-icon>




        </div>
    );}
  }
  

export default Ingredients;
