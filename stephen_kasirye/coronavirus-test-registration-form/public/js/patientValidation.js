formValidation = () => {
    
    // Receive Values
    var surName = document.registrationForm.surName;
    var givenName = document.registrationForm.givenName;
    var dob = document.registrationForm.dob;
    var residence = document.registrationForm.residence;
    var occupation = document.registrationForm.occupation;
    var nationality = document.registrationForm.nationality;
    var category = document.registrationForm.category;

    // Reset Borders
    surName.style.border = "1px solid lightgrey"
    givenName.style.border = "1px solid lightgrey"
    dob.style.border = "1px solid lightgrey"
    residence.style.border = "1px solid lightgrey"
    occupation.style.border = "1px solid lightgrey"
    nationality.style.border = "1px solid lightgrey"
    category.style.border = "1px solid lightgrey"

    // Reset Error Messages
    document.getElementById('surName-error').style.display = "none"
    document.getElementById('givenName-error').style.display = "none"
    document.getElementById('dob-error').style.display = "none"
    document.getElementById('residence-error').style.display = "none"
    document.getElementById('occupation-error').style.display = "none"
    document.getElementById('nationality-error').style.display = "none"
    document.getElementById('category-error').style.display = "none"

    // Object to store confirmations
    const validations = {
        surName: 0,
        givenName: 0,
        dob: 0,
        residence: 0,
        occupation: 0,
        nationality: 0,
        category: 0
    };

    // Run Validations
    validations.surName = surName_validation(surName, 1, 16);
    validations.givenName = givenName_validation(givenName, 1, 16);
    validations.dob = dob_validation(dob, 1, 150);
    validations.residence = residence_validation(residence, 1, 20);
    validations.occupation = occupation_validation(occupation, 5, 50);
    validations.nationality = nationality_validation(nationality, 5, 20);
    validations.category = category_validation(category);

    // Convert to Array
    const values = Object.values(validations)

    // Examine Array
    var form_validity = 0
    for(i=0; i<7; i++) {
        if (values[i] === 1){
            form_validity++
        } 
    }

    // Determine completion
    if (form_validity !== 7) {
        // Pause form execution if all fields are not validated in the object literal above
        event.preventDefault();
    } else {
        // On success auto generate username and relay it to Admin then resume execution
        alert("You have successfully completed validation");
        // console.log(generated_username)
        event.currentTarget.submit();
        return true;
    }
    event.preventDefault();
    
    alert('Congratulations; validation is done.');
    return true;
}

function surName_validation(surName, min, max){
    if(surName.value.length === 0){
        surName.style.border = "2px solid red"
        document.getElementById('surName-error').style.display = "block"
        surName.focus()
        return false
    }
    else if(surName.value.length <max||surName.value.length >min){
        surName.style.border = "2px solid red"
        document.getElementById('surName-error').style.display = "none"
        document.getElementById('surName-error').style.display = "block"
        surName.focus()
        return false
    }
    else{ 
        surName.style.border = "2px solid green"
        document.getElementById('surName-error').style.display = "none"
        return true
     }
}
function givenName_validation(givenName,mx,my){
    if(givenName.value.length === 0){
        givenName.style.border = "2px solid red"
        document.getElementById('givenName-error').style.display = "block"
        givenName.focus()
        return false
    }
    else if(givenName.value.length <mx||givenName.value.length >my){
        givenName.style.border = "2px solid red"
        document.getElementById('givenName-error').style.display = "none"
        document.getElementById('givenName-error').style.display = "block"
        givenName.focus()
        return false
    }
    else{ 
        givenName.style.border = "2px solid green"
        document.getElementById('givenName-error').style.display = "none"
        return true
     }
}
function dob_validation(doB,mx,my){
    if(doB.value.length === 0){
        doB.style.border = "2px solid red"
        document.getElementById('dob-error').style.display = "block"
        doB.focus()
        return false
    }
    else if(doB.value.length <mx||doB.value.length >my){
        doB.style.border = "2px solid red"
        document.getElementById('dob-error').style.display = "none"
        document.getElementById('dob-error').style.display = "block"
        doB.focus()
        return false
    }
    else{ 
        doB.style.border = "2px solid green"
        document.getElementById('dob-error').style.display = "none"
        return true
     }
}
function residence_validation(residence,mx,my){
    if(residence.value.length === 0){
        residence.style.border = "2px solid red"
        document.getElementById('residence-error').style.display = "block"
        residence.focus()
        return false
    }
    else if(residence.value.length <mx||residence.value.length >my){
        residence.style.border = "2px solid red"
        document.getElementById('residence-error').style.display = "none"
        document.getElementById('residence-error').style.display = "block"
        residence.focus()
        return false
    }
    else{ 
        residence.style.border = "2px solid green"
        document.getElementById('residence-error').style.display = "none"
        return true
     }
}
function occupation_validation(occupation,mx,my){
    if(occupation.value.length === 0){
        occupation.style.border = "2px solid red"
        document.getElementById('occupation-error').style.display = "block"
        occupation.focus()
        return false
    }
    else if(occupation.value.length <mx||occupation.value.length >my){
        occupation.style.border = "2px solid red"
        document.getElementById('occupation-error').style.display = "none"
        document.getElementById('occupation-error').style.display = "block"
        occupation.focus()
        return false
    }
    else{ 
        occupation.style.border = "2px solid green"
        document.getElementById('occupation-error').style.display = "none"
        return true
     }
}
function nationality_validation(nationality,mx,my){
    if(nationality.value.length === 0){
        nationality.style.border = "2px solid red"
        document.getElementById('nationality-error').style.display = "block"
        nationality.focus()
        return false
    }
    else if(nationality.value.length <mx||nationality.value.length >my){
        nationality.style.border = "2px solid red"
        document.getElementById('nationality-error').style.display = "none"
        document.getElementById('nationality-error').style.display = "block"
        nationality.focus()
        return false
    }
    else{ 
        nationality.style.border = "2px solid green"
        document.getElementById('nationality-error').style.display = "none"
        return true
     }
}
function category_validation(category,mx,my){
    if(category.value === "Default"){
        category.style.border = "2px solid red"
        document.getElementById('category-error').style.display = "block"
        category.focus()
        return false
    }
    else if(category.value.length <mx||category.value.length >my){
        category.style.border = "2px solid red"
        document.getElementById('category-error').style.display = "none"
        document.getElementById('category-error').style.display = "block"
        category.focus()
        return false
    }
    else{ 
        category.style.border = "2px solid green"
        document.getElementById('category-error').style.display = "none"
        return true
     }
}