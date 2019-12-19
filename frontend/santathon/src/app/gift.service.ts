import { Injectable } from "@angular/core";
import { GIFT } from "../mock-gift";
import { Gift } from "../gift";
import { Pokemon } from "../pokemon";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class GiftService {
  constructor(private http: HttpClient) {}

  private pokemonUrl = "http://localhost:4000/child";

  getGift(): Gift[] {
    return GIFT;
  }

  getPokemon(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.pokemonUrl);
  }
}
