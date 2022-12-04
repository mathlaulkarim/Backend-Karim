//import data animals
const animals = require("./data.js");

//membuat fungsi index
const index = () => {
    for (const animal of animals) {
        console.log(animal);
    }
};

//membuat fungsi store
const store = (name) => {
    animals.push(name);
    index();
};

index();

//export method index dan store
module.exports = {index, store};
