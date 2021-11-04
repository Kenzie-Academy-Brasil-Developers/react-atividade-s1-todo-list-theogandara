import {useState} from "react"

const Form = ({addTodo}) => {

    const [userInput, setUserInput] = useState("")

  return (
    <div>
      <input 
      type="text"
      value={userInput}
      onChange={(event) => setUserInput(event.target.value)}
      ></input>
      <button onClick={()=>addTodo(userInput)} >Enviar</button>
    </div>
  );
};

export default Form;