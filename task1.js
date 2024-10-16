function checkPasswordStrength(password) {
    if (password.length < 8) {
        return "Weak";
    }
    
    if (!/\d/.test(password)) {
        return "Weak";
    }
    
    if (!/[a-z]/.test(password)) {
        return "Weak";
    }
    
    if (!/[A-Z]/.test(password)) {
        return "Weak";
    }
    
    return "Strong";
}



(() => {
    console.log(checkPasswordStrength("password"));
    console.log(checkPasswordStrength("Password123"));
})()