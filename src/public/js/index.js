let btn = document.getElementById('btnEquipe');
let divEquipe = document.getElementById('equipe'); 

btn.addEventListener('click', () => {
    if(!divEquipe.classList.contains('fade-in')) {
        divEquipe.classList.remove('fade-out');
        divEquipe.classList.add('fade-in');
    } else {
        divEquipe.classList.remove('fade-in');
        divEquipe.classList.add('fade-out');
    }
});
