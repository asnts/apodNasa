$('#btn').click(function (event) {
    event.preventDefault();
    escolherData();
});

function escolherData() {

  $('#btn').on ("click", function(){      
    const data = $("#data").val(); 
     

    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=tG7LS6QnaFH8fcSsXGcVM2UYe13iP3TpvybAy6kr&date=${data}`,

        sucess: function(response){
            $(".resultado").css("display", "block");
            $(".titulo").text(`${response.title}`); // titulo da imagem
            $(".titulo").css ("color", "whitesmoke");    
            $("#data").text(`${response.date}`); // data selecionada

            if (response.media_type == "image"){
                $(".imgdia").attr (`<img src=""${response.hdurl}`);
                $(".imgdia").css ("display", "block");
            } else {
                $(".imgdia").html(`<iframe" src="${response.url}?autoplay=1&mute=1"></iframe>`);
            }
            $(".descricao").text(`${response.descricao}`); //Data section imagem-dia
            $(".descricao").css("display", "none");

        },

        error: function (){
            $(".resultado").css("display", "flex");
            $("titulo").text(`API não encontrada`);
            $("descricao").text(`Data não encontrada: Por favor, selecione uma data entre 20 de junho de 1995 e a data de hoje`);
                        
        }
    });
  });
} 

escolherData();

