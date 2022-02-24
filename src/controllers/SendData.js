import ResponseObject from '../objects/ResponseObject'

async function Send(Object) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(Object)
    };
    try{
     await fetch('https://frosty-wood-6558.getsandbox.com:443/dishes', requestOptions)
        .then(response => response.json().then(data => ({
            data: data,
            status: response.status
        })).then(res => {
            ResponseObject.code = res.status;
            ResponseObject.object = res.data
        }));
    }
    catch(err){
        ResponseObject.code = '420';
        ResponseObject.object = {error : 'server error'};
    }
   

}

export default Send;