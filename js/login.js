// Javascript Code for the Login page//

function clicked() {
	var user = document.getElementById('username');
	var pass = document.getElementById('password');

	var correctuser = "user1";
	var correctpassword = "12345";

	if(user.value == correctuser) {

		if(pass.value == correctpassword) {

			window.alert("Logged in as " + user.value);
			window.open("index.html");

		} else {

			window.alert("Incorrect Username or Password!");
		}

	} else {

		alert("Incorrect Username or Password!");

	}

}

// Javascript for the Contact page//

/* Here I tried to addd some javascrript to the contact form but couldn't make it work.

function clicked() {
	var first = document.getElementById('firstname');
	var sur = document.getElementById('surname');
	var email = document.getElementById('email');
	var phone = document.getElementById('phone');
	var comm = document.getElementById('comments');

		var correctfirst = "";
		var correctsur = "";
		var correctemail = "";
		var correctphone = "";
		var correctcomm = "";

		if(first.value == correctfirst); {
			if(sur.value == correctsur); {
				if(email.value == correctemail); {
					if(phone.value == correctphone); {
						if(comm.value == correctcomm); {

							window.alert("Thank you! Your feedback is greatly appreciated");
						} else {
							window.alert("Please fill in all fields");
						}
					} 
				}
			}
		}
} 

*/