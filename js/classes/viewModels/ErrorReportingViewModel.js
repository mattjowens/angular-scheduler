/**
 * Created by Matt on 12/08/2015.
 */
class ErrorReportingViewModel{
    constuctor(){
        this._hasErrors=false;
        this._errors=[];
    }

    get errors(){
        return this._errors;
    }

    get hasErrors(){
        return this._hasErrors;
    }
}