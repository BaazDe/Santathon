import { Component, OnInit } from "@angular/core";
import { GiftService } from "../gift.service";
import { Gift } from "../../gift";
import { Pokemon } from "../../pokemon";

@Component({
  selector: "app-object-card",
  templateUrl: "./object-card.component.html",
  styleUrls: ["./object-card.component.scss"]
})
export class ObjectCardComponent implements OnInit {
  constructor(private giftService: GiftService) {}

  ngOnInit() {
    this.getGift();
  }

  getGift(): void {
    this.gift = this.giftService.getGift();
  }

  getpokemon(): void {
    this.giftService
      .getPokemon()
      .subscribe(pokemon => (this.pokemon = pokemon));
  }

  pokemon: Pokemon[];

  gift: Gift[];
}
