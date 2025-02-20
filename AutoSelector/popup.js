document.getElementById("apply").addEventListener("click", function() {
    let selectedValue = document.getElementById("radioValue").value;

    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            func: selectRadioButtons,
            args: [selectedValue]
        });
    });
});

function selectRadioButtons(value) {
    let allRadios = document.querySelectorAll('input[type="radio"]');
    allRadios.forEach(radio => {
        if (radio.value === value) {
            radio.click();
        }
    });
}
