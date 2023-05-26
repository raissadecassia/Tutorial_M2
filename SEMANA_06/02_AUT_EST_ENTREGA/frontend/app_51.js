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
  