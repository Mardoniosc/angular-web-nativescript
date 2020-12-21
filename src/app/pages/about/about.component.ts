import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  imagePath = "assets/logo-my-movies.png";
  title = "Projeto criado no curso";
  courseName = "Apps Web e Mobile num só projeto com Angular e NativeScript";
  description =
    "Desenvolva Aplicativos Web e Mobile (Android e ios) compartilhando e reaproveitando 70% do codigo fonte no mesmo projeto";
  buttonText = "SAIBA MAIS";

  constructor() {}

  ngOnInit() {}
}
