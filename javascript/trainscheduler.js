 //$(document).ready(function(){
 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAz5lHNJIQ--WELsSK7wbKFs5acjGKp4qg",
    authDomain: "timesheet-15bef.firebaseapp.com",
    databaseURL: "https://timesheet-15bef.firebaseio.com",
    projectId: "timesheet-15bef",
    storageBucket: "",
    messagingSenderId: "194097208977"
  };
  firebase.initializeApp(config);


 // Variable to reference database

 	var database = firebase.database();

 // Initial values

 	var trainName = "";
 	var destination ="";
 	var firstTrainTime = "";
 	var frequency = "";

 // Button Click

 	$("submit").on("click", function(event){
 		event.preventDefault();


 // Variables in text box

 	trainName = $("#trainName-input").val().trim();
 	destination = $("#destination-input").val().trim();
 	firstTrainTime = $("#firstTrainTime-input").val().trim();
 	frequency = $("#frequency-input").val().trim();


 // Handling to push

 	database.ref().push({
 		trainName: train name,
 		destination: destination,
 		firstTrainTime: first train time,
 		frequency: frequency
 		dateAdded: firebase.database.ServerValue.TIMESTAMP
 		});

 	});

data.ref().on("child-added", function(childSnapshot){

// Console log values

	console.log(childSnapshot).val().trainName;
	console.log(childSnapshot).val().destination;
	console.log(childSnapshot).val().firstTrainTime;
	console.log(childSnapshot).val().frequency;

// Convert train time
	//var frequency = parseInt(frequency);

	//var Converted = moment(childSnapshot.val().time, 'HH:mm').subtract(1, 'years');
// Full list of items
$("#full-member-list").append("div class='well'><span id='train name'> " + childSnapshot.val().trainName
	" </span><span> id= 'destination'> " + childSnapshot.val().destination +
	" </span><span> id= 'first train time'> " + childSnapshot.val().firstTrainTime +
	" </span><span> id= 'frequency'>" + childSnapshot.val().frequency "</span></div>");


// Handle the errors

}, function.ref().orderByChild("dateAdded").limitToLast(1).on("child-added", function(snapshit){
	var cvn= snapshot.val();

// Change the HTML
$("#trainName-display").html(cvn.trainName);
$("#destination-display").html(cvn.destination);
$("#firstTrainTime-display").html(cvn.firstTrainTime);
$("#frequency-display").html(cvn.frequency);





});

