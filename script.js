
    var button = document.getElementById("change");
    var home = document.getElementById("Home");
    var skill = document.getElementById("Skill");
    // var work = document.getElementById("Work");



button.onclick = function(){
    button.classList.toggle("gray");
    home.classList.toggle("gray");
    skill.classList.toggle("gray");
    // work.classList.toggle("gray");
};
