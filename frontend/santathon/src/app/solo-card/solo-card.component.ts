import { Component, OnInit } from "@angular/core";
import { GiftService } from "../gift.service";
import { Pokemon } from "../../pokemon";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-solo-card",
  templateUrl: "./solo-card.component.html",
  styleUrls: ["./solo-card.component.scss"]
})
export class SoloCardComponent implements OnInit {
  constructor(
    private giftService: GiftService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getGiftById();
  }

  getGiftById(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.giftService.getGiftById(id).subscribe(gift => (this.gift = gift));
  }

  gift: Pokemon[];
}
