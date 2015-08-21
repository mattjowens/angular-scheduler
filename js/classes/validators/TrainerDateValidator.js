/**
 * Created by matthewo on 12/08/2015.
 */
class TrainerDateValidator{

    constructor(appointments){
        this._appointments = appointments;
    }

    validate(appointmentViewModel)
    {
        /*
           Here we have to see if any of the trainers in the collection inside appointmentViewModel
           are training in other appointments at the same time. Remember there can be more than one trainer.

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
                    reason:'This has to fail',
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