import React from 'react';
import ResponseObject from '../objects/ResponseObject'

class Response extends React.Component{
    render(){
            return  Object.entries(ResponseObject.object).map((el) => <p>{el[0]}: {el[1]}</p>);
    }
}

export default Response;
