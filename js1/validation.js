//document addEventListener
document.addEventListener('DOMContentLoaded',function(){

    //content
    const form=document.getElementById('travelrequest');
    const empidInput=document.getElementById('txtempid');
    const nameInput=document.getElementById('txtempname');
    const projectInput=document.getElementById('txtproject');
    const causefortravelInput=document.getElementById('txtcausefortravel');
    const sourceInput=document.getElementById('txtsource');
    const destinationInput=document.getElementById('txtdestination');
    const frmdateInput=document.getElementById('frmDate');
    const numberofdaysInput=document.getElementById('numberofdays');
    const todateInput=document.getElementById('toDate');
    

   
    //Error message
    const idError= document.getElementById('empidError');
    const nameError= document.getElementById('empnameError');
    const projectError= document.getElementById('projectError');
    const causefortravelError= document.getElementById('causefortravelError');
    const sourceError= document.getElementById('sourceError');
    const destinationError= document.getElementById('destinationError');
    const frmDateEror= document.getElementById('frmDateEror');
    const ToDateEror= document.getElementById('ToDateEror');

    const today = new Date();
    const maxDate= new Date(today.getFullYear()+1,today.getMonth(),today.getDate());
    const minDate= new Date(today.getFullYear(),today.getMonth(),today.getDate());

    frmdateInput.max=formattedDates(maxDate);
    todateInput.min=formattedDates(minDate);
    //formatted date
    function formattedDates(date){

        //yyyy-mm-dd
        const year=date.getFullYear();
        let month=(date.getMonth()+1).toString().padStart(2,"0");
        let day=date.getDate().toString().padStart(2,"0");
        return `${year}-${month}-${day}`;

    }

    function calculateDays() {
        const fromDateObj = new Date(frmdateInput.value);
        const toDateObj = new Date(todateInput.value);

        if (!isNaN(fromDateObj) && !isNaN(toDateObj)) {
            const timeDifference = toDateObj - fromDateObj;
            const totalDays = Math.ceil(timeDifference / (24 * 60 * 60 * 1000));

            if (totalDays >= 0) {
                numberofdaysInput.value = totalDays;
            } else {
                numberofdaysInput.value = ''; // Clear the field if the dates are invalid
            }
        } else {
            numberofdaysInput.value = ''; // Clear the field if the dates are invalid
        }
    }

    frmdateInput.addEventListener('change', calculateDays);
    todateInput.addEventListener('change', calculateDays);
    //form addEventListener

    form.addEventListener('submit',function(event){
        //prevent form submission
        event.preventDefault();
        //validation Employee ID
        if(!empidInput.value.trim()){
            idError.textContent='EmpID is required!';

        }
        else{
            idError.textContent='';
        }
        // name validation 
        if(!nameInput.value.trim()){
            nameError.textContent='Employee Name is required!';

        }
        else{
            nameError.textContent='';
        }
        //project input validation
        if (!projectInput.value.trim()) {
            projectError.textContent = "Project is required!";
        }else{
            projectError.textContent="";
        }

        //validate cause for travel
        if(!causefortravelInput.value.trim()){
            causefortravelError.textContent='Cause for travel is required!';

        }
        else{
            causefortravelError.textContent='';
        }

        // validate source
        if(!sourceInput.value.trim()){
            sourceError.textContent='Enter the source!';

        }
        else{
            sourceError.textContent='';
        }
        
        // validate destination
        if(!destinationInput.value.trim()){
            destinationError.textContent='Enter the destination!';

        }
        else{
            destinationError.textContent='';
        }

         // validate from from date
         if(!frmdateInput.value.trim()){
            frmDateEror.textContent='Enter the from date!';

        }
        else{
            frmDateEror.textContent='';
        }
        
         // validate from to date
         if(!todateInput.value.trim()){
            ToDateEror.textContent='Enter the to date!';

        }
        else{
            ToDateEror.textContent='';
        }
        

       
       




    });
    
   




    
   




});