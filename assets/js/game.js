var playerName = window.prompt("What is your robot's name")

var playerHealth = 1
var playerAttack = 2
var playerMoney = 10

console.log(playerName, playerHealth, playerAttack)

var enemyName = 'Roborto'
var enemyHealth = 1
var enemyAttack = 2

var fight = function () {
  window.alert('Welcome to Robot Gladiators!!')

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
    } else
      window.alert(enemyName + 'still has ' + enemyHealth + ' health left')(
        (playerHealth = playerHealth - enemyAttack),
      )

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
    } else {
      window.alert(playerName + ' still has ' + playerHealth + ' health left.')
    }
  } else if (promptFight === 'SKIP' || promptFight === 'skip') {
    var confirmSkip = window.prompt("Are you sure you'd like to quit?")

    console.log(confirmSkip)

    if (confirmSkip) {
      window.alert(playerName + ' has decided to skip the fight, Good Bye')
      playerMoney = playerMoney - 2
    } else fight()
  } else {
    window.alert('you need to choose a valid option. Try again!')
  }
}

fight()
