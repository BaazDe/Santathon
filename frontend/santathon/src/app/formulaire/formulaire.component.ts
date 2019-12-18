import { Component, OnInit } from "@angular/core";
import { NewGift } from "../newgift";
import { FormsModule } from "@angular/forms";
@Component({
  selector: "app-formulaire",
  templateUrl: "./formulaire.component.html",
  styleUrls: ["./formulaire.component.scss"]
})
export class FormulaireComponent implements OnInit {
  newgift: NewGift = {
    link: "lien lien",
    name: "nom nom nom",
    price: 59,
    description: "lorem ipsum une belle desciption de merde",
    image: "assets/header-pic.png"
  };
  onSubmit(e) {
    e.preventdefault();
    // form submitted
    console.log("form submitted");
  }
  constructor() {}

  ngOnInit() {}
}
