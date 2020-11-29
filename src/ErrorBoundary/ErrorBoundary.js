import React, {Component} from 'react';

//nice to know but not needed unless an error might happen
class ErrorBoundary extends Component{
    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch = (error, info) =>{
        this.setState({hasError: true, errorMessage: error});
    }

    render(){
        if(this.state.hasError){
            return <h1>Something went wrong</h1>;
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;