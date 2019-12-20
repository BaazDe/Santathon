import { Injectable } from "@angular/core";
import { GIFT } from "../mock-gift";
import { Gift } from "../gift";
import { Pokemon } from "../pokemon";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { HttpHeaders } from "@angular/common/http";
import {NewGift} from "./newgift";

@Injectable({
  providedIn: "root"
})
export class GiftService {
  private httpOptions = {
    headers: new HttpHeaders({
      "Content-type": "application/json",
      Authorization: "my-auth-token"
    })
  };

  constructor(private http: HttpClient) {}

  private apiUrl = "http://localhost:8000/api/gifts.json";

  getGift(): Gift[] {
    return GIFT;
  }

  getPokemon(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.apiUrl);
  }
  newGift(newgift: NewGift): Observable<NewGift> {
    return this.http.post<NewGift>(this.apiUrl, newgift, this.httpOptions);
  }
}
