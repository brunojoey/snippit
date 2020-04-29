import React, { useState } from 'react';
import { login } from "../utils/API";

function Form() {
  const [state, setState] = useState({});
  const [user, setUser] = useState(null);
  const handleChange = (e) => {
    e.preventDefault();
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    setState({...state, [name]: value});
    console.log('STATE: ', state);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const { data } = await login(state);
    console.log('DATA: ', data);
    const user = data;
    setUser(user);
  };

  const isLoggedIn = () => {
    return !!user;
  }

  const renderHeader = () => {
    if (isLoggedIn()) {
      return <h1>Logged In! as {user.firstName}</h1>;
    }
    return <h1>Not Logged In!</h1>;
  }

  return(
    <form>
      {renderHeader()}
      <input type="text" name="username" onChange={handleChange} />
      <input type="text" name="password" onChange={handleChange} />
      <input type="button" onClick={handleFormSubmit} value="Login" />
    </form>
  );
};

export default Form;
