import React from 'react'

class TagForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: ''
        }
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        });
        console.log(this.state.name);
    }

    render() {
        return (
            <div>
                <label htmlFor="tag_name">Name: </label>
                <input type="text" id="tag_name" placeholder="name of tag" onChange={this.handleNameChange}></input>
                <input type="submit"></input>
            </div>
        );;
    }
}

export default TagForm;
