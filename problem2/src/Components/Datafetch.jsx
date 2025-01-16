import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../App.css'
const Datafetch = () => {
    const[data,setData]=useState([])
    const[page,setPage]=useState(1)
 
        const fetchData=async()=>{
            try{
                const res=await axios(`https://swapi.dev/api/people/?page=${page}`);
                setData(res.data.results)
                console.log(data)
            }
            catch(e){
                console.log(e)
            }
        }

    const handleAdd=()=>{
        fetchData();
    }

    const handleDelete = (index) => {
        const updatedData = data.filter((ele, i) => i !== index);
        setData(updatedData);
      };

    
  return (
    <div className='cont'>
        <button onClick={() => handleAdd()}>Add Record</button>
        <table>
            <tbody>     
                {
                    data && data.map((ele,index)=>(
                        <tr key={index}>
                        <td>{ele.name}</td>
                        <td><button onClick={() => handleDelete(index)}>Delete</button></td>
                        </tr>
                    ))
                }
            
            </tbody>
            
        </table>
    </div>
  )
}

export default Datafetch
