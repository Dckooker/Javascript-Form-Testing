//Devon Kooker

//Validation1 functions page

//Checks if info is correct and then goes to next page
function validate1() {
    valCheck = true;
	
	//Checks if form items are correct
    var firstNameResult = checkTextBox(document.forms["validationForm"]["firstName"].value);
	var lastNameResult = checkTextBox(document.forms["validationForm"]["lastName"].value);
	var genderResult = checkDropdown(document.forms["validationForm"]["Gender"].options[document.forms["validationForm"]["Gender"].selectedIndex].value);
	var stateResult = checkDropdown(document.forms["validationForm"]["State"].options[document.forms["validationForm"]["State"].selectedIndex].value);
	
	//Selects proper image according to the results
    var image1 = getImage(Boolean(firstNameResult), "firstName");
	var image2 = getImage(Boolean(lastNameResult), "lastName");
	var image3 = getImage(Boolean(genderResult), "Gender");
	var image4 = getImage(Boolean(stateResult), "State");
	
	//Selects proper notification according to the results
    var labelNotifyFirst=getNotification(Boolean(firstNameResult), "firstName");
	var labelNotifyLast=getNotification(Boolean(lastNameResult), "lastName");
	var labelNotifyGender=getNotification(Boolean(genderResult), "Gender");
	var labelNotifyState=getNotification(Boolean(stateResult), "State");
	
	//appends items
    document.getElementById("firstName").appendChild(image1);
    document.getElementById("firstName").appendChild(labelNotifyFirst);
	
	document.getElementById("lastName").appendChild(image2);
    document.getElementById("lastName").appendChild(labelNotifyLast);
	
	document.getElementById("Gender").appendChild(image3);
    document.getElementById("Gender").appendChild(labelNotifyGender);
	
	document.getElementById("State").appendChild(image4);
    document.getElementById("State").appendChild(labelNotifyState);
	
	//enters next page if all form items are checked
	if(firstNameResult == true && lastNameResult == true && genderResult == true && stateResult == true){
	setTimeout(function(){location.replace("validation2.html");},1050);

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
		  case "firstName":
			 label.innerHTML = bool ? "" : "First Name must contain only alphabetic or numeric characters!";
			break;
		  case "lastName":
			 label.innerHTML = bool ? "" : "Last Name must contain only alphabetic or numeric characters!";
			break;
		  case "Gender":
			 label.innerHTML = bool ? "" : "A Gender is Required!";
			break;
		  case "State":
			 label.innerHTML = bool ? "" : "A State is Required!";
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

function checkTextBox(text) {
    if (text.length < 1) {
		valCheck = false;
        return false;
    }
    return true;
}

function checkDropdown(selectedItem) {
    if (selectedItem.includes("Select")) {
		valCheck = false;
        return false;
    }
    return true;
}




