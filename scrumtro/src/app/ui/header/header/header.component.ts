import { Component } from "@angular/core";
import { themeButtonComponent } from "../theme-button/theme-button.component";
import { ToolbarModule } from 'primeng/toolbar';
@Component({
    selector: 'app-header',
    imports: [themeButtonComponent, ToolbarModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
  })
  export class headerComponent {
  }
  