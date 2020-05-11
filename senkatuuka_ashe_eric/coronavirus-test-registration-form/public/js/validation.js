
document.addEventListener('submit', function (event) {
    var form = document.getElementById('formRegister');
    document.getElementById("demo").innerHTML = "Hello World";

    var valid = {};                          // Object to store validation status of invidual fields
    var isFormValid;                         // Variable to store fvalidation status of entire form


    // PERFORM INVIDUAL FIELDS VALIDATION
    if (!validateName('inputSurname', 'fNameErr')) {
        valid.fname = false;
    } else {
        valid.fname = true;

    }

    if (!validateName('inputGivenName', 'lNameErr')) {
        valid.lname = false;
    } else {
        valid.lname = true;

    }

    if (!validateAge('inputDOB', 'dobErr')) {
        valid.patientAge = false;
    } else {
        valid.patientAge = true;
    }

    if (!validateResidence('inputResidence', 'residenceErr')) {
        valid.residence = false;
    } else {
        valid.residence = true;

    }

    if (!validateOccupation('inputOccupation', 'occupationErr')) {
        valid.occupation = false;
    } else {
        valid.occupation = true;

    }

    if (!validateOccupation('inputNationality', 'nationalityErr')) {
        valid.occupation = false;
    } else {
        valid.occupation = true;

    }

    if (!validateCategory('inputCategory', 'cactegoryErr')) {
        valid.occupation = false;
    } else {
        valid.occupation = true;

    }


    // CHECK VALID OBJECT FOR ANY INVALID FIELD     
    for (let field in valid) {
        if (!valid[field]) {
            isFormValid = false;
            break;
        }
        isFormValid = true;
    }

    // If the form did not validate, prevent it being submitted
    if (!isFormValid) {
        event.preventDefault();
    } else {
        alert('Validation Successful');
    }

});

// VALIDATION METHODS
function validateName(name, errID) {
    let fName = document.getElementById(name);
    let valid = true;
    let regexAlpha = /^[a-zA-Z\s]+$/;
    let regexLimit = /^[a-zA-Z]{2,15}$/
    if (fName.value === "") {
        printError(errID, "This field is required");
        fName.classList.add("invalid-outline");
        valid = false;
    } else if (regexAlpha.test(fName.value) === false) {
        printError(errID, "Please enter a valid name");
        fName.classList.remove("valid-outline");
        fName.classList.add("invalid-outline");
        valid = false
    } else if (regexLimit.test(fName.value) === false) {
        printError(errID, "Name should be between 2 and 15 characters long");
        valid = false

    } else {
        printError(errID, "");
        fName.classList.add("valid-outline");
        valid = true;
    }
    return valid;
}

function validateAge(paramDOB, errID) {
    let dob = document.getElementById(paramDOB)
    let d = new Date(dob.value);
    let age = calculateAge(d)
    let valid = true;
    if (isNaN(age)) {
        printError(errID, "Select Date of Birth");
        dob.classList.remove("valid-outline");
        dob.classList.add("invalid-outline");
        valid = false;
    } else {
        if (age < 2) {
            printError(errID, "Patient should be above 1 year of age");
            dob.classList.remove("valid-outline");
            dob.classList.add("invalid-outline");
            valid = false;
        }
        else if (age > 150) {
            printError(errID, "Patient should be below 150 years of age");
            dob.classList.remove("valid-outline");
            dob.classList.add("invalid-outline");
            valid = false;
        }
        else {
            printError(errID, "");
            dob.classList.remove("invalid-outline");
            dob.classList.add("valid-outline");
            valid = true;
        }
        return valid;
    }

}

function validateResidence(name, errID) {
    let residence = document.getElementById(name);
    let valid = true;
    let regexAlpha = /^[a-zA-Z\s]+$/;
    let regexLimit = /^[a-zA-Z]{2,19}$/
    if (residence.value === "") {
        printError(errID, "This field is required");
        residence.classList.add("invalid-outline");
        valid = false;
    } else if (regexAlpha.test(residence.value) === false) {
        printError(errID, "Place of residence should not contain numbers");
        residence.classList.remove("valid-outline");
        residence.classList.add("invalid-outline");
        valid = false
    } else if (regexLimit.test(residence.value) === false) {
        printError(errID, "Name of residence should be between 2 and 19 characters long");
        residence.classList.remove("valid-outline");
        residence.classList.add("invalid-outline");
        valid = false

    } else {
        printError(errID, "");
        residence.classList.add("valid-outline");
        valid = true;
    }
    return valid;
}

