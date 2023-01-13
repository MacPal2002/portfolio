document.addEventListener("DOMContentLoaded", ()=>{
    var aboutme = document.querySelector('#aboutme');
    var skills = document.querySelector('#skills');
    var contact = document.querySelector('#contact');
    var aboutme_li = document.querySelector('#aboutme-li');
    var skills_li = document.querySelector('#skills-li');
    var contact_li = document.querySelector('#contact-li');

    aboutme_li.addEventListener('click', ()=>{
        aboutme.style.display = "block";
        skills.style.display = "none";
        contact.style.display = "none";
    });
    skills_li.addEventListener('click', ()=>{
        aboutme.style.display = "none";
        skills.style.display = "block";
        contact.style.display = "none";
    });
    contact_li.addEventListener('click', ()=>{
        aboutme.style.display = "none";
        skills.style.display = "none";
        contact.style.display = "block";
    });
});