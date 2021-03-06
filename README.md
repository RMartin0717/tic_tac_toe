# Tic Tac token

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Walkthrough](#walkthrough)
* [Reflection](#reflection)
* [Authors](#authors)
* [Technologies](#technologies)

## Description
Are you a camp counselor who needs literally 5 minutes to go pee but don't want to abandon the kids with nothing to do only to come back to a mess worse than a bladder infection? Do you need something in the theme of camp that will keep them busy for exactly the amount of time you need to relieve yourself but not so fun that they will argue with you when you get back and it's time to do an actual camp activity? Well, try some vaguely camp-themed tic tac toe. It will keep them entertained for just long enough that you should make it back (if you hurry) and be able to pick up where you left off without parents complaining and saying, "Well, even **I** could have left them alone to play tic tac toe! Why am I paying you to play tic tac toe that isn't even special?!" Problem solved. We got your special tic tac toe. Enjoy.

### Features
* When the game is over, the winner is announced and after a short timer, the board resets and saves the number of wins for each player.
* Player win counts are stored in local storage and persist when the page is refreshed.
* It's really cute.
* While hovering over a grid space, before clicking and if the box does not already have a token in it, a flashlight is displayed.
* The app employs some features of responsive design so that the game may be enjoyed on a variety of screen sizes.

<img src="./images/README/ipad.png" height="400">
iPad
<img src="./images/README/iphone.png" height="400">
iPhone 6/7/8 Plus
<img src="./images/README/galaxy-s5.png" height="400">
Galaxy S5

### Code Architecture
* The main.js file contains one global variable for the game Class, query selectors, event listenders, and all of the app rendering functionality. App rendering is executed by accessing the data model in the constructor for Game.
* The game.js file contains the data model for the game and all of the methods impacting the data model.
* The player.js file contains methods pertaining to saving and retrieving player win data.

### Deployed At
* https://rmartin0717.github.io/tic_tac_toe/

## Installation
1. Fork this repo
2. Clone down to your machine
3. Access cloned directory
4. Run `index.html`

## Walkthrough
1. Starting the game is as easy as making the first move. Player one is ready to place their first token as soon as the page loads.

<img src="./images/README/game-start.png" width="400">

2. After player one goes, the game automatically updates so that player two can take their turn. In case anyone has already forgotten whose turn it is or which token they are using, this information is displayed and updates with each turn.

<img src="./images/README/next-turn.png" width="400">


3. When hovering over a space that does not already contain a toke, a flashlight appears.

<img src="./images/README/flashlight-hover.gif" width="400">

4. When a player gets 3 tokens in a row, they are announced as the winner and their wins count increases to include their latest victory.

<img src="./images/README/tic-tac-toe-win.gif" width="400">


5. If the entire board fills up and neither player has gotten 3 in a row, then the game is declared a draw and neither win count is impacted.

<img src="./images/README/tic-tac-toe-draw.gif" width="400">

6. After either a winner or a draw is declared, a short timer begins. This is the designated "winner" time and they get to rub it in anyone's face until the board resets. Then it's back to business and a new game begins in which they must fight to maintain their winning streak, lest the underdog rises from the ashes and crushes them.

## Reflection
This project overall was a lot of fun. My biggest win was feeling like everything I've learned over Mod 1 was coming together in terms of my understanding of the content. I was able to organize a plan effectively on the first day and then stick to it so that I was able to take a day off and still not feel rushed finishing. I even had time at the end to add an extra feature.

There wasn't anything that particularly stood out as a challenge to my finishing on time. I did set challenges for myself so that I could become more fluent in my logic-writing and have take advantage of opportunities to learn more about CSS. For example, I wanted to lay out the logic for my checkForWin method and then spend some time refactoring it. I initially wrote out this logic in a very clear, but repetitive way and then refactored it twice--first to create reusable functions and then to implement a for loop. This experience gave me a stronger sense of both the logic used to evaluate the wins and ways to refactor. I also read about and talked with a mentor about media query to implement some responsive design in my project. With time left over, I explored different ways of having an image appear on hover and eventually settled on just using an emoji due to some flickering in the rendering that I was not able to figure out how to fix when I used an image.

## Author
<table>
    <tr>
        <td> Riley Martin <a href="https://github.com/RMartin0717">GitHub</td>
    </tr>
    </tr>
        <td><img src="https://avatars.githubusercontent.com/u/76501236?s=460&u=56de3268b98bd73447d785601176518e3cd0141c&v=4" alt="R. Martin" width="150" height="auto" /></td>
    </tr>
</table>

## Technologies
<table>
    <tr>
        <td>Functionality</td>
        <td>Structure</td>
        <td>Styling</td>
    </tr>
    </tr>
        <td><img src="./images/README/js-icon.png" alt="javascript" width="100" height="auto" /></td>
        <td><img src="./images/README/html-logo.png" alt="html" width="100" height="auto" /></td>
        <td><img src="./images/README/css-logo.png" alt="css" width="100" height="auto" /></td>
    </tr>
</table>
