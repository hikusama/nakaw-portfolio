// button click variables
const fontend = document.getElementById('fontend');
const backend = document.getElementById('backend');
const database = document.getElementById('database');
const devTools = document.getElementById('devTools');
const host = document.getElementById('host');

// Display variables
const display_front_end = document.getElementById('display-front-end');
const display_back_end = document.getElementById('display-back-end');
const display_Database = document.getElementById('display-Database');
const display_devTools = document.getElementById('display-devTools');
const display_HostDev = document.getElementById('display-HostDev');

fontend.addEventListener('click', function(){
    fontend.style.backgroundColor = 'rgb(200, 0,0)';
    backend.style.backgroundColor = '#181A20';
    database.style.backgroundColor = '#181A20';
    devTools.style.backgroundColor = '#181A20';
    host.style.backgroundColor = '#181A20';

    display_front_end.style.display = 'flex';
    display_back_end.style.display = 'none';
    display_Database.style.display = 'none';
    display_devTools.style.display = 'none';
    display_HostDev.style.display = 'none';
});
backend.addEventListener('click', function(){
    backend.style.backgroundColor = 'rgb(200, 0,0)';
    fontend.style.backgroundColor = '#181A20';
    database.style.backgroundColor = '#181A20';
    devTools.style.backgroundColor = '#181A20';
    host.style.backgroundColor = '#181A20';

    display_back_end.style.display = 'flex';
    display_front_end.style.display = 'none';
    display_Database.style.display = 'none';
    display_devTools.style.display = 'none';
    display_HostDev.style.display = 'none';
});
database.addEventListener('click', function(){
    database.style.backgroundColor = 'rgb(200, 0,0)';
    backend.style.backgroundColor = '#181A20';
    fontend.style.backgroundColor = '#181A20';
    devTools.style.backgroundColor = '#181A20';
    host.style.backgroundColor = '#181A20';

    display_Database.style.display = 'flex';
    display_back_end.style.display = 'none';
    display_front_end.style.display = 'none';
    display_devTools.style.display = 'none';
    display_HostDev.style.display = 'none';
});
devTools.addEventListener('click', function(){
    devTools.style.backgroundColor = 'rgb(200, 0,0)';
    fontend.style.backgroundColor = '#181A20';
    database.style.backgroundColor = '#181A20';
    backend.style.backgroundColor = '#181A20';
    host.style.backgroundColor = '#181A20';

    display_devTools.style.display = 'flex';
    display_front_end.style.display = 'none';
    display_Database.style.display = 'none';
    display_back_end.style.display = 'none';
    display_HostDev.style.display = 'none';
});
host.addEventListener('click', function(){
    host.style.backgroundColor = 'rgb(200, 0,0)';
    fontend.style.backgroundColor = '#181A20';
    database.style.backgroundColor = '#181A20';
    backend.style.backgroundColor = '#181A20';
    devTools.style.backgroundColor = '#181A20';

    display_HostDev.style.display = 'flex';
    display_front_end.style.display = 'none';
    display_Database.style.display = 'none';
    display_back_end.style.display = 'none';
    display_devTools.style.display = 'none';
});