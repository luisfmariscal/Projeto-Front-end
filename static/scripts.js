document.querySelectorAll('button').forEach(function(button) {
    button.addEventListener('click', function() {
        document.body.classList.toggle('popup--aberto');
    });
});
        