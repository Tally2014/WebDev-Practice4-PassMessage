const submitForm = document.querySelector('#messageForm');
const input = document.querySelector('#messageInput');
const h1 = document.createElement("h1");
h1.style.textAlign = 'center';
h1.id = 'displayMessage';

submitForm.addEventListener("submit", function(e){
    
    e.preventDefault(); 
    const existingH1 = submitForm.querySelector("#displayMessage");
    
    if(input.value !== ""){       
        if (existingH1) {
            existingH1.innerText = input.value;
        } else {
            h1.innerText = input.value;
            submitForm.appendChild(h1);
        }
    } else if(existingH1 && input.value === ""){
        h1.remove();
    }
 });