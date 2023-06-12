//Variavel para mecher com o formulario
const form = document.getElementById ('form-atividade');

    //emojis de aprovado e reprovado , assim mundando o ternario para receber as duas var
    const imgAprovado = '<img src="./images/aprovado.png" alt="emoji aprovado">';
    const imgReprovado = '<img src="./images/reprovado.png" alt="emoji reprovado">';

    //Mensagem de aprovado ou reprovado no final, indo pra mediaFinal;
    const spanAprovado = '<span class="resultado Aprovado">Aprovado</span>';
    const spanReprovado = '<span class="resultado Reprovado">Reprovado</span>';

    //arrays para calcular a nota final, vão para AdcionaLinha, com o push para puxar elas, atividade.push(inputNomeAtividade.value);
    const atividade = [];
    const notas = [];

    //Deixando o usuario escolher a media 
    const NotaMinima = parseFloat(prompt("Digite a Nota minima: "));

     //variavel para criar a funcao de manter a ativida na tela
    let linhas = '';

        form.addEventListener('submit', function(e) //evento para para o botão, e para tirar o carregamenta da tela
        {
            e.preventDefault();
            
            //chamando funcoes
            AdcionaLinha();
            atualizaTabela();
            atualizaMediaFinal();
        });
        

        function AdcionaLinha() 
        {
                        //capturar o nome e a nota
                        const inputNomeAtividade = document.getElementById ('nome-atividade');
                        const inputNotaAtividade = document.getElementById ('nota-atividade');

                                        //Tirar a duplicação de materias ou conteudos
                if (atividade.includes(inputNomeAtividade.value)) {
                    alert(`A atividade: ${inputNomeAtividade.value} já foi colocada`);
                  } else {
                    
                    atividade.push(inputNomeAtividade.value);
                    notas.push(parseFloat(inputNotaAtividade.value));
        
                    //adicionando a resposta do aluno na tabela
                    let linha = `<tr>`;
                    linha += `<td>${inputNomeAtividade.value}</td>`; //mesma coisa que juntar duas palavras
                    linha += `<td>${inputNotaAtividade.value}</td>`;
                    linha += `<td>${inputNotaAtividade.value >= NotaMinima ? imgAprovado : imgReprovado}</td>`; //ternario if ? - else :
                    linha += `<tr>`;
        
                    linhas += linha; //todas as linhas

                  //Limpando o campo pos resposta
                  inputNomeAtividade.value = '';
                  inputNotaAtividade.value = '';

                }
        }



        function atualizaTabela() 
        {
        //capturar o corpo da tabela
        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas;  //Inserindo um conteudo na tag linha o resultado;
        }

        function atualizaMediaFinal() {
            const mediaFinal = calculaMediaFinal();
          
            document.getElementById('media-final-valor').innerHTML = mediaFinal;
            document.getElementById('media-final-resultado').innerHTML = mediaFinal >= 7 ? spanAprovado : spanReprovado;
          }          

        function calculaMediaFinal ()
        {
            let somaDasNotas = 0;
            for(let i = 0; i < notas.length; i++)  //Enquanto i for maior que a notas
            {
                somaDasNotas += notas[i];
            }

            return somaDasNotas / notas.length;  //Fazer a media
        }

