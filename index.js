function conteudoSemanal(){
    let conteudoSemanal = document.querySelector('.eventoDaSemana');

    if(conteudoSemanal.className == 'eventoDaSemana new'){
        conteudoSemanal.className = 'eventoDaSemana';
    }else{
        conteudoSemanal.className = 'eventoDaSemana new';
    }
}

function scrollToContato(){
    let contatoSection = document.querySelector('.containerMapa');
    contatoSection.scrollIntoView({ behavior: "smooth" });
}

function darkTheme(){
    let body = document.body;
    let iconSol = document.getElementById('iconSol');

    body.classList.toggle('dark');

    if(iconSol.classList.contains('fa-sun')){
        iconSol.classList.remove('fa-sun');
        iconSol.classList.add('fa-moon');
    }else{
        iconSol.classList.remove('fa-moon');
        iconSol.classList.add('fa-sun');
    }
}