class ValidForm {
    static valid(data, type){
        switch(type){
            case 'string':
                return /^[a-zA-ZąćęłńóśóżźĄĆĘŁŃÓŚŹŻ -]*$/.test(data) ? true : false;
            case 'time':
                if(data.length < 6){
                    data = data + ":00";
                }
                return data > "00:00:00" ? true : false;
            case 'number':
                return data > 0 ? true : false;
            default:
                break;
        }
    }

    static exist(data){
        return data !== "" ? true : false;
    }
}

export default ValidForm;
