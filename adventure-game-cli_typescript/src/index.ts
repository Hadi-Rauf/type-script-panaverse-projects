import inquirer from 'inquirer';

let enemies: string[] = [
  'Skeleton',
  'Zombie',
  'Warrior',
  'Assassin',
  'Goblin',
  'Orc',
  'Vampire',
  'Witch',
  'Dragon',
  'Bandit',
  'Ghost',
  'Werewolf',
  'Necromancer',
  'Troll',
  'Sorcerer',
  'Mummy',
  'Cyclops',
  'Demon',
  'Wraith',
  'Warlock',
];

let maxEnemyHealth: number = 75;
let enemyAttackDamage: number = 25;

let health: number = 100;
let attackDamage: number = 50;
let numHealthPotions: number = 3;
let healthPotionHealAmount: number = 30;
let healthPotionDropChance: number = 50; // Percentage

let running: boolean = true;

console.log('Welcome to the Dungeon!!');

GAME: while (running) {
  console.log(
    '─────────────────────────────────────────────────────────────────────────'
  );

  let enemyHealth: number = Math.ceil(Math.random() * maxEnemyHealth);
  let enemy: string = enemies[Math.ceil(Math.random() * enemies.length - 1)];

  console.log(`\t# ${enemy} has appeared #\n`);

  console.log(`\tYour HP: ${health}`);
  console.log(`\t${enemy}'s HP: ${enemyHealth}`);

  let whatWouldYouLikeToDo: any = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: ['Attack', 'Drink Health Potion', 'Run!'],
      default: 'Attack'
    },
  ]);

  while (enemyHealth > 0) {
    switch (whatWouldYouLikeToDo.action) {
      case 'Attack':
        let damageDealt: number = Math.ceil(Math.random() * attackDamage);
        let damageTaken: number = Math.ceil(Math.random() * enemyAttackDamage);

        enemyHealth -= damageDealt;
        health -= damageTaken;

        console.log(`\t> You strike the ${enemy} for ${damageDealt} damage.`);
        console.log(`\t> You recieve ${damageTaken} in retaliation!.`);

        if (health < 1) {
          console.log(
            `\t> You have taken too much damage, You are too weak to go on!`
          );
          break;
        }

        break;
      case 'Drink Health Potion':
        if (health == 100) {
          console.log(
            `\t> You already have a full health, you can't drink potion at the moment!`
          );
        } else if (numHealthPotions > 0) {
          health += healthPotionHealAmount;
          numHealthPotions--;
          console.log(
            `\t> You drink a health potion, healing yourself for ${healthPotionHealAmount}. \n\t> You now have ${health} HP. \n\t> You now have ${numHealthPotions} potions left!\n`
          );
        } else {
          console.log(`\t> You have no potions left! Defeat enemies to have a chance to get one!`)
        }
        break;
      case 'Run!':
        console.log(`\t> You run away from ${enemy}!`)
        continue GAME;
      default:
        console.log(`PLEASE SELECT A VALID OPTION!`)
        break;
    }

    whatWouldYouLikeToDo = await inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: ['Attack', 'Drink Health Potion', 'Run!'],
      },
    ]);
  }

  if (health < 1) {
    console.log(
      `\t> You limp out of the dungeon, weak from battle!`
    );
    break;
  }

  console.log(`# ${enemy} was defeated! #`)

  running = false;
}
