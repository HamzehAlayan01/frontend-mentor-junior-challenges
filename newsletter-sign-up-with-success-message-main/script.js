let submitBtn = document.getElementById("subBtn");
let result = document.getElementById("result");
let emailInput = document.getElementById("email");
let wrapper = document.querySelector(".wrapper");
let successMsg = document.querySelector(".success-message");
let dismissBtn = document.querySelector(".dismiss-button");
submitBtn.addEventListener("click", ()=>{
    let emailValue = emailInput.value;
    if(!emailValue || !emailInput.validity.valid){
        Object.assign(emailInput.style, {
            color : 'hsl(4, 100%, 67%)',
            borderColor : 'hsl(4, 100%, 67%)',
            backgroundColor: 'hsl(2, 47.20%, 89.60%)'
        })
     
        result.textContent = 'Valid email required';
        result.style.color = 'hsl(4, 100%, 67%)';
    }
    else {
        wrapper.style.display = 'none';
        successMsg.style.display = 'flex';
    }
})

emailInput.addEventListener("focus", () => {
    Object.assign(emailInput.style, {
        color: "",
        borderColor: "",
        backgroundColor: ""
    });
    result.textContent = "";
});

dismissBtn.addEventListener("click", ()=>{
    wrapper.style.display = "flex";
    successMsg.style.display="none";
})