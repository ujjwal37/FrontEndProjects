 var signup = document.getElementById('signup')
      signup.addEventListener('click',opensign);
      opensign=()=>{
          window.location = "./sign.html";
      }


var hotelbutton = document.getElementById('hotel')
hotelbutton.addEventListener('click',oyoroom);
 function oyoroom(){
      window.location = "https://www.oyorooms.com/?utm_source=Social_O_web&utm_medium=176&utm_content=102ee099574fe9483a38433eaee825&utm_term=10230410d931bf91230231927d140f";
 }
 var placeholderbtn = document.getElementById('placeholder');
 placeholderbtn.addEventListener('click', maps);
 function maps(){
      window.location = "https://www.googlemaps.com";
 }
 var busbtn = document.getElementById('Bus');
 busbtn.addEventListener('click',redbus);

function redbus(){
    window.location = "https://www.redbus.in";
}

var restaurntbtn = document.getElementById('dishes');
restaurntbtn.addEventListener('click',showrestrnt);
function showrestrnt(){
    window.location ="https://www.eazydiner.com/jaipur";
}

var confirm = document.getElementById('submit');
confirm.addEventListener('click' ,display);

function display(){
    var msg1 = document.getElementById('userfirstname').value;
    document.getElementById('data').innerHTML = "hel";

}

