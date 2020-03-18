//Devon Kooker

//Validation2 functions page

//Checks if info is correct and then goes to next page
function validate2() {
    valCheck = true;
	
	//Checks if form items are correct
    var emailResult = emailCheck(document.forms["validationForm"]["email"].value);
	var phoneResult = phoneCheck(document.forms["validationForm"]["phone"].value);
	var addressResult = addressCheck(document.forms["validationForm"]["adress"].value);
	
	
	//Selects proper image according to the results
    var image1 = getImage(Boolean(emailResult), "email");
	var image2 = getImage(Boolean(phoneResult), "phone");
	var image3 = getImage(Boolean(addressResult), "address");
	
	
	//Selects proper notification according to the results
    var labelNotifyFirst=getNotification(Boolean(emailResult), "email");
	var labelNotifyLast=getNotification(Boolean(phoneResult), "phone");
	var labelNotifyaddress=getNotification(Boolean(addressResult), "address");
	
	
	//appends items
    document.getElementById("email").appendChild(image1);
    document.getElementById("email").appendChild(labelNotifyFirst);
	
	document.getElementById("phone").appendChild(image2);
    document.getElementById("phone").appendChild(labelNotifyLast);
	
	document.getElementById("address").appendChild(image3);
    document.getElementById("address").appendChild(labelNotifyaddress);
	
	//enters next page if all form items are checked
	if(emailResult == true && phoneResult == true && addressResult == true){
		setTimeout(function(){alert( "Congrats, Your info has been sent!");},800);

	}

}

function getNotification(bool, ID) {
    var label = document.getElementById("labelNotify" + ID);
    if (label == null) {
        label = document.createElement("LABEL");
        label.id = "labelNotify" + ID;
        // label.className = "errorMessage";
        label.setAttribute( 'class', 'errorMessage' );
      }

	  switch(ID) {
		  case "email":
			 label.innerHTML = bool ? "" : "Must be in the form xxx@xxxx.xxx should be alphanumeric";
			break;
		  case "phone":
			 label.innerHTML = bool ? "" : "Must be in the form xxx-xxx-xxxx or xxxxxxxxxx. x should be numeric";
			break;
		  case "address":
			 label.innerHTML = bool ? "" : "Must be in the form of city & state. example: Ames,IA";
			break;
	    }
	  
    return label;
}

function getImage(bool, ID) {
    var image = document.getElementById("image" + ID);
    if (image == null) {
        image = new Image(15, 15);
        image.id = "image" + ID;
    }
    image.src = bool ? './correct.png' : './wrong.png';
    return image;
}

function emailCheck(email) {
    atSplit = email.split('@');
    if (atSplit.length == 2 && alphaNumCheck(atSplit[0])) {
        periodSplit = atSplit[1].split('.')
        if (periodSplit.length == 2 && alphaNumCheck(periodSplit[0] + periodSplit[1])) {
            return true;
        }
    }
    valCheck = false;
    return false;
}

function phoneCheck(phone) {
    var phoneNumberPattern1 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
	var phoneNumberPattern2 = /^\d{1,10}$/
    if (phoneNumberPattern1.test(phone) || phoneNumberPattern2.test(phone) && phone.length == 9 ) {
         return true;  
    }
    valCheck = false;
    return false;
}

function addressCheck(address) {
    atSplit = address.split(',');
    var cityPattern = /^[a-zA-Z]*$/i;
	var statePattern = /^\D{1,2}$/
    if (atSplit.length == 2 && cityPattern.test(atSplit[0]) && statePattern.test(atSplit[1]) ) {
         return true;  
    }
    valCheck = false;
    return false;
}

function alphaNumCheck(entry) {
    let regex = /^[a-zA-Z0-9]*$/i;
    if (entry != null && entry.match(regex)) {
        return true;
    } else {
        return false;
    }
}






