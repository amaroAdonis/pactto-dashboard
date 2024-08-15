import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { AppComponent } from '../app.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-view-template',
  standalone: true,
  imports: [MenuComponent, RouterOutlet],
  templateUrl: './view-template.component.html',
  styleUrl: './view-template.component.scss'
})
export class ViewTemplateComponent {

}
