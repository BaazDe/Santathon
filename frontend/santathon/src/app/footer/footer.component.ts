import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  headerPic: string = "../assets/header-pic.png";
  fcb: string = "../assets/fcb_logo.svg";
  insta: string = "../assets/insta_logo.svg";
  twitter: string = "../assets/twitter_logo.svg";
}
