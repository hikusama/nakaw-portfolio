const burger_display = document.getElementById('burger-display');
const x_display = document.getElementById('x-display');
const display_flex_media = document.getElementById('display-flex-media');
burger_display.addEventListener('click', function(){
    burger_display.style.display = 'none';
    x_display.style.display = 'flex';
    if(display_flex_media.style.display = 'none'){
        display_flex_media.style.display = 'flex'
    }else{
        display_flex_media.style.display = 'none'
    }
});
x_display.addEventListener('click', function(){
    burger_display.style.display = 'flex';
    x_display.style.display = 'none';
    if(display_flex_media.style.display = 'flex'){
        display_flex_media.style.display = 'none'
    }else{
        display_flex_media.style.display = 'flex'
    }
});

// CV contents ================================================================
const x_display_cv = document.getElementById('x-display-cv');
const display_no_cv = document.getElementById('display-no-cv');
const display_no_cv_yet = document.getElementById('display-no-cv-yet');
display_no_cv_yet.addEventListener('click', function(){
    display_no_cv.style.display = 'flex';
});
x_display_cv.addEventListener('click', function(){
    display_no_cv.style.display = 'none';
});

// for header ==================================================================
const about_me_button_media = document.getElementById('display-about_me-media');
const projects_button_media = document.getElementById('display-projects-media');
const home_button_media = document.getElementById('display-home-media');
const skills_button_media = document.getElementById('display-skills-media');
const contact_button_media = document.getElementById('display-contact-media');
const display_margin_media = document.getElementById('display-margin');
const display_margin_projects_media = document.getElementById('display-margin-projects');
const display_margin_skills_media = document.getElementById('display-margin-skills');
const display_margin_contact_media = document.getElementById('display-margin-contact');

projects_button_media.addEventListener('click', function() {
    display_flex_media.style.display = 'none';
    burger_display.style.display = 'flex';
    x_display.style.display = 'none';
    display_margin_projects_media.style.display = 'flex';
    display_margin_skills_media.style.display = 'none';
    display_margin_contact_media.style.display = 'none';
    display_margin_media.style.display = 'none';
});
about_me_button_media.addEventListener('click', function() {
    display_flex_media.style.display = 'none';
    burger_display.style.display = 'flex';
    x_display.style.display = 'none';
    display_margin_projects_media.style.display = 'none';
    display_margin_skills_media.style.display = 'none';
    display_margin_contact_media.style.display = 'none';
    display_margin_media.style.display = 'flex';
});
home_button_media.addEventListener('click', function() {
    display_flex_media.style.display = 'none';
    burger_display.style.display = 'flex';
    x_display.style.display = 'none';
    display_margin_projects_media.style.display = 'none';
    display_margin_skills_media.style.display = 'none';
    display_margin_contact_media.style.display = 'none';
    display_margin_media.style.display = 'none';
});
skills_button_media.addEventListener('click', function() {
    display_flex_media.style.display = 'none';
    burger_display.style.display = 'flex';
    x_display.style.display = 'none';
    display_margin_projects_media.style.display = 'none';
    display_margin_skills_media.style.display = 'flex';
    display_margin_contact_media.style.display = 'none';
    display_margin_media.style.display = 'none';
});
contact_button_media.addEventListener('click', function() {
    display_flex_media.style.display = 'none';
    burger_display.style.display = 'flex';
    x_display.style.display = 'none';
    display_margin_projects_media.style.display = 'none';
    display_margin_skills_media.style.display = 'none';
    display_margin_media.style.display = 'none';
});