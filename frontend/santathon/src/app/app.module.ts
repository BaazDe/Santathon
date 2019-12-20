import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { FormulaireComponent } from "./formulaire/formulaire.component";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { ObjectCardComponent } from "./object-card/object-card.component";
import { HttpClientModule } from "@angular/common/http";
import { SoloCardComponent } from "./solo-card/solo-card.component";

const appRoutes: Routes = [
  { path: "addagift", component: FormulaireComponent },
  { path: "home", component: ObjectCardComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "solocard", component: SoloCardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormulaireComponent,
    ObjectCardComponent,
    SoloCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
