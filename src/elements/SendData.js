function Send(Object) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object)
    };
    fetch('https://frosty-wood-6558.getsandbox.com:443/dishes', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
}

export default Send;