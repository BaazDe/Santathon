import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";



@NgModule({
  declarations: [AppComponent, HeaderComponent, FormulaireComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
          import { FormulaireComponent } from "./formulaire/formulaire.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
