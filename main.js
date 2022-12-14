const pets = [
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
    },
    {
        id: 2,
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "http://www.jozilife.co.za/wp-content/uploads/The-Dino-Expo.jpg",
    },
    {
      id: 3,
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      id: 4,
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      id: 6,
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      id: 7,
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      id: 8,
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "https://gingerparrot.co.uk/wp/wp-content/uploads/2020/07/Celebrating-Redheads-photography.jpg"
    },
    {
      id: 9,
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      id: 10,
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      id: 11,
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "http://www.cantref.com/userfiles/events/walking%20dino.jpg?w=600"
    },
    {
      id: 12,
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      id: 13,
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "http://1kjkdg1axrkd2g03cnboj761.wpengine.netdna-cdn.com/wp-content/uploads/2017/12/braydon-anderson-105552-e1512684107659.jpg"
    },
    {
      id: 14,
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      id: 15,
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      id: 16,
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://images.readwrite.com/wp-content/uploads/2018/03/t-rex-dino-quiz-e1490854556549.jpg"
    },
    {
     id: 17,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven???t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "http://www.funnycatsite.com/pictures/Close_Up_Yawn.jpg"
    },
    {
      id: 18,
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "https://www.nation.co.ke/image/view/-/4078922/highRes/1742693/-/maxw/600/-/1453yvh/-/DINO.jpg"
    },
    {
      id: 19,
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "http://dailynewsdig.com/wp-content/uploads/2014/03/Creative-And-Funny-Dog-Stock-Photography-Pictures-2.jpg"
    },
    {
      id: 20,
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "http://www.funnycatsite.com/pictures/Lazy_White_Cat.jpg"
    },
    {
      id: 21,
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://img.buzzfeed.com/buzzfeed-static/static/2015-11/2/12/enhanced/webdr15/anigif_enhanced-29802-1446485228-10.gif?crop=250:165;0,0&downsize=715"
    },
    {
        id: 22,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "http://funnyanimalphoto.com/wp-content/uploads/2013/08/cat_caught_mouse_thegatewaypundit.jpg"
    },
    {
        id: 23,
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
        id: 24,
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "http://www.dogbreedplus.com/dog_breeds/images/basset-hound-4.jpg"
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "http://funbk.s3.amazonaws.com/wp-content/uploads/2016/06/funny-cat-video-which-will-make-you-laugh-louder.jpg"
    },
    {
        id: 26,
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
        id: 27,
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
        id: 28,
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
        id: 29,
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
        id: 30,
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn???t get weirded out by the word ???moist.???",
      type: "dino",
      imageUrl: "http://lsae2.iypcdn.com/static//modules/uploads/photos/language1/dino-live-22.jpg?119"
    }
  ];


const rootDiv = document.getElementById("root");

 for (let i=0; i<pets.length; i++) {
  
  const pet=pets[i];

  if (pet.type === 'cat') {
  
  
  const bootstrapCardString = `
  <div class="card">
    <h5 class="pet-name">${pet.name.toUpperCase()}</h5>
    <div><img src="${pet.imageUrl}" onerror="this.src='images/missingimg.jpeg'" class="img-fluid w-100" alt="a ${pet.type} you need to adopt"></div>
    <p class="list-group-item pet-color card">${pet.color}</p>
    <p class="list-group-item special-skill card">${pet.specialSkill}</p>
    <footer class="catFooter">${pet.type.toUpperCase()}</footer>
    <button class="btn btn-danger adopt-me" id="delete--${pets.id}">Please Take Me Home!</button>
  </div> 
  `;
  rootDiv.innerHTML+=bootstrapCardString;

  } else if (pet.type === 'dog') {

  const bootstrapCardString = `
  <div class="card">
    <h5 class="pet-name">${pet.name.toUpperCase()}</h5>
    <div><img src="${pet.imageUrl}" onerror="this.src='images/missingimg.jpeg'" class="img-fluid w-100" alt="a ${pet.type} you need to adopt"></div>
    <p class="list-group-item pet-color card">${pet.color}</p>
    <p class="list-group-item special-skill card">${pet.specialSkill}</p>
    <footer class="dogFooter">${pet.type.toUpperCase()}</footer>
    <button class="btn btn-danger adopt-me" id="delete--${pets.id}">Please Take Me Home!</button>
  </div> 
  `;
  rootDiv.innerHTML+=bootstrapCardString;

  } else if (pet.type === 'dino') {

    const bootstrapCardString = `
  <div class="card">
    <h5 class="pet-name">${pet.name.toUpperCase()}</h5>
    <div><img src="${pet.imageUrl}" onerror="this.src='images/missingimg.jpeg'" class="img-fluid w-100" alt="a ${pet.type} you need to adopt"></div>
    <p class="list-group-item pet-color card">${pet.color}</p>
    <p class="list-group-item special-skill card">${pet.specialSkill}</p>
    <footer class="dinoFooter">${pet.type.toUpperCase()}</footer>
    <button class="btn btn-danger adopt-me" id="delete--${pets.id}">Please Take Me Home!</button>
  </div>
  ` ;
  rootDiv.innerHTML+=bootstrapCardString;
  } else {
    domString += `
  <div class="card">
  <h5 class="pet-name">${pet.name.toUpperCase()}</h5>
  <div><img src="${pet.imageUrl}" onerror="this.src='images/missingimg.jpeg'" class="img-fluid w-100" alt="a ${pet.type} you need to adopt"></div>
  <p class="list-group-item pet-color card">${pet.color}</p>
  <p class="list-group-item special-skill card">${pet.specialSkill}</p>
  <footer class="defaultFooter">${pet.type.toUpperCase()}</footer>
  <button class="btn btn-danger adopt-me" id="delete--${pets.id}">Please Take Me Home!</button>
  </div> 
  `;
  }

 }

 //This shizzzzzzz be so ridiculous

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
}; //Renders pets to DOM

