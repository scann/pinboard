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
var dueDate = document.getElementById('pin-due-date');
var addPinModal = document.getElementById('addPinModal');

addPin.addEventListener('click', function(){
    addPinModal.setAttribute('data-backdrop', 'static');
    addPinModal.setAttribute('data-keyboard', 'false');
    var date = new Date();
    creationDate.value = date.toLocaleDateString();
    dueDate.valueAsDate = date;
});

var saveAddPin = document.getElementById('save-add-pin');
var savedPinsRow = document.getElementById('saved-pins-row');
var pinTheme = document.getElementById('pin-theme-field');
var pinMessage = document.getElementById('pin-message-field');

saveAddPin.addEventListener('click', function(){
    var newPinItem = document.createElement('div');
    newPinItem.className = 'pin-item'  +' col-lg-3' + ' col-md-3' + ' col-sm-3' + ' col-xs-3';
    savedPinsRow.appendChild(newPinItem);
    var newPinDetails = [];
    for (var i=0; i < 4; i++){
        newPinDetails[i] = document.createElement('p');
        newPinDetails[i].className = 'pin-handwritten';
    }
    newPinDetails[0].className += ' pin-item-theme';
    newPinDetails[1].className += ' pin-item-date';
    newPinDetails[2].className += ' pin-item-due-date';
    newPinDetails[3].className += ' pin-item-message';
    for (i=0; i < 4; i++){
        newPinItem.appendChild(newPinDetails[i]);
    }

    newPinDetails[0].innerText = pinTheme.value;
    newPinDetails[1].innerText = creationDate.value;
    newPinDetails[2].innerText = "Due to: " + dueDate.valueAsDate.toLocaleDateString();
    if (!pinMessage.value) {
        newPinDetails[3].innerText = "<No message>";
    } else {
    newPinDetails[3].innerText = pinMessage.value;
    };
    pinTheme.value = "";
    creationDate.value = "";
    pinMessage.value = "";
    saveAddPin.setAttribute('data-dismiss', 'modal');
});
