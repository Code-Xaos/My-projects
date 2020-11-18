const refery_click_button = document.getElementById('restart-btn');

const character_attack = document.getElementById('character-btn-kick');
const enemy_attack = document.getElementById('enemy-btn-kick');


function disablefirstbutton() {
    document.getElementById("character-btn-kick").disabled = true;
    document.getElementById("enemy-btn-kick").disabled = false;
}

function disablesecondbutton() {
    document.getElementById("enemy-btn-kick").disabled = true;
    document.getElementById("character-btn-kick").disabled = false;
}

const refery = {
    element: document.getElementById('refery'),
    name: 'Refery',
    winner_name: document.getElementById('winner_name'),
}


const character = {
    name: 'Spider Man',
    max_health: 100,
    current_health: 100,
    health: document.getElementById('health-character'),
    progress_bar: document.getElementById('progressbar-character')
}

const enemy = {
    name: 'Venom',
    max_health: 100,
    current_health: 100,
    health: document.getElementById('health-enemy'),
    progress_bar: document.getElementById('progressbar-enemy')
}

refery_click_button.addEventListener('click', () => {
    location.reload();
})

    

character_attack.addEventListener('click', () => {
    changeScore(random(20), enemy)
})


enemy_attack.addEventListener('click', () => {
    changeScore(random(20), character)
})

const init = () => {
    refery.element.style.display = 'none';
  
   
    renderPlayer(character)
    renderPlayer(enemy)
    random(15)
}

const renderPlayer = person => {
    renderScore(person)
    renderProgressbar(person)
}

const renderScore = person => {
    person.health.innerText = person.current_health + ' / ' + person.max_health
}

const renderProgressbar = person => {
    person.progress_bar.style.width = person.current_health + '%'
}

const changeScore = (count, person) => {
    if (person.current_health < count) {
        person.current_health = 0
        refery.element.style.display = 'block';
         
        if (person.name == 'Spider Man' ) Scoreboard =  'Spidey lost';
        else Scoreboard = 'Spidey won';
        
        refery.winner_name.innerHTML = Scoreboard ;
        
      
        character_attack.setAttribute("disabled", true);
        enemy_attack.setAttribute("disabled", true);
    } else {
        person.current_health -= count
    }
    renderPlayer(person)
}

const random = num => {
    return Math.ceil(Math.random() * num)
}

init()