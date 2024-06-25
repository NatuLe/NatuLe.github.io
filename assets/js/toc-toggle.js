document.addEventListener('DOMContentLoaded', function() {
    var toggleButton = document.getElementById('toc-toggle');
    var toc = document.getElementById('toc');
    toggleButton.addEventListener('click', function() {
        toc.classList.toggle('active');
    });
});
