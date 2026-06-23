/*Script set for dark/light*/
function lightmode() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}

/*Script set to change button colour + text (ACCOR mode switch)*/
  const myButton = document.getElementById('modeswitch');
  myButton.addEventListener('click', () => {
    myButton.classList.toggle('toggled');
    if (myButton.textContent === 'Toggle Dark Mode') {
                myButton.textContent = 'Toggle Light Mode';
            } else {
                myButton.textContent = 'Toggle Dark Mode';
            }
        });
