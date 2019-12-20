import { Component, OnInit } from "@angular/core";
import { NewGift } from "../newgift";
import { GiftService } from "../gift.service";
import { FormsModule } from "@angular/forms";
import { Pokemon } from "../../pokemon";

@Component({
  selector: "app-formulaire",
  templateUrl: "./formulaire.component.html",
  styleUrls: ["./formulaire.component.scss"]
})
export class FormulaireComponent implements OnInit {
  constructor(private giftService: GiftService) {}

  newgift: NewGift = {
    id: 0,
    name: "Le cadeau de merde",
    price: 0,
    image: "../assets/header-pic.png",
    vote: [],
    comments: [],
    description: "une belle description de merde"
  };
  pushnewGift: [] = [];

  onSubmit(
    $event,
    id: number,
    name: string,
    price: number,
    image: string,
    vote: [],
    comments: [],
    description: string
  ) {
    $event.preventDefault();

    // if (!image || !name) {
    //   return;
    // }
    this.giftService
      .newGift({
        id,
        name,
        price,
        image,
        vote,
        comments,
        description
      } as NewGift)
      .subscribe(gift => {
        this.pushnewGift.push(gift);
      });
  }
  // form submitted

  ngOnInit() {}
}
