import { Component } from '@angular/core';
import { headerComponent } from "./ui/header/header/header.component";

@Component({
  selector: 'app-root',
  imports: [ headerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'scrumtro';
}
