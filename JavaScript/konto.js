document.addEventListener('DOMContentLoaded', () => { 

document.getElementById('konto-login').onclick = function() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('rejestracja-form').style.display = 'none';
};
document.getElementById('konto-rejestracja').onclick = function() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('rejestracja-form').style.display = 'block';
};
});

function walidacja(){
    const haslo = document.getElementById('rejestracja-password').value;
    const haslo_2 = document.getElementById('rejestracja-password-2').value;
    if(haslo!=haslo_2){
        alert("Hasła mają być takie same...");
        return false;
    }
    return true;
}