// Getter and setter does something automatically when we get or set a property of an object
// Big nb, location is a data prop, although in a way it does look like a method
// _location is a temporary data for that setter

const data = {
  locations: [],
  get location() {
    return this._location;
  },

  set location(value) {
    this._location = value.trim(); // setting
    this.locations.push(this._location); // setting
  }
};

// working with the data
data.location = '  Cape Town  ';
data.location = '  Durban';

console.log(data.location);
console.log(data.locations);
