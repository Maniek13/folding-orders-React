class ValidForm {
    static valid(data, type){
        switch(type){
            case 'string':
                return /^[a-zA-ZąćęłńóśóżźĄĆĘŁŃÓŚŹŻ -]*$/.test(data) ? true : false;
            case 'time':
                return data !== "00:00:00" ? true : false;
            default:
                break;
        }
    }

    static exist(data){
        return data !== "" ? true : false;
    }
}

export default ValidForm;
