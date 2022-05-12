// var enemyHealth = 50
// var enemyAttack = 12

//function to generate a random numeric value
var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + 1)) + 40
  return value
}

var fight = function (enemy) {
  // window.alert('Welcome to Robot Gladiators!!')
  console.log(enemy)
  while (playerInfo.health > 0 && enemy.health > 0) {
    var promptFight = window.prompt(
      "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.",
    )

    if (promptFight === 'fight' || promptFight === 'FIGHT') {
      var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack)
      enemy.health = Math.max(0, enemy.health - damage)

      console.log(
        playerInfo.name +
          ' attacked ' +
          enemy.name +
          '. ' +
          enemy.name +
          ' now has ' +
          enemy.health +
          ' health remaining.',
      )

      if (enemy.health <= 0) {
        window.alert(enemy.name + 'has died')
        break
      } else
        window.alert(enemy.name + 'still has ' + enemy.health + ' health left')

      var damage = randomNumber(enemy.attack - 3, enemy.attack)
      playerInfo.health = Math.max(0, playerInfo.health - damage)

      console.log(
        enemy.name +
          ' attacked ' +
          playerInfo.name +
          '. ' +
          playerInfo.name +
          ' now has ' +
          playerInfo.health +
          ' health remaining.',
      )

      if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + ' has died!')
        break
      } else {
        window.alert(
          playerInfo.name + ' still has ' + playerInfo.health + ' health left.',
        )
      }
    } else if (promptFight === 'SKIP' || promptFight === 'skip') {
      var confirmSkip = window.prompt("Are you sure you'd like to quit?")

      console.log(confirmSkip)

      if (confirmSkip) {
        window.alert(
          playerInfo.name + ' has decided to skip the fight, Good Bye',
        )
        playerInfo.money = Math.max(0, playerInfo.money - 10)

        console.log('playerInfo.money', playerInfo.money)
        break
      } else fight()
    } else {
      window.alert('you need to choose a valid option. Try again!')
    }
  }
}

/*player details */

var playerInfo = {
  name: window.prompt("What is your robot's name"),
  health: 100,
  attack: 10,
  money: 10,

  reset: function () {
    this.health = 100
    this.attack = 10
    this.money = 10
  },

  refillHealth: function () {
    if (this.money >= 7) {
      window.alert('Refill players health by 20 for 7 dollar')
      this.health += 20
      this.money -= 7
    } else {
      window.alert("You don't have enough money")
    }
  },

  upgradeAttack: function () {
    this.attack += 6
    this.money -= 7
    if (this.money >= 7) {
      window.alert('Upgrade attack by 6 for 7 dollar')
      this.attack += 6
      this.money -= 7
    } else {
      window.alert("You don't have enough money")
    }
  },
}

//enemy objects
var enemyInfo = [
  {
    name: 'Roborto',
    attack: randomNumber(10, 14),
  },

  {
    name: 'Amy Android',
    attack: randomNumber(10, 14),
  },

  {
    name: 'Robo Trumble',
    attack: randomNumber(10, 14),
  },
]

var endGame = function () {
  // if the player is still alive , player wins!
  if (playerInfo.health > 0) {
    window.alert('The game has now ended. Lets see how you did')
  } else {
    window.alert('You have lost your robot in the battle')
  }
}

var shop = function () {
  //ask the player what they'd like to do
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack , or LEAVE the store? Please enter one : 'REFILL' , 'UPGRADE' or 'LEAVE' to make a choice",
  )
  // console.log('enter the shop')
  switch (shopOptionPrompt) {
    case 'refill':
    case 'REFILL':
      playerInfo.refillHealth
      break

    case 'upgrade':
    case 'UPGRADE':
      playerInfo.upgradeAttack
      break

    case 'leave':
    case 'LEAVE':
      window.alert('leave the store')
      break
    default:
      window.alert('You did not pick a valid option. Try again')

      shop()
      break
  }
}

var startGame = function () {
  playerInfo.reset()

  for (var i = 0; i < enemyInfo.length; i++) {
    var pickedEnemyObj = enemyInfo[i]
    pickedEnemyObj.health = randomNumber(40, 60)

    if (playerInfo.health > 0) {
      window.alert('Welcome to Robot Gladiators ! Round' + (i + 1))

      //start fight
      fight(pickedEnemyObj)

      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
        //ask if the player want to use the stor before the next round
        var storeConfirm = window.confirm(
          'The fight is over, visit the store before the next round?',
        )
        // if yes, take them to the store() function
        if (storeConfirm) {
          shop()
        }
      }
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
