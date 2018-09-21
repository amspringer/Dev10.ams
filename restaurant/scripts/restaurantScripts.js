function validateForm(){
	var name = document.forms["info"]["name"].value;
	var email = document.forms["info"]["email"].value;
	var phone = document.forms["info"]["phone"].value;

	
	//name
	if (name == "") {
	alert("Please enter your name.");
	return false;
	}
	
	//email address
	if (email == "") {
	alert("Please enter your email address.");
	return false;
	}
	
	//phone number
	if (phone == "" || phone.length !== 10) {
	alert("Please enter your phone 10-digit number, area code first.");
	return false;
	}
		
	//on sumitt
	else {
	alert("Thank you! Someone will be in contact.")
	}
	
}