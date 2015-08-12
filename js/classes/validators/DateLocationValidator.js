/**
 * Created by matthewo on 12/08/2015.
 */
class DateLocationValidator{
    _appointments;
    constructor(appointments){
        this._appointments = appointments;
        console.log(this._appointments);
    }

    validate(appointmentViewModel)
    {
        console.log('validating');

        if(this._appointments==null || this._appointments.length==0) {
            console.log('appointments null');
            console.log(this._appointments);
            return {
                outcome:true,
                reason:'',
                conflictId:0
            };
        }else{

            console.log('appointments not null');
            var result = this._appointments.where(function(appointment)
            {
                console.log('searching');
                if(appointment.startDate==appointmentViewModel.startDate && appointment.startDate==appointmentViewModel.startDate){
                    console.log('found');
                    return true;
                }
            });

            if(result.length>0){
                return {
                        outcome:true,
                        reason:'There is already an appointment scheduled for this location on this date',
                        conflictId:result[0].id
                };
            }
        }
    }
}