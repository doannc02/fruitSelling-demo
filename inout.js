// const iconLoading = document.getElementById("loading");
// const showLoading = () => {
//   iconLoading.style.display = "flex"
// }
// const hideLoading = () => {
//   iconLoading.style.display = "none";
// }
  

 /* load */
 function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 1000);
}

window.onload = fadeOut;

                  

function signup(e) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = {
      username: username,
      email: email,
      password: password,
    };
    var json = JSON.stringify(user);
    localStorage.setItem(username, json);
    alert("Đăng kí thành công!");
  }
  function login(e) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    if (!user) {
      alert("Vui lòng nhập username email và password!");
    } else if (
      
      username == data.username &&
      email == data.email &&
      password == data.password
    ) {
      
     
        alert("Đăng nhập thành công!");
        window.location.href = "index.html";
       loader();
       fadeOut();
       window.onload = fadeOut
       
      
    }

      else {
      
   
     
        alert("Đăng nhập thất bại");
      }
      

      }
    