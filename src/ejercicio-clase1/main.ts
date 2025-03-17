import { WeatherStation } from "../models/WeatherStation.js";
import { WeatherEvent } from "../models/WeatherEvent.js";
import { MobileDevice } from "../devices/MobileDevice.js";
import { DisplayPanel } from "../devices/DisplayPanel.js";

const station = new WeatherStation();

const phone = new MobileDevice("iPhone de Geralt");
const panel = new DisplayPanel("Kaer Morhen");

station.addObserver(phone);
station.addObserver(panel);

station.notify(new WeatherEvent("Tormenta", "Se acerca una tormenta eléctrica."));
station.notify(new WeatherEvent("Temperatura", "Temperatura bajando a -10°C"));
