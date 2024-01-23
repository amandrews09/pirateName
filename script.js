// Pirate name generator function
function generatePirateName() {
  const pirateAdjectives = ['Blackbeard', 'Scurvy', 'Rum-soaked', 'Cutlass-wielding', 'Sea-drenched'];
  const pirateNouns = ['Sparrow', 'Sea Dog', 'Buccaneer', 'Swashbuckler', 'Scallywag'];

  const randomAdjective = pirateAdjectives[Math.floor(Math.random() * pirateAdjectives.length)];
  const randomNoun = pirateNouns[Math.floor(Math.random() * pirateNouns.length)];

  return `${randomAdjective} ${randomNoun}`;
}

// Event listener for the button
document.getElementById('generateBtn').addEventListener('click', function() {
  const generatedName = generatePirateName();
  document.getElementById('result').innerText = `Your Pirate Name: ${generatedName}`;
});
// Pirate name generator function based on the user's birth month and eye color
function generatePirateNameByMonthAndEyeColor(month, eyeColor) {
  const pirateNamesByMonth = {
      'January': ['Frosty', 'Blizzard', 'Icy', 'Snowy', 'Freezing'],
      'February': ['Heartless', 'Cupid', 'Lovestruck', 'Romantic', 'Passionate'],
      'March': ['Stormy', 'Windy', 'Gusty', 'Rainy', 'Thunder'],
      'April': ['Blossom', 'Raindrop', 'Petal', 'Sunshine', 'Blooming'],
      'May': ['Mystic', 'Enchanted', 'Magical', 'Whimsical', 'Charmed'],
      'June': ['Sunny', 'Breezy', 'Beachy', 'Sandy', 'Wave'],
      'July': ['Firecracker', 'Sparkler', 'Independence', 'Patriot', 'Freedom'],
      'August': ['Blazing', 'Hotshot', 'Sizzling', 'Sunburned', 'Scorched'],
      'September': ['Harvest', 'Autumn', 'Falling', 'Crispy', 'Maple'],
      'October': ['Spooky', 'Pumpkin', 'Haunted', 'Witchy', 'Ghoul'],
      'November': ['Frosty', 'Turkey', 'Harvest', 'Pilgrim', 'Grateful'],
      'December': ['Frosty', 'Snowflake', 'Jolly', 'Festive', 'Gifted']
  };

  const namesForSelectedMonth = pirateNamesByMonth[month];

  if (!namesForSelectedMonth) {
      return 'Invalid month';
  }

  const randomAdjective = namesForSelectedMonth[Math.floor(Math.random() * namesForSelectedMonth.length)];
  const eyeColorPrefix = capitalizeFirstLetter(eyeColor);

  return `${randomAdjective} ${eyeColorPrefix}-eyed Pirate`;
}

// Function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Event listener for the button
document.getElementById('generateBtn').addEventListener('click', function() {
  const birthMonth = prompt('Enter the month you were born (e.g., January):');
  const eyeColor = prompt('Enter your eye color:');
  const generatedName = generatePirateNameByMonthAndEyeColor(birthMonth, eyeColor);
  
  if (generatedName === 'Invalid month') {
      alert('Invalid month. Please enter a valid month.');
  } else {
      document.getElementById('result').innerText = `Your Pirate Name: ${generatedName}`;
  }
});
