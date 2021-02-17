function signup() {
	let email = document.getElementById("email").value;
	let password = document.getElementById("password").value;
	let errorElm = document.getElementById("error");
	firebase.auth().createUserWithEmailAndPassword(email, password)
		.catch(error => {
			switch (error.code) {
				case ("auth/invalid-email"):
					errorElm.innerText = "Invalid email";
					break;
				case ("auth/weak-password"):
					errorElm.innerText = "Password too short";
					break;
				case ("auth/email-already-in-use"):
					errorElm.innerText = "An account with that email already exists";
					break;
				default:
					errorElm.innerText = "Unknown error: " + error.message;
					console.error(error.code, error.message);
			}
		});
}