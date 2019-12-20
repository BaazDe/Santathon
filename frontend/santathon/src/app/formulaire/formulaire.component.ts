import { Component, OnInit } from "@angular/core";
import { NewGift } from "../newgift";
import { GiftService } from "../gift.service";
import { FormsModule } from "@angular/forms";
import { Pokemon } from "../../pokemon";
import { Gift } from "../../gift";

@Component({
  selector: "app-formulaire",
  templateUrl: "./formulaire.component.html",
  styleUrls: ["./formulaire.component.scss"]
})
export class FormulaireComponent implements OnInit {
  constructor(private giftService: GiftService) {}

  newgift: NewGift = {
    name: "Le cadeau de merde",
    price: 0,
    image: "../assets/header-pic.png",
    description: "une belle description de merde"
  };
  pushnewGift: NewGift[] = [];

  onSubmit(
    $event,
    name: string,
    price: number,
    image: string,
    description: string
  ) {
    $event.preventDefault();

    // if (!image || !name) {
    //   return;
    // }
    this.giftService
      .newGift({
        name,
        price,
        image,
        description
      } as NewGift)
      .subscribe(newGift => {
        this.pushnewGift.push(newGift);
        alert("Cadeau de merde ajouté");
        window.location.reload();
      });
  }
  // form submitted

  ngOnInit() {}
}
