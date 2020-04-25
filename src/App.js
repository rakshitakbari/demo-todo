import React from 'react';
import './App.css';

window.id = 0;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            data: [],
            backupData: []
        };
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

   onSubmit = (e) => {
      e.preventDefault();

      this.state.data.push({'id': window.id++, 'name': this.state.name})

      this.setState({data: this.state.data});

      this.setState({
        name: ''
       });
    }

    // Handle remove
    handleRemove(id){
      // Filter all todos except the one to be removed
      const remainder = this.state.data.filter((todo) => {
        if(todo.id !== id) return todo;
      });
      // Update state with filter
      this.setState({data: remainder, backupData: remainder});
    }

    componentDidMount() {
      this.setState({
        backupData: this.state.data
      });
    }

    handleSearchChange(e) {
      // Variable to hold the original version of the list
      let currentList = [];
      // Variable to hold the filtered list before putting into state
      let newList = [];
      console.log('dfhdjkfhj dsfhjd =====' + e.target.value)
      // If the search bar isn't empty
        if (e.target.value !== "") {
          // Assign the original list to currentList
          currentList = this.state.data;
            console.log(currentList + " currentList========")
          // Use .filter() to determine which items should be displayed
          // based on the search terms
          newList = currentList.filter(item => {
            console.log(item.name + ' item===========')
            // change current item to lowercase
            const lc = item.name.toLowerCase();
            // change search term to lowercase
            const filter = e.target.value.toLowerCase();
            // check to see if the current list item includes the search term
            // If it does, it will be added to newList. Using lowercase eliminates
            // issues with capitalization in search terms and search content
            return lc.includes(filter);
          });
        } else {
          console.log(this.state.data + 'this.state.data');
          // If the search bar is empty, set newList to original task list
          newList = this.state.backupData;
        }
        console.log(newList + " newList========")
        // Set the filtered state based on what our rules added to newList
        this.setState({
          data: newList
        });
    }

    render() {
        const todoNode = this.state.data.map((users) => {
          return (<li key={users.id}>{users.name}<span><button onClick={() =>this.handleRemove(users.id)}>x</button></span></li>)
        });

        return (
            <div className="input-data">
              <form>
                  <label>
                      <input id='name' name='name' value={this.state.name} onChange={e => this.handleChange(e)} placeholder='Enter a new name'/>
                  </label>
                  <div className="button">
                    <button onClick={(e) => this.onSubmit(e)}>Send</button>
                  </div>           
              </form>
              <input type="text" className="input" onChange={this.handleSearchChange} placeholder="Search..." />
              <ul>{todoNode}</ul>
            </div>
        );
    }
}

export default App;
