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

  private apiUrl = "http://localhost:8000/api/gifts.json";

  getGift(): Gift[] {
    return GIFT;
  }

  getPokemon(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.apiUrl);
  }

  getGiftById(id: number): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(
      `http://localhost:8000/api/gifts/${id}.json`
    );
  }
}
