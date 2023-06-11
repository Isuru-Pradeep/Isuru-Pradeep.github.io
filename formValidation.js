const contactForm = document.getElementById('contactForm');
const name = document.getElementById('formName');
const email = document.getElementById('formEmail');
const message = document.getElementById('formMessage');



contactForm.addEventListener("submit",(e)=>{
    let description = [];
    let flag = 0;
    
    if(name.value === '' || name.value == null){
        e.preventDefault();
        description.push("Please input your name .. ");
        flag = 1;
    }
    if(email.value === '' || email.value == null){
        e.preventDefault();
        description.push("Please input your email address .. ");
        flag = 1;

    }
    if(message.value === '' || message.value == null){
        e.preventDefault();
        description.push("Write your message .. ");
        flag = 1;

    }
    if(flag==1){
    window.alert(description);
    
    }
    else{
    setTimeout(function(){
        location.reload();
    }, 6000);
}

})
