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
    image: "assets/header-pic.png",
    yes_input: 0,
    no_input: 0
  };
  onSubmit($event) {
    $event.preventDefault();

    // form submitted
    console.log("form submitted");
    alert("Cadeau de merde ajouté");
    window.location.reload();
  }
  constructor() {}

  ngOnInit() {}
}
