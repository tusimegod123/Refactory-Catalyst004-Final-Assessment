function validation()
{
  var surName = document.form.surname
  var given    = document.form.givenname
  var dob  = document.form.dateOfBirth
  var residence = document.form.placeOfResidence
  var job = document.form.occupation
  var origin = document.form.nationality

  function uid(min, max)
  {

    if(surName.value.length==0|| surName.value.length<min||surName.value.length>max)
    {
      alert('Invalid length')
    }

  }
  function alphabet(surname) {
    var letters = /^[a-zA-Z][a-zA-Z\s]*$/;
    if (surname.value.match(letters)) {
        surname.style.border = '2px solid green'
        return true;
    }
    else {
        document.getElementById('p1').innerText = "This field is required";
        surname.style.border = '2px solid red'
        surname.focus();
        return false;
    }
 }
  
  function namegiven(mn, mx)
  {

    if(given.value.length==0|| given.value.length<mn||given.value.length>mx)
    {
      alert('Invalid length')
    }

  }
  function alphabet(givenname) {
    var letters = /^[a-zA-Z][a-zA-Z\s]*$/;
    if (givenname.value.match(letters)) {
        givenname.style.border = '2px solid green'
        return true;
    }
    else {
        document.getElementById('p2').innerText = "This field is required";
        givenname.style.border = '2px solid red'
        givenname.focus();
        return false;
    }
 }

  function age(mq, my)
  {

    if(dob.value.length==0|| dob.value.length<=mq||dob.value.length>=my)
    {
      alert('Invalid age')
    }

  }

  function reside(mq, my)
  {

    if(residence.value.length==0|| residence.value.length<=mq||residence.value.length>=my)
    {
      alert('Invalid length')
    }

  }
  function alphabet(placeOfResidence) {
    var letters = /^[a-zA-Z][a-zA-Z\s]*$/;
    if (placeOfResidence.value.match(letters)) {
        placeOfResidence.style.border = '2px solid green'
        return true;
    }
    else {
        document.getElementById('p4').innerText = "This field is required";
        placeOfResidence.style.border = '2px solid red'
        placeOfResidence.focus();
        return false;
    }
 }

  function work(mq, my)
  {

    if(job.value.length==0|| job.value.length<=mq||job.value.length>=my)
    {
      alert('Invalid length')
    }

  }
  function alphabet(occupation) {
    var letters = /^[a-zA-Z][a-zA-Z\s]*$/;
    if (occupation.value.match(letters)) {
        occupation.style.border = '2px solid green'
        return true;
    }
    else {
        document.getElementById('p5').innerText = "This field is required";
        occupation.style.border = '2px solid red'
        occupation.focus();
        return false;
    }
 }

  function country(mq, my)
  {

    if(origin.value.length==0|| origin.value.length<=mq||origin.value.length>=my)
    {
      alert('Invalid length')
    }

  }
  function alphabet(nationality) {
    var letters = /^[a-zA-Z][a-zA-Z\s]*$/;
    if (nationality.value.match(letters)) {
        nationality.style.border = '2px solid green'
        return true;
    }
    else {
        document.getElementById('p6').innerText = "This field is required";
        nationality.style.border = '2px solid red'
        nationality.focus();
        return false;
    }
 }

  if (alphabet(surname)) {

  }
  if (alphabet(givenname)) {

  }
  if (alphabet(placeOfResidence)) {

  }
  if (alphabet(occupation)) {

  }
  if (alphabet(nationality)) {

  }
  if(uid(1,16))
    {
      
    } 
  if(namegiven(1,16))
    {
      
    }
  if(age(1,150))
    {
      
    }
  if(reside(1,20))
    {
      
    }
  if(work(5,50))
    {
      
    }
  if(country(5,20))
    {
      
    }
}
