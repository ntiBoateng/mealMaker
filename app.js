
let menu = {
  _courses: {
    'appetizers': [],
    'mains': [],
    'desserts': []
  },
  get appetizers(){},
  set appetizers(appetizerIn){},
  get mains(){},
  set mains(mainsIn){},
  get desserts(){},
  set desserts(dessertsIn){},

  get courses(){
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    };
  },
  addDishToCourse(courseName, dishName, dishPrice){
    const dish = {
      name: dishName,
      price: dishPrice
    };
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName){
    let dishes = this._courses[courseName];
    return dishes[Math.floor(Math.random()*dishes.length)];
  },

  generateRandomMeal: function(){
  const appetizer = this.getRandomDishFromCourse('appetizers');
  const main = menu.getRandomDishFromCourse('mains');
  const desserts = menu.getRandomDishFromCourse('desserts');
  const totalPrice = appetizer.price + desserts.price + main.price;

  return `Appetizer: ${appetizer.name}
  Main: ${main.name}
  Dessert: ${desserts.name}
  Total: $${totalPrice}`;
}
};
menu.addDishToCourse('appetizers', 'Salad', 4);
menu.addDishToCourse('mains', 'Rice and stew',12);
menu.addDishToCourse('desserts', 'oranges',3);
let meal = menu.generateRandomMeal();
console.log(meal);