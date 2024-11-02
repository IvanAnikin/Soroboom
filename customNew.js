
window.onload = function(){

  document.getElementById("sendEmailBtn1").addEventListener("click", sendForm(1));
  document.getElementById("sendEmailBtn2").addEventListener("click", sendForm(2));
  document.getElementById("sendEmailBtn3").addEventListener("click", sendForm(3));
  document.getElementById("sendEmailBtn4").addEventListener("click", sendForm(4));
  document.getElementById("sendEmailBtn5").addEventListener("click", sendForm(5));

  function sendForm(elementId) {
    const name = document.getElementById(`'senderName${elementId}'`);
    const phone = document.getElementById(`'senderPhone${elementId}'`);
    const email = document.getElementById(`'senderEmail${elementId}'`);
    console.log(name, '\n', phone, '\n' , email);
    const data = JSON.stringify({
      "Messages": [{
        "From": {"Email": email, "Name": name},
        "To": [{"Email": 'danila.s.anikin@gmail.com', "Name": 'Soroboom Praha'}],
        "Subject": 'Soroboom form',
        "TextPart": `"Name: ${name} \n Phone number: ${phone} \n Email: ${email}"`
      }]
    });

    const config = {
      method: 'post',
      url: 'https://api.mailjet.com/v3.1/send',
      data: data,
      headers: {'Content-Type': 'application/json'},
      auth: {username: 'beda647891789a0b751652e67f556108', password: 'e00806db18973c1ba4dd4a14545f21c4'},
    };

    return axios(config)
      .then(function () {
        const loc = window.location.pathname;
        if(loc == '/') {
          window.location.pathname = '/diky.html';
        } else if (loc == '/ru.html') {
          window.location.pathname = '/spasibo.html';
        } else if (loc == '/uk.html') {
          window.location.pathname = '/dyakuyemo.html';
        } else if (loc == 'en.html') {
          window.location.pathname = '/thankingPage.html';
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  GetCallButton1 = document.getElementById("formButton");  //getcallbtn1
  GetCallForm1 = document.getElementById("form");  //getcallform1
  GetCallButton2 = document.getElementById("formButtonPC"); //getcallbtn2 
  GetCallForm2 = document.getElementById("formPC");  //getcallform2 

  LanguageSwitchButton = document.getElementById("languageSelectorButton"); //navlanguage
  LanguagesForm = document.getElementById("languageSelector"); //languagesForm

  formatsButton = document.getElementById("scrollformatsOfEducation");
  formatsButton2 = document.getElementById("scrollformatsOfEducation2");
  imagesButton = document.getElementById("scrollImagesPage");
  imagesButton2 = document.getElementById("scrollImagesPage2");
  getButton = document.getElementById("scrollwhatWillYouGet");
  getButton2 = document.getElementById("scrollwhatWillYouGet2");

  timetableButton1 = document.getElementById("scrollTimetable1");
  timetableButton2 = document.getElementById("scrollTimetable2");
  timetableButton3 = document.getElementById("scrollTimetable3");

  timetableButton1.onclick = function () {
    location.href = "https://schedule.soroboom.cz/timetable";
  };
  timetableButton2.onclick = function () {
      location.href = "https://schedule.soroboom.cz/timetable";
  };
  timetableButton3.onclick = function () {
      location.href = "https://schedule.soroboom.cz/timetable";
  };

  formatss = document.getElementById("formatsOfEducation");
  slidespages = document.getElementById("slideImagesPage");
  whatwillyougetpage = document.getElementById("whatWillYouGet");

  formatsButton.onclick = function() {
    formatss.scrollIntoView();
  };
  formatsButton2.onclick = function() {
    formatss.scrollIntoView();
  };
  imagesButton.onclick = function() {
    slidespages.scrollIntoView();
  };
  imagesButton2.onclick = function() {
    slidespages.scrollIntoView();
  };
  getButton.onclick = function() {
    whatwillyougetpage.scrollIntoView();
  };
  getButton2.onclick = function() {
    whatwillyougetpage.scrollIntoView();
  };

  LanguageSwitchMobileButton = document.getElementById("languageSelectorButtonMobile");
  LanguagesMobileForm = document.getElementById("languageSelectorMobile");
  
  GetCallButton2Mobile = document.getElementById("formButtonMobile"); 
  GetCallForm2Mobile = document.getElementById("formMobile");

  MenuHamburger = document.getElementById("menuHamburgerMobile"); 
  MobileMenuInside = document.getElementById("menuMobile");  

  ruLanguage = document.getElementById("ruPC");   
  enLanguage = document.getElementById("enPC");   
  czLanguage = document.getElementById("czPC");   
  uaLanguage = document.getElementById("uaPC");  

  ruLanguageM = document.getElementById("ruMobile");   
  enLanguageM = document.getElementById("enMobile");   
  czLanguageM = document.getElementById("czMobile");   
  uaLanguageM = document.getElementById("uaMobile");

  ruLanguage.onclick = function () {
      location.href = "/ru.html";
  };enLanguage.onclick = function () {
    location.href = "/en.html";
  };czLanguage.onclick = function () {
    location.href = "/";
  };uaLanguage.onclick = function () {
    location.href = "/uk.html";
  };
  ruLanguageM.onclick = function () {
      location.href = "/ru.html";
  };enLanguageM.onclick = function () {
    location.href = "/en.html";
  };czLanguageM.onclick = function () {
    location.href = "/";
  };uaLanguageM.onclick = function () {
    location.href = "/uk.html";
  };

  GetCallButton1.onclick = function() {
    if(GetCallForm1.style.display == "flex"){
      GetCallForm1.style.display = "none";
    }else{ GetCallForm1.style.display = "flex"; }
  };
  GetCallButton2.onclick = function() {    
    if(GetCallForm2.style.display == "flex"){
      GetCallForm2.style.display = "none";
    }else{ GetCallForm2.style.display = "flex"; }
  };

  LanguageSwitchButton.onclick = function() {
    if(LanguagesForm.style.display == "block"){
      LanguagesForm.style.display = "none";
    }else{ LanguagesForm.style.display = "block"; }
  };
  LanguageSwitchMobileButton.onclick = function() {
    if(LanguagesMobileForm.style.display == "block"){
      LanguagesMobileForm.style.display = "none";
    }else{ LanguagesMobileForm.style.display = "block"; }
  };

  GetCallButton2Mobile.onclick = function() {    
    if(GetCallForm2Mobile.style.display == "block"){
      GetCallForm2Mobile.style.display = "none";
    }else{ GetCallForm2Mobile.style.display = "block"; }
  };

  MenuHamburger.onclick = function() {    
    if(MobileMenuInside.style.display == "flex"){
      MobileMenuInside.style.display = "none";
    }else{ MobileMenuInside.style.display = "flex"; }
  };
}
