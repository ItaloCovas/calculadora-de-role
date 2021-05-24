function atualizarResultado(){
    if(localStorage.getItem('resultadoDoRole') != null){
        let resultado = document.getElementById('resultado');
        let img = document.getElementById('image');
        img.src = localStorage.getItem('image')
        resultado.innerHTML = "Você gastou R$ " + localStorage.getItem('resultadoDoRole') + ". Beba com moderação!";
        localStorage.removeItem('resultadoDoRole');
        localStorage.removeItem('image');
    }
}

atualizarResultado();