function validateOccupation(name, errID) {
    let occupation = document.getElementById(name);
    let valid = true;
    let regexAlpha = /^[a-zA-Z\s]+$/;
    let regexLimit = /^[a-zA-Z]{4,49}$/
    if (occupation.value === "") {
        printError(errID, "This field is required");
        occupation.classList.add("invalid-outline");
        valid = false;
    } else if (regexAlpha.test(occupation.value) === false) {
        printError(errID, "Your occupation should not contain numbers");
        occupation.classList.remove("valid-outline");
        occupation.classList.add("invalid-outline");
        valid = false
    } else if (regexLimit.test(occupation.value) === false) {
        printError(errID, "Occupation should be between 4 and 49 characters long");
        valid = false

    } else {
        printError(errID, "");
        occupation.classList.add("valid-outline");
        valid = true;
    }
    return valid;
}

function validateNationality(name, errID) {
    let nationality = document.getElementById(name);
    let valid = true;
    let regexAlpha = /^[a-zA-Z\s]+$/;
    let regexLimit = /^[a-zA-Z]{6,19}$/
    if (nationality.value === "") {
        printError(errID, "This field is required");
        nationality.classList.add("invalid-outline");
        valid = false;
    } else if (regexAlpha.test(nationality.value) === false) {
        printError(errID, "Nationality should not contain numbers");
        nationality.classList.remove("valid-outline");
        nationality.classList.add("invalid-outline");
        valid = false
    } else if (regexLimit.test(nationality.value) === false) {
        printError(errID, "Nationality should be between 6 and 19 characters long");
        valid = false

    } else {
        printError(errID, "");
        nationality.classList.add("valid-outline");
        valid = true;
    }
    return valid;
}

function validateCategory(name, errID) {
    let category = document.getElementById(name);
    let valid = true;   
    if (category.value === "") {
        printError(errID, "Select Patient Category");
        category.classList.add("invalid-outline");
        valid = false;
    } else {
        printError(errID, "");
        category.classList.add("valid-outline");
        valid = true;
    }
    return valid;
}



// Method to calculate age
function calculateAge(birthday) {
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Method to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}


/* function greet() {

    var form = document.getElementById('userRegistration');


    //METHOD TRIGGERERD BY THE SUBMIT EVENT
    addEvent(form, 'submit', function (e) {

        var valid = {};                          // Object to store validation status of invidual fields
        var isFormValid;                         // Variable to store fvalidation status of entire form

        // PERFORM INVIDUAL FIELDS VALIDATION
        if (!validateName('inputName', 'nameErr')) {
            valid.fname = false;
        } else {
            valid.fname = true;

        }

        if (!validateNationality('inputNIN', 'ninErr')) {
            valid.nationality = false;
        } else {
            valid.nationality = true;
        }

        if (!validateTel('inputTel', 'telErr')) {
            valid.tel1 = false;
        } else {
            valid.tel1 = true;
        }

        // CHECK VALID OBJECT FOR ANY INVALID FIELD
        for (let field in valid) {
            if (!valid[field]) {
                isFormValid = false;
                break;
            }
            isFormValid = true;
        }

        // If the form did not validate, prevent it being submitted
        if (!isFormValid) {
            e.preventDefault();
        }

    });

    // VALIDATION METHODS
    function validateName(name, errID) {
        let fName = document.getElementById(name);
        let valid = true;
        if (fName.value === "") {
            printError(errID, "Please enter customer name");
            fName.classList.add("invalid-outline");
            valid = false;
        } else {
            let regex = /^[a-zA-Z\s]+$/;
            if (regex.test(fName.value) === false) {
                printError(errID, "Please enter a valid name");
                tel.classList.remove("valid-outline");
                tel.classList.add("invalid-outline");
                valid = false
            } else {
                printError(errID, "");
                fName.classList.add("valid-outline");
                valid = true;
            }
        }
        return valid;
    }

    function validateNationality(paramNIN) {
        let NIN = document.getElementById(paramNIN);
        let valid = true;
        if (NIN.value === "") {
            printError("ninErr", "Please enter National ID Number");
            NIN.classList.remove("valid-outline");
            NIN.classList.add("invalid-outline");
            valid = false;
        } else {
            let regex = /^[a-zA-Z\s]{3}[0-9]{10}$/;
            if (regex.test(NIN.value) === false) {
                printError("ninErr", "Please enter a valid NIN");
                valid = false
            } else {
                printError("ninErr", "");
                valid = true;
            }
        }
        return valid;
    }

    function validateTel(paramtel, errID) {
        let tel = document.getElementById(paramtel);
        let valid = true;
        if (tel.value === "") {
            printError(errID, "Please enter telephone number");
            tel.classList.remove("valid-outline");
            tel.classList.add("invalid-outline");
            valid = false;
        } else {
            let regex = /^[0-9]{10,}$/;
            if (regex.test(tel.value) === false) {
                printError(errID, "Please enter a valid telephone number");
                tel.classList.remove("valid-outline");
                tel.classList.add("invalid-outline");
                valid = false
            } else {
                printError(errID, "");
                tel.classList.remove("invalid-outline");
                tel.classList.add("valid-outline");
                valid = true;
            }
        }
        return valid;
    }

    // Method to display error message
    function printError(elemId, hintMsg) {
        document.getElementById(elemId).innerHTML = hintMsg;
    }
}

greet(); */