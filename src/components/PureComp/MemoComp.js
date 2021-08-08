import React from 'react'

 function MemoComp({name}) {

        console.log('Memo')
        return <h1> From memocomp: {name} </h1>
   
}
// export default MemoComp
export default React.memo(MemoComp) // to avord re rander for setInterval
