/**
 * Created by matthewo on 12/08/2015.
 */
class LocationDateValidator{

    constructor(appointments){
        this._appointments = appointments;
    }

    validate(appointmentViewModel)
    {

        /*
          Currently this doesn't consider location of the appointment, it needs to do that by
          using the location identifier.

        */

                 if(this._appointments==null || this._appointments.length==0) {
            return {
                outcome:true,
                reason:'',
                conflictId:0
            };
        }else{
            var result = this._appointments.where(function(appointment)
            {
               if(appointment.startDate.toString()===appointmentViewModel.startDate.toString() && appointment.endDate.toString()===appointmentViewModel.endDate.toString()){
                    return true;
                }

                //(StartA <= EndB)  and  (EndA >= StartB)
                if(appointment.startDate <=appointmentViewModel.endDate && appointmentViewModel.endDate>=appointment.startDate){
                    return true;
                }

                return false;
            });

            if(result.length>0){
                return {
                        outcome:false,
                        reason:'There is already an appointment scheduled for this location on this date',
                        conflictId:result[0].id
                };
            }
            else{
                return {
                    outcome:true,
                    reason:'',
                    conflictId:0
                };
            }
        }
    }
}