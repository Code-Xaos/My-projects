window.onload = () => {
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    const INPUT = document.getElementById('email');
    var $error = $(".error");
    function validateEmail(value) {
      return EMAIL_REGEXP.test(value);
    }
    
    function updateInput() {
        if (!validateEmail(INPUT.value)){ INPUT.style.borderColor = 'red'; $error.fadeIn();
    }else{ INPUT.style.borderColor = 'green'; }
    
    }
    
    INPUT.addEventListener('input', updateInput);}

