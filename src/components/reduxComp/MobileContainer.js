import React from 'react'
import { connect } from 'react-redux'
import { buyMobile } from '../redux/mobile/mobileActions'; 

function MobileContainer(props) {
    
    return (
        <div>
             <h2>Total  Mobile :{props.totalMobile}</h2> {/* for css module */}
            <button onClick = {props.buyMobile}> Buy Mobile </button> {/* backtic for multiple class */}
        </div>
    )
}
const mapStateToProps = state =>{
    return{
        totalMobile : state.totalMobile
        }
}

const mapDispatchToProps = state =>{
    return{
        buyMobile : () => dispatch( buyMobile())
        }
}

export default connect( mapStateToProps, mapDispatchToProps) (MobileContainer )
