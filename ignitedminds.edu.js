function toggleLanguage() {
    var engContent = document.getElementById("english-content");
    var telContent = document.getElementById("telugu-content");
    
    if (engContent.classList.contains("hidden")) {
        engContent.classList.remove("hidden");
        telContent.classList.add("hidden");
    } else {
        engContent.classList.add("hidden");
        telContent.classList.remove("hidden");
    }
}


function openPopup() {
    document.getElementById("loginPopup").style.display = "block";
}

function closePopup() {
    document.getElementById("loginPopup").style.display = "none";
}

function submitLogin() {
    var studentID = document.getElementById("studentID").value;
    var key = document.getElementById("key").value;

    if (studentID === "" || key === "") {
        alert("Please enter both Student ID and Key.");
    } else {
        alert("Login Successful!");
        closePopup();
    }
}

function openPopupr() {
    document.getElementById("registerPopup").style.display = "block";
}

/*function openForm() {
    window.open("https://forms.gle/H5vuMHFY1wntJkcL6", "_blank", "width=600,height=700");
    closePopupr();
}*/

function closePopupr() {
    document.getElementById("registerPopup").style.display = "none";
}

function openPopupcu() {
    document.getElementById("contactuspopup").style.display = "block";
}
function closePopupcu() {
    document.getElementById("contactuspopup").style.display = "none";
}