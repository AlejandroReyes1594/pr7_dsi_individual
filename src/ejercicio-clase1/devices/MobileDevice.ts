import { Observer } from "../models/Observer.js";

export class MobileDevice implements Observer {
  constructor(private name: string) {}

  update(event: string, data: string | number | object): void {
    console.log(` [${this.name}] Notificación recibida: ${event} - ${JSON.stringify(data)}`);
  }
}
