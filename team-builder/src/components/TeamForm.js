import React, {useState} from 'react';
import styled from 'styled-components'

const Form =styled.form`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
`
const TextArea =styled.textarea`
    width: 200px;
    padding: 15px 22px;
    margin: 10px 5px;
    box-sizing: border-box;  
    border: 1px solid skyblue;
    border-radius: 4px;
`
const Button = styled.button`
    background: skyblue;
    border: 1px solid white;
    padding: 10px 15px;
    font-size: 16px;
    color: #191919;
    box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.12), 0 2px 2px 1px rgba(0, 0, 0, 0.24);
    transition: all 0.2 ease-in;
`
const TeamForm = ({addNewPlayer}) => {
    const [player,setPlayer] =useState({
        name: "",
        email: "",
        role: ""
    })
    const handleChanges = event => {
        setPlayer({...player, [event.target.name]: event.target.value});
    };
    const submitForm = event =>{
        event.preventDefault();
        addNewPlayer(player);
        setPlayer({name: "", email: "", role: ""})
    }
    return (
        <Form onSubmit={submitForm}>
      {/* htmlFor must match id to connect label & input for accessibility*/}
      <label htmlFor="name">Name</label>
      <TextArea
        id="name"
        name="name"
        placeholder="Enter a Name"
        onChange={handleChanges}
        value={player.name}
      />
      {/* We use value= state so that we can set initial state of input. Try updating initial state in useState({}) to see this.*/}
      <label htmlFor="email">Email@</label>
      <TextArea
        id="email"
        name="email"
        placeholder="@"
        onChange={handleChanges}
        value={player.email}
      />
      <label htmlFor="role">Role</label>
      <TextArea
        id="role"
        name="role"
        placeholder="role"
        onChange={handleChanges}
        value={player.role}
      />
      <Button type="submit">Add Player</Button>
    </Form>
    )
}
export default TeamForm