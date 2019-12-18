import { Injectable } from "@angular/core";
import { GIFT } from "../mock-gift";
import { Gift } from "../gift";

@Injectable({
  providedIn: "root"
})
export class GiftService {
  constructor() {}

  getGift(): Gift[] {
    return GIFT;
  }
}
