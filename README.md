#My Memory Game

##About
My Memory Game was a project I put together before beginning an Immersive Full Stack Web Development Program at DigitalCrafts.  After going through the pre-course material for the program I really wanted to put some of the things I learned into practice.

This is a simple memory game where a player is first shown a load screen where they select a difficulty setting. Their selection will then load either a 4x4 or 6x6 board of squares containing randomly generated color pairs which are displayed briefly, then covered. The goal is to then match the color pairs.

##Technologies Used
- HTML
- CSS
- JavaScript


##Game Walkthrough
1) Game Load Screen
The game starts on a load where the player chooses a difficulty setting
<p align="left">
  <img width="300" height="300" src="/resources/load-screen.jpg">
</p>
2) Game Board
Normal Mode (4x4 board)
<p align="left">
  <img width="150" height="150" src="/resources/pre-board-4x4.jpg">
</p>
<p align="right">
  <img width="150" height="150" src="/resources/pre-board-4x4.jpg">
</p>

Hard Mode (6x6 board)
<p align="left">
  <img width="150" height="150" src="/resources/game-board-6x6.jpg">
</p>
<p align="right">
  <img width="150" height="150" src="/resources/game-board-6x6.jpg">
</p>

3) End Screen
After the player has matched all the squares, they are shown how many turns it took to remember all the squares and are given the option to play again.
<p align="left">
  <img width="300" height="300" src="/resources/end-screen.jpg">
</p>

##Demo
Coming Soon

##Challenges
- One big challenge I had was getting the squares to fade off the screen when correct guesses were made. Originally, I used the display: none setting to remove the square from the screen.  However, since the transition property doesn't work on this, the box would instantly disappear.  To solve this, I instead changed the background color of the square to match the background color of the game screen so it looks like it disappeared.