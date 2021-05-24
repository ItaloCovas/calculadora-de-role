const botao = document.getElementById('button'); 

function calcular() {

    const numerodeBares = document.querySelector('.n-bares').value;
    let nivelBares = document.querySelector('.nivel-bares').value;
    const numerodeBaladas = document.querySelector('.n-baladas').value;
    let nivelBaladas = document.querySelector('.nivel-baladas').value;
    let nivelSede = document.querySelector('.nivel-sede').value;
    const kmUber = document.querySelector('.km-uber').value;
    let diaRole = document.querySelector('.dia-role').value;
    const outrosGastos = document.querySelector('.outros-gastos').value;
    let imagem = document.querySelector('input[type=file]').files[0]; //Seleciona a imagem upada pelo usuário
    const reader = new FileReader();

    reader.addEventListener("load", function () {
        // Converte a imagem para Base64 e salva no localStorage
        localStorage.setItem("image", reader.result);
    }, false);
    
    if (imagem) {
        reader.readAsDataURL(imagem);
    }
   
    

    /* Convertendo variáveis de string para float para correção de erros (concatenação) */

    const NB = parseFloat(numerodeBares);
    const NBA = parseFloat(numerodeBaladas);
    const KM = parseFloat(kmUber);
    const OG = parseFloat(outrosGastos);

    /* Verificação de campos */

    if (numerodeBares !== '' && nivelBares !== '' && numerodeBaladas !== '' && nivelBaladas !== '' && nivelSede !== '' && kmUber !== '' &&
    diaRole !== '' && outrosGastos !== '') {

        /* Definindo os modificadores */
        if(nivelBares == 1) {
            nivelBares = 1.1;
        } else if (nivelBares == 2) {
            nivelBares = 1.5;
        } else {
            nivelBares = 2.2;
        }

        if(nivelBaladas == 1) {
            nivelBaladas = 2;
        } else {
            nivelBaladas = 3;
        }

        if(nivelSede == 1) {
            nivelSede = 1;
        } else if (nivelSede == 2) {
            nivelSede = 1.6;
        } else {
            nivelSede = 2.5;
        }

        if(diaRole == 1) {
            diaRole = 1;
        } else if (diaRole == 2) {
            diaRole = 1.4;
        } else if (diaRole == 3) {
            diaRole = 1.6;
        } else {
            diaRole = 1.2;
        }

        /* Fórmula e calculo */

        const formula = parseFloat((NB * nivelBares * nivelSede * 5 * 9) + (NBA * nivelBaladas * nivelSede * 5 * 9) + (KM * diaRole * 4) + OG).toFixed(2).replace('.',',');
        
        localStorage.setItem('resultadoDoRole', formula.toString());


        location.replace("resultado.html");
        
    } else {
        alert('Preencha o formulário com todos os dados!');
    }
}

botao.addEventListener('click', calcular);