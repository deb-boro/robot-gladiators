var playerName = window.prompt("What is your robot's name")

var playerHealth = 1
var playerAttack = 2

console.log(playerName, playerHealth, playerAttack)

var enemyName = 'Roborto'
var enemyHealth = 1
var enemyAttack = 2

/* function fight(){

}*/

var fight = function () {
  window.alert('Welcome to Robot Gladiators!!')

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
  ),
    (playerHealth = playerHealth - enemyAttack)

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

  if (enemyHealth <= 0) {
    window.alert(enemyName + 'has died')
  } else window.alert(enemyName + 'still has ' + enemyHealth + ' health left')

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
}

fight()
