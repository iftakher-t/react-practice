import React from 'react'
import axios from 'axios'

class PostForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        userId: '',
        title: '',
        body: ''
      };
    }
  
    handleChange= e => {
      this.setState({[e.target.name]: e.target.value});
    }
  
    handleSubmit= (e) =>{
        console.log(this.state)
      e.preventDefault();
      axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
      .then( response =>{
        console.log(response)
        })
        .catch( e => {
            console.log(e)
        })
    }
  
    render() {
        const { userId, title, body }= this.state
      return (
        <div>
        <form onSubmit={this.handleSubmit}>
            <label>
            userId:
           <input type="text" name = "userId" value={userId} onChange={this.handleChange} />
         </label>

        <label>
        title:
            <input type="text" name = "title" value={title} onChange={this.handleChange} />
        </label>
        <label>
            body:
            <input type="text" name ="body" value={body} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        </form>
    </div>
      );
    }
  }

  export default PostForm