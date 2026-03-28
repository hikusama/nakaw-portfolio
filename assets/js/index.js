const about_me_button = document.getElementById('display-about_me');
const projects_button = document.getElementById('display-projects');
const home_button = document.getElementById('display-home');
const skills_button = document.getElementById('display-skills');
const contact_button = document.getElementById('display-contact');
const display_projects = document.getElementById('display-projects-button');
const display_margin = document.getElementById('display-margin');
const display_margin_projects = document.getElementById('display-margin-projects');
const display_margin_skills = document.getElementById('display-margin-skills');
const display_margin_contact = document.getElementById('display-margin-contact');

display_projects.addEventListener('click', function(){
    display_margin_projects.style.display = 'flex';
    projects_button.style.color = 'rgb(255, 93, 93)';
    projects_button.style.borderBottom = 'solid 2px rgb(255, 93, 93)';

    home_button.style.color = '#fff';
    home_button.style.borderBottom = 'solid 1px transparent';
});
projects_button.addEventListener('click', function() {
    display_margin_projects.style.display = 'flex';
    display_margin_skills.style.display = 'none';
    display_margin_contact.style.display = 'none';
    display_margin.style.display = 'none';

    projects_button.style.color = 'rgb(255, 93, 93)';
    projects_button.style.borderBottom = 'solid 2px rgb(255, 93, 93)';

    about_me_button.style.color = '#fff';
    about_me_button.style.borderBottom = 'solid 1px transparent';

    home_button.style.color = '#fff';
    home_button.style.borderBottom = 'solid 1px transparent';

    skills_button.style.color = '#fff';
    skills_button.style.borderBottom = 'solid 1px transparent';

    contact_button.style.color = '#fff';
    contact_button.style.borderBottom = 'solid 1px transparent';
});
about_me_button.addEventListener('click', function() {
    display_margin_projects.style.display = 'none';
    display_margin_skills.style.display = 'none';
    display_margin_contact.style.display = 'none';
    display_margin.style.display = 'flex';
    about_me_button.style.color = 'rgb(255, 93, 93)';
    about_me_button.style.borderBottom = 'solid 2px rgb(255, 93, 93)';

    projects_button.style.color = '#fff';
    projects_button.style.borderBottom = 'solid 1px transparent';

    home_button.style.color = '#fff';
    home_button.style.borderBottom = 'solid 1px transparent';

    skills_button.style.color = '#fff';
    skills_button.style.borderBottom = 'solid 1px transparent';

    contact_button.style.color = '#fff';
    contact_button.style.borderBottom = 'solid 1px transparent';
});
home_button.addEventListener('click', function() {
    display_margin_projects.style.display = 'none';
    display_margin_skills.style.display = 'none';
    display_margin_contact.style.display = 'none';
    display_margin.style.display = 'none';
    home_button.style.color = 'rgb(255, 93, 93)';
    home_button.style.borderBottom = 'solid 2px rgb(255, 93, 93)';

    about_me_button.style.color = '#fff';
    about_me_button.style.borderBottom = 'solid 1px transparent';

    projects_button.style.color = '#fff';
    projects_button.style.borderBottom = 'solid 1px transparent';

    skills_button.style.color = '#fff';
    skills_button.style.borderBottom = 'solid 1px transparent';

    contact_button.style.color = '#fff';
    contact_button.style.borderBottom = 'solid 1px transparent';
});
skills_button.addEventListener('click', function() {
    display_margin_projects.style.display = 'none';
    display_margin_skills.style.display = 'flex';
    display_margin_contact.style.display = 'none';
    display_margin.style.display = 'none';
    skills_button.style.color = 'rgb(255, 93, 93)';
    skills_button.style.borderBottom = 'solid 2px rgb(255, 93, 93)';

    about_me_button.style.color = '#fff';
    about_me_button.style.borderBottom = 'solid 1px transparent';

    home_button.style.color = '#fff';
    home_button.style.borderBottom = 'solid 1px transparent';

    projects_button.style.color = '#fff';
    projects_button.style.borderBottom = 'solid 1px transparent';

    contact_button.style.color = '#fff';
    contact_button.style.borderBottom = 'solid 1px transparent';
});
contact_button.addEventListener('click', function() {
    display_margin_projects.style.display = 'none';
    display_margin_skills.style.display = 'none';
    display_margin.style.display = 'none';
    contact_button.style.color = 'rgb(255, 93, 93)';
    contact_button.style.borderBottom = 'solid 2px rgb(255, 93, 93)';

    about_me_button.style.color = '#fff';
    about_me_button.style.borderBottom = 'solid 1px transparent';

    home_button.style.color = '#fff';
    home_button.style.borderBottom = 'solid 1px transparent';

    skills_button.style.color = '#fff';
    skills_button.style.borderBottom = 'solid 1px transparent';

    projects_button.style.color = '#fff';
    projects_button.style.borderBottom = 'solid 1px transparent';
});