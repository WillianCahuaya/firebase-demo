var firebase = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

firebase.initializeApp({
	credential: firebase.credential.cert(serviceAccount),
	databaseURL: "https://app-web-fec55.firebaseio.com"
});

var db = firebase.database();

var ref = db.ref("restricted_access/secret_document");
ref.once("value", function (snapshot) {
	console.log(snapshot.val());
});

var personRef = ref.child("person");
personRef.set({
	alanisawesome: {
		name: "Ronald",
		lastname: "Cahuaya",
		dni:"87654321"
	}
});