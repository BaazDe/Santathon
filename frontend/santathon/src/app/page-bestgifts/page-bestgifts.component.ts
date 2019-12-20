import { Component, OnInit } from "@angular/core";
import { GiftService } from "../gift.service";
import { Gift } from "../../gift";
import { Pokemon } from "../../pokemon";
import { NewPokemon } from "../../newPokemon";

@Component({
  selector: "app-page-bestgifts",
  templateUrl: "./page-bestgifts.component.html",
  styleUrls: ["./page-bestgifts.component.scss"]
})
export class PageBestgiftsComponent implements OnInit {
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
      .subscribe(pokemon => (this.pokemon = pokemon.splice(5, 3)));
  }

  reducePokemon(): void {}

  pokemon: Pokemon[];

  poke: NewPokemon[];

  gift: Gift[];
}
