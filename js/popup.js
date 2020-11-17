export let popupLoginHiding = {
    loginForm: `
    <div id="popup-main">
        <div id="popup-log">
            <form id="popup-form-log" name="popup-form-log" class="popup-form" action="#" method="post">
                <img id="popup-close" src="img/close.png" alt="X">
                <h2 class="popup-h2">Login Form</h2>
                <hr class="popup-hr">
                <div class="popup-div-img">
                    <img class="popup-img" src="img/email.png" alt="">
                    <input type="text" id="popup-email" name="popup-email" placeholder="Email" autocomplete="on">
                </div>
                <div class="popup-div-img">
                    <img class="popup-img" src="img/password.png" alt="">
                    <input type="password" id="popup-password" name="popup-password" class="popup-pass" placeholder="Password" autocomplete="current-password">
                </div>
                <a id="popup-submit" href="#">Login</a>
            </form>
        </div>
    </div>
    `,
    registerForm: `
    <div id="popup-main">
        <div id="popup-log">
            <form id="popup-form-reg" name="popup-form-reg" class="popup-form" action="#" method="post">
                <img id="popup-close" src="img/close.png" alt="X">
                <h2 class="popup-h2">Register Form</h2>
                <hr class="popup-hr">
                <div class="popup-div-img">
                    <img class="popup-img" src="img/email.png" alt="">
                    <input type="text" id="popup-email" name="popup-email" placeholder="Email" autocomplete="on">
                </div>
                <div class="popup-div-img">
                    <img class="popup-img" src="img/password.png" alt="">
                    <input type="password" id="popup-password-1" name="popup-password-1" class="popup-pass" placeholder="Password" autocomplete="current-password">
                </div>
                <div class="popup-div-img">
                    <img class="popup-img" src="img/password.png" alt="">
                    <input type="password" id="popup-password-2" name="popup-password-2" class="popup-pass" placeholder="Confirm Password" autocomplete="current-password">
                </div>
                <a id="popup-submit" href="#">Register</a>
            </form>
        </div>
    </div>
    `,

    divTopBar: document.getElementById('top-bar-login'),

    loginButton: document.getElementById('popup-login'),

    logButtonAddListener: function () {
        popupLoginHiding.loginButton.addEventListener('click', this.divLoginShow);
    },


    registerButton: document.getElementById('popup-register'),

    regButtonAddListener: function () {
        popupLoginHiding.registerButton.addEventListener('click', this.divRegisterShow);
    },


    // Validating Empty Field
    // function checkEmpty() {
    //     if (document.getElementById('popup-email').value === "" || document.getElementById('popup-password').value === "") {
    //         alert("Fill All Fields !");
    //     } else {
    //         document.getElementById('popup-form').submit();
    //         alert("Form Submitted Successfully...");
    //     }
    // }


    //Function To Display Popup
    divLoginShow: function () {
        popupLoginHiding.divTopBar.insertAdjacentHTML('beforebegin', popupLoginHiding.loginForm);
        document.getElementById('popup-main').style.display = "block";

        let closeImg = document.getElementById('popup-close');
        closeImg.addEventListener('click', popupLoginHiding.removeForm);
    },

    divRegisterShow: function () {
        popupLoginHiding.divTopBar.insertAdjacentHTML('beforebegin', popupLoginHiding.registerForm);
        document.getElementById('popup-main').style.display = "block";

        let closeImg = document.getElementById('popup-close');
        closeImg.addEventListener('click', popupLoginHiding.removeForm);
    },

    //Function to Hide Popup
    removeForm: function () {
        let loginForm = document.getElementById('popup-main');
        loginForm.style.display = "none";
        loginForm.remove();
    }
};