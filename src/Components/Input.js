import React from 'react'
import { useDispatch } from 'react-redux'
import { setCount } from '../redux/slices/countSlice'

export default function Input (){
    const dispatch = useDispatch()
    return (
        <>
         <input type="number" className='box1' onChange={((e)=>dispatch(setCount(e.target.value)))} />
        </>
    )
}