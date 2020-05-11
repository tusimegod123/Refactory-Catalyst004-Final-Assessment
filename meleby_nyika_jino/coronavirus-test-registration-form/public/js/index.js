var surName = document.forms['vform']['surName'];
var givenName = document.forms['vform']['givenName'];
var gender = document.forms['vform']['gender'];
var date = document.forms['vform']['date'];
var country = document.forms['vform']['country'];
var residence = document.forms['vform']['residence'];
var phone = document.forms['vform']['phone'];
var email = document.forms['vform']['email'];
var skills = document.forms['vform']['skills'];
var projects = document.forms['vform']['projects'];

var surName_error = document.getElementById('surName_error');
var givenName_error = document.getElementById('givenName_error');
var gender_error = document.getElementById('gender_error');
var date_error = document.getElementById('date_error');
var residence_error = document.getElementById('residence_error');
var phone_error = document.getElementById('phone_error');
var email_error = document.getElementById('email_error');
var skills_error = document.getElementById('skills_error');
var projects_error = document.getElementById('projects_error');

function Validate() {
    event.preventDefault()
    if (surName.value == "") {
      surName_error.style.color = "red";     
      surName_error.textContent = "Surname is required";
         
    }
   
    if (givenName.value == "") {
      givenName_error.style.color = "red";
      givenName_error.textContent = "Given name is required";
     
    }
   
    if (date.value == "") {
        date_error.style.color = "red";
        date_error.textContent = "Date is required";
        
    }  

    if (country.value == "-------Select Country-------") {
        country_error.style.color = "red";
        country_error.textContent = "Country is required";   
           
    }  

    if (residence.value == "") {
        residence_error.style.color = "red";
        residence_error.textContent = "Residence is required";               
    }
    
    if (phone.value == "") {
        phone_error.style.color = "red";
        phone_error.textContent = "Phone number is required";        
    }  

    if (email.value == "") {
      email_error.style.color = "red";
      email_error.textContent = "Email is required";
      
      return false;
    } 
}
  
