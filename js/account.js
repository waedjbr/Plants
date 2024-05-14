const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const switchText = document.getElementById('switch-text');
const switchLink = document.getElementById('switch-link');

switchLink.addEventListener('click', () => {
    loginForm.classList.toggle('hidden');
    signupForm.classList.toggle('hidden');
    if (loginForm.classList.contains('hidden')) {
        switchText.textContent = "Already have an account? ";
        switchLink.textContent = "Login here";
    } else {
        switchText.textContent = "Don't have an account? ";
        switchLink.textContent = "Sign up here";
    }
});

function verifyusername(){
  var test=true;
  var username = document.getElementById("signup-username").value;
  var err1 =document.getElementById("err1");
  var msg="Username is invalid.";
  if(isValidUsername(username)){
    err1.innerHTML="";
    
  }
  else{
    err1.innerHTML=msg;
    err1.style.color="red";
    test=false;
  }
  return test;
}
function verifypassword(){
  var test= true;
  var password = document.getElementById("signup-password").value;
  var err2 =document.getElementById("err2");
  var msg="Password is not strong enough.";
  if(isStrongPassword(password)){
    err2.innerHTML="";
  }
  else{
    err2.innerHTML=msg;
    err2.style.color="red";
    test=false;
  }
  return test;
}


//to check if password is strong
function isStrongPassword(password) {
  const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return strongPasswordRegex.test(password);
}

//to validate username
function isValidUsername(username) {
  const usernameRegex = /^[a-zA-Z0-9_]{3,}$/;
  return usernameRegex.test(username);
}

