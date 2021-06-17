import React, { Component } from 'react';

class ElectiveForm extends Component {

    state = { 
        prn:"",
        elective:""
     }

     ChangePrn = (e) =>{
        this.setState({prn:e.target.value})
     }
    
     ChangeElective = (e) =>{
        this.setState({elective:e.target.value})
     }
     handleClick = (e) =>{
         e.preventDefault();
         console.log(this.state.prn)
         console.log(this.state.elective)
     }

    render() { 
        return ( 
            <div style={{ marginLeft: "35%" }}>
                <form>
                    <label >PRN:-</label>
                    <br />
                    <br />
                    <input type="text" placeholder="Enter PRN" onChange={this.ChangePrn}/>
                    <br />
                    <br />
                    
                    <label >Select your Choice:-</label>
                    
                    <select onChange={this.ChangeElective}>
                    <option>Elective 1</option>
                    <option>Elective 2</option>
                    <option>Elective 3</option>
                    </select>
                    <br />
                    <br />
                    <button type="submit" onClick={this.handleClick}>Submit</button>
                </form>
            </div>
         );
    }
}
 
export default ElectiveForm;