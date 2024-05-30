export class Event {
    constructor(id, title, category, homeCountry, awayCountry, date, time) {
      this._id = id || null;
      this.title = title || '';
      this.category = category;
      this.homeCountry = homeCountry;
      this.awayCountry = awayCountry;
      this.date = date;
      this.time = time;
    }
  }