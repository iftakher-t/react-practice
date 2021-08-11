import React from 'react';
import ColorComp from './ColorComp';
import ErrorBoundary from './ErrorBoundary';

class AllColor extends React.Component {

    render() {
    return (
        <div>
            <ErrorBoundary> 
                <ColorComp name="Blue"/>
            </ErrorBoundary>
            
            <ErrorBoundary> 
                <ColorComp name="Green"/>
            </ErrorBoundary>

            <ErrorBoundary> 
                <ColorComp name="Black"/>
            </ErrorBoundary>
        </div>
    )
    }
}
export default AllColor