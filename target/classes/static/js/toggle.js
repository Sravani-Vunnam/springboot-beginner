console.log("Hello from JS");

var users = [
    {"name" : "John", "gender" : "Male", "img" : "img/john_doe.png"},
    {"name" : "Jane", "gender" : "Female", "img" : "img/jane_doe.png"}
];

var currentUserIndex = 1;

function toggleCard(){
    currentUserIndex =1 - currentUserIndex;
    var nextUser = users[currentUserIndex];
    displayUser(nextUser);
}

function displayUser(user)
{
   
    // DOM Manipulation
    document.getElementById("userImage").src = user.img;
    document.getElementById("userGender").innerHTML = user.gender;
    document.getElementById("userName").innerHTML = user.name;
}