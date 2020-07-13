import React from 'react';

class LogOut extends React.Component{
    componentDidMount(){
        sessionStorage.removeItem('x-token');
        window.location ='/'
    }
    render(){
        return null;
    }
}
export default LogOut;