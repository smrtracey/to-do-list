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
        <form onSubmit={handleSubmit}className ='input-form' >

            <input type ='text'
            value = {input}
            name ='task'
            onChange = {handleChange}
            placeholder='Add a task'
            className='input'/>

            <button type ='submit' onSubmit={handleSubmit} className='submit-btn'>ADD</button>
            

        </form>
    )
}

export default InputForm
