export class SoccerEvent {
    constructor(id, description, homeLogo, awayLogo, homeTeam, awayTeam, date, time, eventLogo) {
      this._id = id || null;
      this.description = description || '';
      this.homeLogo = homeLogo;
      this.awayLogo = awayLogo;
      this.homeTeam = homeTeam;
      this.awayTeam = awayTeam;
      this.date = date;
      this.time = time;
      this.eventLogo = eventLogo;
    }
  }

  export class Location {
    constructor(id, name, mapsLink, websiteLink, phoneNumber, seats, ticketRequired, reservationRequired, image, latitude, longitude) {
      this._id = id || null;
      this.name = name || '';
      this.mapsLink = mapsLink || '';
      this.websiteLink = websiteLink || '';
      this.phoneNumber = phoneNumber || '';
      this.seats = seats || '';
      this.ticketRequired = ticketRequired || '';
      this.reservationRequired = reservationRequired || '';
      this.image = image || '';
      this.latitude = latitude || '';
      this.longitude = longitude || '';
    }
  }