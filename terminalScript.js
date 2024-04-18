const terminal = document.querySelector('.terminal');
const input = document.querySelector('.input');
const output = document.querySelector('.output');

// ASCII art to display when the page is loaded
const asciiArt = `
█████╗ ██████╗ ██████╗  █████╗ 
██╔══██╗██╔══██╗██╔══██╗██╔══██╗
███████║██████╔╝██████╔╝███████║
██╔══██║██╔══██╗██╔══██╗██╔══██║
██║  ██║██████╔╝██║  ██║██║  ██║
╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝

`;

// Function to display ASCII art when the page is loaded
function displayAsciiArt() {
  const div = document.createElement('pre');
  div.textContent = asciiArt;
  output.appendChild(div);
}

// Call the function to display ASCII art when the page is loaded
displayAsciiArt();

input.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    const command = input.value.trim();
    handleCommand(command);
    input.value = '';
  }
});

function handleCommand(command) {
  const args = command.split(' ');
  const cmd = args.shift();

  switch (cmd) {
    case 'help':
      outputCommand('Available commands: \n\thelp ..........Displays this help message \n\twhois ..........Displays a brief text about me \n\tskills ..........Displays my skills \n\tcontact ..........Displays my Email address \n\twhy ..........Displays a message explaining why \n\tclear ..........Clears the screen');
      break;
    case 'whois':
      outputCommand(`Greetings! I'm Abraham a dedicated back-end developer with a passion for crafting robust and efficient digital solutions. With a focus on: \n\t*JavaScript/NodeJs with ExpressJs \n\t*PHP with the Laravel Framework \nI thrive on turning complex challenges into streamlined, scalable systems.`);
      break;
    case 'name':
        outputCommand(`Abraham William Mbuli`);
        break;
    case 'skills':
        outputCommand(`\t*API Development \n\t*Programming(JavaScript, Python, Java, C++, C, PHP) \n\t*Database Management(SQL & NoSQL Databases) \n\t*Data Authentication and Encryption \n\t*IoT Development`);
        break;
    case 'contact':
      outputCommand('You can contact me at abraham.mbuli20@gmail.com');
      break;
    case 'why':
        outputCommand(`Well mainly because I can, but also I wanted to create a fun and engaging way to get to know me a little better, also as a backend developer who mostly interact with the terminal, I feel like interacting with the terminal tends to be more fun than the GUI, at least for me so I decided to put this as an option for anyone who might feel the same way :)`);
        break;
    case 'clear':
      clearOutput();
      break;
    default:
      outputCommand(`Command not found: ${command}`);
  }
}

function outputCommand(message) {
    const div = document.createElement('div');
    const promptSpan = document.createElement('span');
    const inputSpan = document.createElement('span');
    const introSpan = document.createElement('span');
    const messageSpan = document.createElement('span');
  
    promptSpan.textContent = 'guest@term$ ';
    promptSpan.style.color = '#7FFF00'; 
  
    inputSpan.textContent = input.value;
    inputSpan.style.color = '#00FFFF'; 

    introSpan.textContent = '└─>';
    promptSpan.style.color = '#7FFF00';
  
    messageSpan.textContent = message;
    messageSpan.style.color = '#FFFFFF';
  
    div.appendChild(promptSpan);
    div.appendChild(inputSpan);
    div.appendChild(document.createElement('br'));
    div.appendChild(document.createTextNode('\u00A0'));
    div.appendChild(introSpan);
    div.appendChild(messageSpan);
    div.appendChild(document.createElement('br'));
    console.log(input.value);
    output.appendChild(div);
    terminal.scrollTop = terminal.scrollHeight;
}

function displayCV() {
    const cvText = `
  Name: Abraham William Mbuli
  Location: Example City
  Experience: Back-end Developer
  Skills: JavaScript/Node.js, PHP/Laravel, MySQL, MongoDB
  `;
  
    outputCommand(cvText);
  }

function clearOutput() {
    output.innerHTML = ''; 
}