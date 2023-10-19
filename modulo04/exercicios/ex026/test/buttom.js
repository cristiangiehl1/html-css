// Aguarde até que o documento HTML seja totalmente carregado
document.addEventListener("DOMContentLoaded", function() {
    var buttom_burguer = window.document.getElementById("burguer");    
    

    buttom_burguer.addEventListener("click", function() {
        if (itens.style.display == 'block') {
            itens.style.display = 'none';
        } else {
            itens.style.display = 'block';
        }
    });

    window.addEventListener("resize", function() {
        if (window.innerWidth >= 768) {
            itens.style.display = 'block';
        } else {
            itens.style.display = 'none';
        }
    });
});
