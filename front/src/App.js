import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state={
    error_message: "",
    users:[],
    user_id:'',
    user_name:''
  }

  
  async componentDidMount(){
    await this.allUsers()
  }
  //All users
     allUsers = async ()=>{
    try{
      const response = await fetch('//localhost:8080/users')
      const data = await response.json()
      this.setState({users:data})
    }catch(err){
      console.log(err)
    }
  }
// add user
addUser = async props => {
  try {
    if (!props ) {
      throw new Error(
        `you need  a name `
      );
    }
    const { user_name } = props;
    console.log('adduser',props)
    const response = await fetch(
      `http://localhost:8080/add/user?user_name=${user_name}`,{
        method:'POST',
      }
    
      );
    const answer = await response.json();
    if (answer.success) {
      // we reproduce the user that was created in the database, locally
      const user_id = answer.result;
      const user = {user_name, user_id };
      const users = [...this.state.users, user];

      this.setState({ users});
    } else {
      this.setState({ error_message: answer.message });
    }
  } catch (err) {
    this.setState({ error_message: err.message });
  }
};

//on Submit 
onSubmit = evt => {
  evt.preventDefault();
  
  const { user_name } = this.state;
  this.addUser({ user_name });
  this.state.users.push({user_name})
  this.setState({ user_name: "" });
  
};



  render() {
    console.log(this.setState.user_name)
    const {users} = this.state
    return (
      <div>
      { users.map( x => 
        <div key={x.user_id}>
        <p>  {x.user_name}</p>
        </div>
        )
      }

      <form onSubmit={this.onSubmit}>
        <input 
        placeholder="user_name"
        onChange={evt => this.setState({ user_name: evt.target.value })}
        value={this.state.user_name}

        /> 
        <input type="submit" value="ok" />
        <input type="reset" value="cancel" className="button" />

      </form>
      </div>

    );
  }
}

export default App;
