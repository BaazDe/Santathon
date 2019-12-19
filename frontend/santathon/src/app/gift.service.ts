import { Injectable } from "@angular/core";
import { GIFT } from "../mock-gift";
import { Gift } from "../gift";
import Axios from "axios";

@Injectable({
  providedIn: "root"
})
export class GiftService {
  constructor() {}

  getGift(): Gift[] {
    return GIFT;
  }

  getpokemon() {
    Axios.get("https://pokeapi.co/api/v2/pokemon").then(res => res.data[0]);
  }
}
