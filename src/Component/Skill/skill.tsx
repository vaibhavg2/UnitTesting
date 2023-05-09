import React, { useEffect, useState } from 'react'
import { skillsProps } from './skill.type';

const Skills = (props: skillsProps) => {
    const { skills } = props
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(()=>{
        setTimeout(() => {
            setIsLoggedIn(true)
        }, 500);
    })

    return (
        <>
            <div className='container'>

                <ul>
                    {skills.map((skill) => {
                        return <li key={skill}>{skill}</li>
                    })}
                </ul>
                {isLoggedIn ? (
                    <button onClick={() => setIsLoggedIn(false)}>Logout</button>
                ) : (
                    <button onClick={() => setIsLoggedIn(true)}>Login</button>
                )

                }
            </div>
        </>
    )
}
export default Skills;