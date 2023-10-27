import inquirer from 'inquirer';

const formatTimeDifference = (ms: number): string => {
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  return `${hours}h ${minutes % 60}m ${seconds % 60}s`;
};

const startCountdown = async () => {
  const { duration } = await inquirer.prompt([
    {
      type: 'number',
      name: 'duration',
      message: 'Enter the countdown duration in seconds:',
    },
  ]);

  const startTime = Date.now();
  const targetTime = startTime + duration * 1000;

  const intervalId = setInterval(() => {
    const now = Date.now();
    const timeDifference = targetTime - now;
    const formattedTime = formatTimeDifference(timeDifference);

    console.clear();
    console.log(`Countdown Timer:`);
    console.log(`Target Time: ${new Date(targetTime).toLocaleString()}`);
    console.log(`Current Time: ${new Date(now).toLocaleString()}`);
    console.log(`Time Remaining: ${formattedTime}`);

    if (now >= targetTime) {
      console.log('Countdown Finished!');
      clearInterval(intervalId);
      process.exit(0)
    }
  }, 1000);
};

const main = async () => {
  console.log('Welcome to the Countdown Timer!');
  while (true) {
    const { action } = await inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: 'Choose an action:',
        choices: ['Start Countdown', 'Exit'],
      },
    ]);

    if (action === 'Exit') {
      break; // Exit the main loop if 'Exit' is selected.
    } else {
      await startCountdown();
    }
  }
  console.log('Goodbye!');
};

main();
