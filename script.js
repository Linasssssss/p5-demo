function projectSelected() {
   const projectsSelect = document.getElementById('projects');

   frameRate(60);

keyPressedScript = function() {};

   if (projectsSelect.value === 'bouncables'){
        setupScript = setupBouncables;
        drawScript = drawBouncables;
 }  else if(projectsSelect.value === 'Flag'){
        setupScript = function() {};
        drawScript = drawFlags;
 } else if(projectsSelect.value === 'snake'){
       frameRate(5);
       
       setupScript = setupSnake;
       drawScript = drawSnake;
       keyPressedScript = keyPressedSnake;

 }

 setupScript();
}