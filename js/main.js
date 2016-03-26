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

function reformatDate(dateStr)
{
    return dateStr.split(".").reverse().join("-");

}
var saveAddPin = document.getElementById('save-add-pin');
var savedPinsRow = document.getElementById('saved-pins-row');
var pinTheme = document.getElementById('pin-theme-field');
var pinMessage = document.getElementById('pin-message-field');
var existingPinItems = document.getElementsByClassName('pin-item');
var editPinCreationDate = document.getElementById('editpin-creation-field');
var editPinDueDate = document.getElementById('editpin-due-date');
var editPinTheme = document.getElementById('editpin-theme-field');
var editPinMessage = document.getElementById('editpin-message-field');
var updatePinBtn = document.getElementById('update-pin');
var deletePinBtn = document.getElementById('delete-pin');
var closePinBtn = document.getElementById('close-pin');

saveAddPin.addEventListener('click', function(){
    var newPinItem = document.createElement('div');
    newPinItem.className = 'pin-item'  +' col-lg-3' + ' col-md-3' + ' col-sm-3' + ' col-xs-3';
    newPinItem.setAttribute('data-toggle', 'modal');
    newPinItem.setAttribute('data-target', '#showPinModal');
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

    for (i = 0; i < existingPinItems.length; i++){
        var pinItem = existingPinItems[i];
        pinItem.addEventListener('click', function(){
            var pin = this;
            pin.className += ' selected';

            editPinTheme.value = pin.childNodes[0].innerText;
            editPinCreationDate.value = pin.childNodes[1].innerText;
            editPinDueDate.value = reformatDate(pin.childNodes[2].innerText.split(": ")[1]);
            editPinMessage.value = pin.childNodes[3].innerText;

            updatePinBtn.addEventListener('click', function(){
                var selectedPin = document.getElementsByClassName('selected')[0];
                selectedPin.childNodes[0].innerText = editPinTheme.value;
                selectedPin.childNodes[1].innerText = editPinCreationDate.value;
                selectedPin.childNodes[2].innerText = "Due to: " + editPinDueDate.valueAsDate.toLocaleDateString();
                if (!editPinMessage.value) {
                    selectedPin.childNodes[3].innerText = "<No message>";
                } else {
                    selectedPin.childNodes[3].innerText = editPinMessage.value;
                };
                selectedPin.classList.remove('selected');
                updatePinBtn.setAttribute('data-dismiss', 'modal');
            });
            closePinBtn.addEventListener('click', function(){
                var selectedPin = document.getElementsByClassName('selected')[0];
                selectedPin.classList.remove('selected');
            });
        });
    };

    /*deletePinBtn.addEventListener('click', function(){
        deletePinBtn.setAttribute('data-dismiss', 'modal');
        this.newPinItem.remove();
    });*/
});









