function getFormvalue() {
    //Write your code here
	var firstName = document.getElementById('form1').elements['fname'].value;
    var lastName = document.getElementById('form1').elements['lname'].value;
    
    // Concatenate first and last name
    var fullName = firstName + ' ' + lastName;
    
    // Display the full name using alert
    alert(fullName);
    
    // Prevent the form from submitting and refreshing the page
    return false;
}
