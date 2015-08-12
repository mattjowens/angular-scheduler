/**
 * Created by matthewo on 12/08/2015.
 */
class Trainer{
    constructor(firstName,lastName,email){
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
    }

    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }

    get email(){
        return this._email;
    }

    set firstName(value){
        this._firstName = value;
    }

    set lastName(value){
        this._lastName = value;
    }

    set email(value){
        this._email = value;
    }

}