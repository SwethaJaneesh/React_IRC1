import {useState} from "react"
const TempComp=()=>
{
    const[data,setData]=useState({
        username:'',
        password:''
    })
    const handleChange=(e)=>{
        setData({...data,[e.target.id]:e.target.value})
        console.log(data)
    }
    const handleSubmit=()=>{
        e.preventDefault()
        console.log("final data")
        console.log(data)
// alert('form submitted')
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="username" id="username" onchange={handleChange}/>
            <input type="password" id="password" onChange={handleChange}/>
            <input type="submit" value="Login"/>
        </form>
        </>
    )
}
export default TempComp;