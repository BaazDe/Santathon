import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  title: string = "La caverne d'Alikaka";
  headerPic: string = "../assets/header-pic.png";
}
