import React, { useState, useCallback } from 'react'
import ButtonComp from './ButtonComp'
import CountComp from './CountComp'
import Title from './Title'

 function ParentComp () {
    const [age, setAge]= useState(25)
    const [salary, setSalary]= useState(50000)

     const incrementAge = useCallback( () => {
         setAge(age + 1)
     },[age])

     const incrementSalary = useCallback( () => {
        setSalary(salary + 5000)
    },[salary])
    
        return (
            <div>
                <Title />
                <CountComp text ='Age' count={age} />
                <ButtonComp handleClick = {incrementAge } > Increment Age </ButtonComp>
                <CountComp text ='Salary' count={salary}  />
                <ButtonComp handleClick = {incrementSalary} > Increment Salary </ButtonComp>
            </div>
        )
    }

export default ParentComp