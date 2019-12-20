import { Component, OnInit } from "@angular/core";
import { GiftService } from "../gift.service";
import { Gift } from "../../gift";
import { Pokemon } from "../../pokemon";

@Component({
  selector: "app-page-newgifts",
  templateUrl: "./page-newgifts.component.html",
  styleUrls: ["./page-newgifts.component.scss"]
})
export class PageNewgiftsComponent implements OnInit {
  constructor(private giftService: GiftService) {}

  ngOnInit() {
    this.getpokemon();
  }

  getGift(): void {
    this.gift = this.giftService.getGift();
  }

  getpokemon(): void {
    this.giftService
      .getPokemon()
      .subscribe(pokemon => (this.pokemon = pokemon.splice(1, 5)));
  }

  reducePokemon(): void {}

  pokemon: Pokemon[];

  gift: Gift[];
}
