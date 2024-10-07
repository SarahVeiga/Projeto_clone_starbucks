// Primeira parte Habilitado/Desabilitado
function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var links = document.querySelector('.links');
    // Troca o estado da classe .toggle para ativo
    menuToggle.classList.toggle('active')
    // Troca o estado da classe .links para ativo
    links.classList.toggle('active')
}