var usern= ['vasu','deva','vasudeva','devavasu','devasu'];
var passw= ['vasu123','deva123','vasudeva123','devavasu123','devasu123'];

var activeUser;
// var dail="<?xml version='1.0'?><usern>vasu,deva,vasudeva,devavasu,devasu</usern><passw>vasu@123,deva@123,vasudeva@123,devavasu@123,devasu@123</passw>"
function init(){
    if((localStorage.getItem('home') === 'bill' && sessionStorage.getItem('home')=== 'bill')){

        location.href ='Home.html'
    }
}

function Checklogin(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("userpass").value;
    // console.log(username);
    // console.log(password);
    // var myParser= new DOMParser();
    // var myXml=myParser.parseFromString(dail,'text/xml');
    // var userObj=myXml.getElementsByTagName("usern");
    // console.log(userObj[0].childNodes[0].nodeValue);

    if(usern.includes(username)){
        var i=usern.indexOf(username);
        // console.log(password);
        if(passw[i] == password){
            activeUser=usern.indexOf(username)+1;
            localStorage.setItem('activeu',activeUser)
            localStorage.setItem("home",'bill');
            sessionStorage.setItem("home",'bill');
            location.href="Home.html"
        }
        else{
            alert("Password is worng");
        }    
    }
    else{
    alert("Enter the Vaild Username");
    }
}