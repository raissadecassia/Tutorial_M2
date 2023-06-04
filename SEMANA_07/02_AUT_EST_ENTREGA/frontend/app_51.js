//acessa o linkedin
  $(document).ready(function() {
    $('#linkedin-button').click(function() {
      window.open('https://www.linkedin.com/in/raissa-moraes-a89179264/');
    });
  });

  //abre outra imagem quando a foto é clicada
  $(document).ready(function() {
    $('.original-image').click(function() {
      $(this).siblings('.zoomed-image').fadeIn();
    });
  
    //fecha a imagem quando ela é clicada
    $('.zoomed-image').click(function() {
      $(this).fadeOut();
    });
  });
  
  
  $(document).ready(function() {
    function generateSummary() {
      var summary = $('<ul>'); // Cria um elemento <ul> para o sumário
      // Seleciona os elementos de cabeçalho que deseja adicionar ao sumário
      var headers = $('.section h2, .section h3');
      // Percorre cada cabeçalho e cria um link para o sumário
      headers.each(function(index) {
        var header = $(this);
        var text = header.text();
        var id = 'section-' + index;
        header.attr('id', id);
        // Cria o link para o sumário
        var link = $('<a>').attr('href', '#' + id).text(text);
        var listItem = $('<li>').append(link); // Cria o elemento <li> para o link
        // Adiciona o link ao sumário
        summary.append(listItem);
      });
      // Adicione o sumário gerado à div
      $('#summary').append(summary);
    }
    // Chame a função para gerar o sumário
    generateSummary();
  });
  
  //carrega informações de experiencias profissionais
  $(document).ready(function() {
    $('#load-experiencias-button').click(function() {
      const xhr = new XMLHttpRequest();
      const experienciasContainer = $('#experiencias');
      const button = $(this); // Seleciona o botão
      xhr.onload = function(){
        if (this.status === 200){
          experienciasContainer.html(xhr.responseText);
          experienciasContainer.toggleClass('hidden'); // Alterna a classe 'hidden' para exibir ou ocultar o elemento
          // Atualiza o texto do botão com base na visibilidade do elemento
          if (experienciasContainer.hasClass('hidden')) {
            button.text('Mostrar informações');
          } else {
            button.text('Ocultar informações');
          }
        } else {
          console.warn('Did not receive 200 OK from response');
        }
      };
      xhr.open('GET', 'experiencias.html');
      xhr.send();
      });
    });

    //carrega informação sobre bolsas
    $(document).ready(function() {
      $('#load-bolsas-button').click(function() {
        const xhr = new XMLHttpRequest();
        const bolsasContainer = $('#bolsas');
        const button = $(this); // Seleciona o botão

        xhr.onload = function(){
          if (this.status === 200){
            bolsasContainer.html(xhr.responseText);
            bolsasContainer.toggleClass('hidden'); // Alterna a classe 'hidden' para exibir ou ocultar o elemento
             // Atualiza o texto do botão com base na visibilidade do elemento
            if (bolsasContainer.hasClass('hidden')) {
              button.text('Mostrar informações');
            } else {
              button.text('Ocultar informações');
            }
          } else {
            console.warn('Did not receive 200 OK from response');
          }
        };
        xhr.open('GET', 'bolsas.html');
        xhr.send();
        });
      });