import { Component, OnInit } from "@angular/core";

import { UserService } from "../user.service";
import { User } from "../../user";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  users: User[] = [];
  constructor(private UserService: UserService) {}

  ngOnInit() {}

  title: string = "La caverne d'Alikaka";
  headerPic: string = "../assets/header-pic.png";
  displayModal: boolean = false;

  handleModal() {
    console.log("cliqué");
    return (this.displayModal = !this.displayModal);
  }

  addUser(email: string, pseudo: string, password: string): void {
    email = email.trim();
    pseudo = pseudo.trim();
    password = password.trim();
    if (!email || !pseudo || !password) {
      return;
    }
    this.UserService.addUser({ email, pseudo, password } as User).subscribe(
      user => {
        this.users.push(user);
        window.location.reload();
      }
    );
  }
}