const cardsOnDom = (array) => {
  let domString = "";
  for (const pet of array) {
    
    if (pet.type === 'cat') {
    
    domString += `
    <div class="card">
    <h5 class="pet-name">${pet.name.toUpperCase()}</h5>
    <div><img src="${pet.imageUrl}" onerror="this.src='images/missingimg.jpeg'" class="img-fluid w-100" alt="a ${pet.type} you need to adopt"></div>
    <p class="list-group-item pet-color card">${pet.color}</p>
    <p class="list-group-item special-skill card">${pet.specialSkill}</p>
    <footer class="catFooter">${pet.type.toUpperCase()}</footer>
    <button class="btn btn-danger adopt-me" id="delete--${pet.id}">Please Take Me Home!</button>
    </div> 
    `;
    } else if (pet.type === 'dog') {

    domString += `
    <div class="card">
    <h5 class="pet-name">${pet.name.toUpperCase()}</h5>
    <div><img src="${pet.imageUrl}" onerror="this.src='images/missingimg.jpeg'" class="img-fluid w-100" alt="a ${pet.type} you need to adopt"></div>
    <p class="list-group-item pet-color card">${pet.color}</p>
    <p class="list-group-item special-skill card">${pet.specialSkill}</p>
    <footer class="dogFooter">${pet.type.toUpperCase()}</footer>
    <button class="btn btn-danger adopt-me" id="delete--${pet.id}">Please Take Me Home!</button>
    </div> 
    `;

    } else if (pet.type === 'dino') {

      domString += `
    <div class="card">
    <h5 class="pet-name">${pet.name.toUpperCase()}</h5>
    <div><img src="${pet.imageUrl}" onerror="this.src='images/missingimg.jpeg'" class="img-fluid w-100" alt="a ${pet.type} you need to adopt"></div>
    <p class="list-group-item pet-color card">${pet.color}</p>
    <p class="list-group-item special-skill card">${pet.specialSkill}</p>
    <footer class="dinoFooter">${pet.type.toUpperCase()}</footer>
    <button class="btn btn-danger adopt-me" id="delete--${pet.id}">Please Take Me Home!</button>
    </div> 
    `;

    } else {
      domString += `
    <div class="card">
    <h5 class="pet-name">${pet.name.toUpperCase()}</h5>
    <div><img src="${pet.imageUrl}" onerror="this.src='images/missingimg.jpeg'" class="img-fluid w-100" alt="a ${pet.type} you need to adopt"></div>
    <p class="list-group-item pet-color card">${pet.color}</p>
    <p class="list-group-item special-skill card">${pet.specialSkill}</p>
    <footer class="defaultFooter">${pet.type.toUpperCase()}</footer>
    <button class="btn btn-danger adopt-me" id="delete--${pet.id}">Please Take Me Home!</button>
    </div> 
    `;
    }
  }
  renderToDom("#root", domString);
} //Get each card on the DOM

const filter = (array, typeString) => {
  const typeArray = []; //Filters terms with specific type

  for (const member of array) {
    if (member.type === typeString) {
    typeArray.push(member);
  }
} //Goes through array and adds qualifying member to array

return typeArray;
}

const showCats = document.querySelector(".meow");
const showDogs = document.querySelector(".woof");
const showDino = document.querySelector(".roar");
const showAllPets = document.querySelector(".allPets");

showCats.addEventListener('click', () => {
  const kitties = filter(pets, 'cat');
  cardsOnDom(kitties);
})

showDogs.addEventListener('click', () => {
  const puppies = filter(pets, 'dog');
  cardsOnDom(puppies);
})

showDino.addEventListener('click', () => {
  const saurus = filter(pets, 'dino');
  cardsOnDom(saurus);
})

showAllPets.addEventListener('click', () => {
  cardsOnDom(pets);
})

// ADDING THE PETS

// select/target the form on the DOM
const form = document.querySelector('form');

// create a function that grabs all the values from the form
// pushes the new object to the array
// repaints the DOM with the new pet
const createPet = (e) => {
  e.preventDefault();
  const newPetObj = { //grabs the values
    id: pets.length + 1,
    name: document.querySelector("#name").value,
    color: document.querySelector("#color").value,
    specialSkill: document.querySelector("#specialSkill").value,
    type: document.querySelector("#type").value.toLowerCase(),
    imageUrl: document.querySelector("#imageUrl").value
  }

  pets.push(newPetObj); // pushes new object
  cardsOnDom(pets); // refreshes DOM with new pet
  form.reset(); // resets da form
}

// Add an event listener for the form submit
// Runs the function once you click Submit

form.addEventListener('submit', createPet);

// DELETE THE PETS

// Target the root div, create event Listener
const app = document.querySelector("#root");

// Add an event listener to compare clicks

app.addEventListener('click', (e) => {
  // check e.target.id includes "delete"
  if (e.target.id.includes("delete")) {       // target is button
    const [, id] = e.target.id.split("--");   // click is e (event)

    // add logic to remove from array
    const index = pets.findIndex(e => e.id === Number(id));
    pets.splice(index, 1); // bubbles

    // Reprint the DOM with const app = document.querySelector("#app");th the updated array
    cardsOnDom(pets);
  }
});

const startApp = () => {
  cardsOnDom(pets);
  events(); // ALWAYS LAST
}

startApp();
