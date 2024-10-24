$(document).ready(function () {
    
    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
        rules:{
            nome:{required:true},
            email:{required:true, email:true},
            telefone:{required:true},
            aceitoTermos:{required:true}
        },

        messages:{
            nome:'Por favor, insira o seu nome.',//mensagem personalizada
            email:'Por favor, insira seu e-mail.',
            telefone:'Por favor, insira seu telefone',
            aceitoTermos: 'Você deve aceitar os termos para continuar.'
        },

        submitHandler:function(form){
            alert("Sua requisição foi enviada para análise. Cadastro completo.");
            form.reset();
        },

        invalidHandler:function (evento, validador) {//valida os campos que estão em branco
            let camposIncorretos=validador.numberOfInvalids();
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos.`)
            }
        }
    })

});