export interface Plane {
  model: string;
  type: string;
}

export class FlightDetail {
  id: number = 0;
  flightNumber: string = '';
  departureDate: Date | null = null;
  arrivalLocation: string = '';
  departureLocation: string = '';
  plane: Plane = { model: '', type: '' };
}

export class UpsertFlightDetail {
    id: number = 0;
    flightNumber: string = '';
    departureDate: Date | null = null;
    arrivalLocation: string = '';
    departureLocation: string = '';
    planeId: number = 0;
  }
