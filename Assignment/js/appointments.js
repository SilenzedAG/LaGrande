function updateto1() {
    document.getElementById("dateField").value="Thursday, 1 August 2019"
}
function updateto2() {
    document.getElementById("dateField").value="Friday, 2 August 2019"
}
function updateto3() {
    document.getElementById("dateField").value="Saturday, 3 August 2019"
}
function updateto4() {
    document.getElementById("dateField").value="Sunday, 4 August 2019"
}
function updateto5() {
    document.getElementById("dateField").value="Monday, 5 August 2019"
}
function updateto6() {
    document.getElementById("dateField").value="Tuesday, 6 August 2019"
}
function updateto7() {
    document.getElementById("dateField").value="Wednesday, 7 August 2019"
}
function updateto8() {
    document.getElementById("dateField").value="Thursday, 8 August 2019"
}
function updateto9() {
    document.getElementById("dateField").value="Friday, 9 August 2019"
}
function updateto10() {
    document.getElementById("dateField").value="Saturday, 10 August 2019"
}
function updateto11() {
    document.getElementById("dateField").value="Sunday, 11 August 2019"
}
function updateto12() {
    document.getElementById("dateField").value="Monday, 12 August 2019"
}
function updateto13() {
    document.getElementById("dateField").value="Tuesday, 13 August 2019"
}
function updateto14() {
    document.getElementById("dateField").value="Wednesday, 14 August 2019"
}
function updateto15() {
    document.getElementById("dateField").value="Thursday, 15 August 2019"
}
function updateto16() {
    document.getElementById("dateField").value="Friday, 16 August 2019"
}
function updateto17() {
    document.getElementById("dateField").value="Saturday, 17 August 2019"
}
function updateto18() {
    document.getElementById("dateField").value="Sunday, 18 August 2019"
}
function updateto19() {
    document.getElementById("dateField").value="Monday, 19 August 2019"
}
function updateto20() {
    document.getElementById("dateField").value="Tuesday, 20 August 2019"
}
function updateto21() {
    document.getElementById("dateField").value="Wednesday, 21 August 2019"
}
function updateto22() {
    document.getElementById("dateField").value="Thursday, 22 August 2019"
}
function updateto23() {
    document.getElementById("dateField").value="Friday, 23 August 2019"
}
function updateto24() {
    document.getElementById("dateField").value="Saturday, 24 August 2019"
}
function updateto25() {
    document.getElementById("dateField").value="Sunday, 25 August 2019"
}
function updateto26() {
    document.getElementById("dateField").value="Monday, 26 August 2019"
}
function updateto27() {
    document.getElementById("dateField").value="Tuesday, 27 August 2019"
}
function updateto28() {
    document.getElementById("dateField").value="Wednesday, 28 August 2019"
}
function updateto29() {
    document.getElementById("dateField").value="Thursday, 29 August 2019"
}
function updateto30() {
    document.getElementById("dateField").value="Friday, 30 August 2019"
}
function updateto31() {
    document.getElementById("dateField").value="Saturday, 31 August 2019"
}
function updateto720s() {
    document.getElementById("carselected").value="McLaren 720S"
}
function updatetop1() {
    document.getElementById("carselected").value="McLaren P1"
}
function updatetobuycar() {
    document.getElementById("purposeselected").value="(Car Purchase)"
}
function updatetoenquire() {
    document.getElementById("purposeselected").value="(Car Enquiry)"
}
var header = document.getElementById("days");
var btns = header.getElementsByClassName("days");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("activeDay2");
    if (current.length > 0) { 
    current[0].className = current[0].className.replace(" activeDay2", "");
    }
    this.className += " activeDay2";
    });
}
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change image every 2 seconds
    }
function changeImage(imgName)
{
image = document.getElementById('theimage');
image.src = imgName;
}
function updatetoBlack() {
    document.getElementById('colorField').value="BLACK"
}
function updatetoWhite() {
    document.getElementById('colorField').value="WHITE"
}
function updatetoOrange() {
    document.getElementById('colorField').value="ORANGE"
}
function updatetoBlue() {
    document.getElementById('colorField').value="BLUE"
}

function submitFormData() {
    var inputDate = document.getElementById("dateField");
    localStorage.setItem("dateField", inputDate.value);
    var inputName = document.getElementById("nameField");
    localStorage.setItem("nameField", inputName.value);
    var inputEmail = document.getElementById("emailField");
    localStorage.setItem("emailField", inputEmail.value);
    var inputNumber = document.getElementById("numberField");
    localStorage.setItem("numberField", inputNumber.value);
    var inputAddress = document.getElementById("addressField");
    localStorage.setItem("addressField", inputAddress.value);
    var inputPostal = document.getElementById("postalField");
    localStorage.setItem("postalField", inputPostal.value);
    var inputPurpose = document.getElementById("purposeselected");
    localStorage.setItem("purposeselected", inputPurpose.value);
    var inputSelectedCar = document.getElementById("carselected");
    localStorage.setItem("selectedcar", inputSelectedCar.value);
    var inputColor = document.getElementById("colorField");
    localStorage.setItem("colorField", inputColor.value)
}