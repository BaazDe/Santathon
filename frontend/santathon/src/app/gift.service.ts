import { Injectable } from "@angular/core";
import { GIFT } from "../mock-gift";
import { Gift } from "../gift";
import { Pokemon } from "../pokemon";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { HttpHeaders } from "@angular/common/http";

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

  private apiUrl = "http://localhost:8000/api/users.json";

  getGift(): Gift[] {
    return GIFT;
  }

  getPokemon(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.apiUrl);
  }
  newGift(newgift: Pokemon): Observable<Pokemon> {
    return this.http.post<Pokemon>(this.apiUrl, newgift, this.httpOptions);
  }
}
