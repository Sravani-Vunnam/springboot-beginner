function displayUser(user)
{
   
    // DOM Manipulation
    document.getElementById("userImage").src = user.image;
    document.getElementById("userGender").textContent = user.gender;
    document.getElementById("userName").textContent = user.name;
}
function getAndDisplayNextRandomUser()
{
     fetch("https://randomuser.me/api")   
        .then(function(res)
        {
           return res.json();
        })

    .then(function(data)
    {
        var userData = data.results[0];
        var myUserObject ={};
        myUserObject.name =userData.name.title+" "+userData.name.first+" "+userData.name.first+" ";
        myUserObject.gender=userData.gender;
        myUserObject.image=userData.picture.large;
        displayUser(myUserObject);
    })
    .catch(function(err)
     {

    })
     
}