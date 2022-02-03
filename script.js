

  $('#btn').click(function(event){   
      event.preventDefault()   
    const data = $("#data").val(); 
    
     

    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=tG7LS6QnaFH8fcSsXGcVM2UYe13iP3TpvybAy6kr&date=${data}`,

        success: function(response){
            
            $(".resultado").css("display", "block");
            $("#video").css("display", "none")
            $(".titulo").text(`${response.title}`); // titulo da imagem
            $(".titulo").css ("color", "whitesmoke");    
            $("#data").text(`${response.date}`); // data selecionada

            if (response.media_type == "image"){
                $(".imgdia").css ('background-image', `url(${response.url})`);
                $(".imgdia").css ("display", "block");
            } else {
                $(".imgdia").css("display", "none")
                $("#video").css("display", "block")
                $("#video").attr("src", response.url);

            }
            $(".descricao").text(`${response.explanation}`); //Data section imagem-dia
            $(".descricao").css("display", "block");

        },

        error: function (){
            $(".resultado").css("display", "flex");
            $("titulo").text(`API não encontrada`);
            $("descricao").text(`Data não encontrada: Por favor, selecione uma data entre 20 de junho de 1995 e a data de hoje`);
                        
        }
    });
  });
 



