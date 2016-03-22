var settings = document.getElementById('settings');
var showSettings = document.getElementById('settings-block');
var hideSettings = document.getElementsByClassName('close')[0];

settings.addEventListener('click', function(){
    showSettings.style.display = 'block';
});
hideSettings.addEventListener('click', function(){
	showSettings.style.display = 'none';
});