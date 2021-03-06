# My Memory Game  



## About  

My Memory Game was a project I put together before beginning an Immersive Full Stack Web Development Program at DigitalCrafts.  After going through the pre-course material for the program I really wanted to put some of the things I learned into practice.

This is a simple memory game where a player is first shown a load screen where they select a difficulty setting. Their selection will then load either a 4x4 or 6x6 board of squares containing randomly generated color pairs which are displayed briefly, then covered. The goal is to then match the color pairs.

## Technologies Used  
- HTML
- CSS
- JavaScript


## Game Walkthrough  
1) Game Load Screen . 
<p align="left">
  <img width="300" height="300" src="resources/load-screen">
</p>

2) Normal Mode (4x4 board) . 
<p align="left">
  <img width="300" height="300" src="resources/pre-board-4x4.jpg">
  <img width="300" height="300" src="resources/game-board-4x4.jpg">
</p>


3) Hard Mode (6x6 board) . 
<p align="left">
  <img width="300" height="300" src="resources/pre-board-6x6.jpg">
  <img width="300" height="300" src="resources/game-board-6x6.jpg">
</p>


3) End Screen . 
<p align="left">
  <img width="300" height="300" src="resources/end-screen.jpg">
</p>

## Challenges  
- One big challenge I had was getting the squares to fade off the screen when correct guesses were made. Originally, I used the display: none setting to remove the square from the screen.  However, since the transition property doesn't work on this, the box would instantly disappear.  To solve this, I instead changed the background color of the square to match the background color of the game screen so it looks like it disappeared.

## Demo  
  <div style="position:absolute; left: 50px;">
    <a href="https://youtu.be/fEE3iTA69ZQ" target="_blank" left='30px'>
      <img src="resources/demo-screen-shot.jpg"/>
    </a>
  </div>