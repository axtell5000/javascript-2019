const restaurant = {
  name: 'Cape Town Fish Market',
  guestCapacity: 75,
  guestCount: 0,
  seatParty: function (partysize) {
    this.guestCount = this.guestCount + partysize;
  },
  removeParty: function (partysize) {
    this.guestCount = this.guestCount - partysize;

    if (this.guestCount < 0) {
      this.guestCount = 0;
    }
  },
  checkAvailability: function (partysize) {
    const seatsLeft = this.guestCapacity - this.guestCount;
    return partysize <= seatsLeft;
  }
};

const status = restaurant.checkAvailability(5);
console.log(status);
