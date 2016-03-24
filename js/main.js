var settings = document.getElementById('settings-block');
var showSettings = document.getElementById('settings');
var hideSettings = document.getElementsByClassName('close')[0];

showSettings.addEventListener('click', function(){
    settings.style.display = 'block';
});
hideSettings.addEventListener('click', function(){
	settings.style.display = 'none';
});

var addPin = document.getElementById('add-pin-btn');
var creationDate = document.getElementById('pin-creation-field');
addPin.addEventListener('click', function(){
    var date = new Date();
    creationDate.value = date.toLocaleDateString();
});


