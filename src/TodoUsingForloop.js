import React from 'react';
import './App.css';

window.id = 0;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            data: [],
            todoNode: {}
        };
        this.addTodo = this.addTodo.bind(this);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

   addTodo = (value) => {
      this.state.data.push({'id': window.id++, 'name': value})
      this.setState({data: this.state.data});
    }

    render() {
      const elements = this.state.data;

      const items = []
      for (const [index, value] of elements.entries()) {
        items.push(<li key={index}>{value.name}</li>)
      }
      let input;
        return (
          <div>
            <input ref={node => {
              input = node;
            }} />
            <button onClick={() => {
              this.addTodo(input.value);
              input.value = '';
            }}>
              +
            </button>
            <div>
              {items}
            </div>
          </div>
        );
    }
}

export default App;
