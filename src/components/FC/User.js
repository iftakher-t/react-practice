import react from 'react'

function User({user}){

    return (
        <div> 
            <h2 >
                 I am { user.name }. I am in {user.age} 
            </h2> 
        </div>

    )
}

export default User