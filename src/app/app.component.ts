import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SpidermanComponent } from '../Component/spiderman/spiderman.component';
import { IronmanComponent } from '../Component/ironman/ironman.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SpidermanComponent,IronmanComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'APIInt2';
}
