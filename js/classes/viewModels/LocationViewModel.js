/**
 * Created by Matt on 18/08/2015.
 */
class LocationViewModel{
    constructor(locationIdentifier){
        this._locationIdentifier = locationIdentifier;

    }
    get LocationIdentifier(){
        return this._locationIdentifier;
    }
}