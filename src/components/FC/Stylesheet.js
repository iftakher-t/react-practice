import React from 'react'
import './Mystyle.css'
import styles from './appStyles.module.css'; // for css module

function Stylesheet(props) {

    let className = props.primary ? 'primary' : 'dark'  // for dark mood
    return (
        <div>
             <h2 className = {styles.success } > Iftakher</h2> {/* for css module */}
            <h1 className = { ` ${className} font-xl `}> Nouman </h1> {/* backtic for multiple class */}
        </div>
    )
}

export default Stylesheet 
