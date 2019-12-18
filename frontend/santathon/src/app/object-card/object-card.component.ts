import { Component, OnInit } from "@angular/core";
import { GiftService } from "../gift.service";
import { Gift } from "../../gift";

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

  gift: Gift[];
}
