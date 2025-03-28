import { Component } from "@angular/core";
import { ButtonModule } from 'primeng/button';
@Component({
    selector: 'app-theme-button',
    imports: [ButtonModule],
    templateUrl: './theme-button.component.html',
    styleUrl: './theme-button.component.scss'
  })
  export class themeButtonComponent {
    toggleDarkMode(): void {
        const element = document.querySelector('html');
        if (element!==null){
        element.classList.toggle('my-app-dark');
        }
    }
  }
  