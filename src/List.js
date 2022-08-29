import { Component } from "react";

export class List extends Component{
    state = {
        userInput: '',
        listItems: []
    }

    changeList(e) {
        this.setState({userInput: e})
    }

    addItem(input) {
        if (input === '') {
            alert('Please, enter an item')
        } else {
            let listArray = this.state.listItems;
            listArray.push(input);
            this.setState({listItems: listArray, userInput: ''})
        }
        }

    crossedItem (e) {
        const li = e.target;
        li.classList.toggle('crossed')
    }
    
    deleteItem() {
        let listArray = this.state.listItems;
        listArray = [];
        this.setState({listItems: listArray});
    }

    onFormSubmit(e) {
        e.preventDefault();
    }
    

    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
    <div className='container'>
        <input 
        type='text' 
        placeholder="type here..."
        onChange={(e) => {this.changeList (e.target.value)}}
        value={this.state.userInput} />
    </div>

    <div className='container'>
        <button onClick={() => this.addItem(this.state.userInput)} className='btn add'>Add</button>
    </div>

    <ul>
        {this.state.listItems.map((item, index) => 
        <li onClick={this.crossedItem} key={index}>
            {item}
            </li>
            )}
    </ul>
    
    <div className='container'>
        <button onClick={() => this.deleteItem()} className='btn remove'>Remove All</button>
    </div>

    </form>
            </div>
        )
    }

}