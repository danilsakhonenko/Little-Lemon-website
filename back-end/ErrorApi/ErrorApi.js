class ErrorApi extends Error{
    constructor(status,message){
        super();
        this.status=status
        this.message=message
    }

    static badRequest(message){
        return new ErrorApi(400, message)
    }

    static internal(message){
        return new ErrorApi(500, message)
    }

    static forbiden(message){
        return new ErrorApi(403, message)
    }
}

export default ErrorApi