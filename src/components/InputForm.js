import {useState} from 'react'

const InputForm = ({addTask}) => {


    const [input, setInput] = useState('')

    const handleChange =(e)=>{
        setInput(e.target.value)    
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        addTask(input)
        setInput('')
    }

    return (
        <form onSubmit={handleSubmit} >

            <input type ='text'
            value = {input}
            name ='task'
            onChange = {handleChange}
            placeholder='Add a task'/>

            <button type ='submit' onSubmit={handleSubmit}>OK</button>
            

        </form>
    )
}

export default InputForm
