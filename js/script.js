var btnLogin = document.querySelector(".btn-login");
var modalForm = document.querySelector(".modal-login");
var closeForm = modalForm.querySelector(".modal-login-close");
var openFeedback = document.querySelector("#btn-feedback");
var closeFeedback = document.querySelector(".modal-cancel-btn");
var feedbackForm = document.querySelector(".modal-feedback");

	btnLogin.addEventListener("click", function(event) {
        event.preventDefault();
        modalForm.classList.add("open");
        modalForm.classList.add("open-login-form");
        modalForm.classList.remove("close");
      });
	closeForm.addEventListener("click", function(event) {
		event.preventDefault();
		modalForm.classList.remove("open");
        modalForm.classList.add("close");
	});
	
	modalForm.addEventListener("submit", loginUser);

    openFeedback.addEventListener("click", function(event){
        event.preventDefault();
        feedbackForm.classList.remove("close");
        feedbackForm.classList.add("open");
        feedbackForm.classList.add("open-feedback");
    });
    
    closeFeedback.addEventListener("click", function(event){
         event.preventDefault();
	     feedbackForm.classList.remove("open");
         feedbackForm.classList.add("close");
        
        
    });
    function loginUser(){
		event.preventDefault();
		/*Закрываем форму*/
		modalForm.classList.remove("open");
		modalForm.classList.add("close");
		/*Заносим логин и выводим его на сайте*/
        var user = document.getElementById('login').value;
		document.getElementById('loginUser').innerHTML = user;
		/*Убираем кнопки входа и регистрации*/
		document.getElementById("no-loginUserBlock").classList.add("hidden");
		document.getElementById("loginUserBlock").classList.add("visible");
        };