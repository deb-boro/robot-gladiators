/*player details */
var playerName = window.prompt("What is your robot's name")

var playerHealth = 100
var playerAttack = 10
var playerMoney = 10

/*enemy details*/
var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble']
console.log(enemyNames)
console.log(enemyNames[0])
var enemyHealth = 50
var enemyAttack = 12

var fight = function (enemyName) {
  // window.alert('Welcome to Robot Gladiators!!')

  while (playerHealth > 0 && enemyHealth > 0) {
    var promptFight = window.prompt(
      "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.",
    )

    if (promptFight === 'fight' || promptFight === 'FIGHT') {
      enemyHealth = enemyHealth - playerAttack
      console.log(
        playerName +
          ' attacked ' +
          enemyName +
          '. ' +
          enemyName +
          ' now has ' +
          enemyHealth +
          ' health remaining.',
      )

      if (enemyHealth <= 0) {
        window.alert(enemyName + 'has died')
        break
      } else
        window.alert(enemyName + 'still has ' + enemyHealth + ' health left')

      playerHealth = playerHealth - enemyAttack

      console.log(
        enemyName +
          ' attacked ' +
          playerName +
          '. ' +
          playerName +
          ' now has ' +
          playerHealth +
          ' health remaining.',
      )

      if (playerHealth <= 0) {
        window.alert(playerName + ' has died!')
        break
      } else {
        window.alert(
          playerName + ' still has ' + playerHealth + ' health left.',
        )
      }
    } else if (promptFight === 'SKIP' || promptFight === 'skip') {
      var confirmSkip = window.prompt("Are you sure you'd like to quit?")

      console.log(confirmSkip)

      if (confirmSkip) {
        window.alert(playerName + ' has decided to skip the fight, Good Bye')
        playerMoney = playerMoney - 10
        console.log('playerMoney', playerMoney)
        break
      } else fight()
    } else {
      window.alert('you need to choose a valid option. Try again!')
    }
  }
}
var endGame = function () {
  // if the player is still alive , player wins!
  if (playerHealth > 0) {
    window.alert('The game has now ended. Lets see how you did')
  } else {
    window.alert('You have lost your robot in the battle')
  }
}

var startGame = function () {
  playerHealth = 100
  playerAttack = 10
  playerMoney = 10

  for (var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i]
    enemyHealth = 50
    if (playerHealth > 0) {
      window.alert('Welcome to Robot Gladiators ! Round' + (i + 1))
      fight(pickedEnemyName)
    } else window.alert('You have lost your robot in battle! Game Over!')
  }
  endGame()
}

//start the game when the page loads
startGame()

//function to end the game

//ask player if they'd like to play again

var playAgainConfirm = window.confirm('would you like to play again')

if (playAgainConfirm) {
  //restart the game
  startGame()
} else {
  window.alert('Thank you for playing Robot Gladiator!Come back soon')
}
