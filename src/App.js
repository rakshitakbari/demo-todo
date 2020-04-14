import React from 'react';
import './App.css';

window.id = 0;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            data: []
        };
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
    }

    render() {
      const todoNode = this.state.data.map((users) => {
        return (<li key={users.id}>{users.name}</li>)
      });
        return (
            <div class="input-data">
              <form>
                  <label>
                      <input id='name' name='name' value={this.state.name} onChange={e => this.handleChange(e)} placeholder='Enter a new name'/>
                  </label>
                  <div className="button">
                    <button onClick={(e) => this.onSubmit(e)}>Send</button>
                  </div>           
              </form>
              <ul>{todoNode}</ul>
            </div>
        );
    }
}

export default App;
