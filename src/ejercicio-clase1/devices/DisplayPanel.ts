import { Observer } from "../models/Observer.js";

export class DisplayPanel implements Observer {
  constructor(private location: string) {}

  update(event: string, data: string | number | object): void {
    console.log(`[Panel en ${this.location}] Evento: ${event} - ${JSON.stringify(data)}`);
  }
}
