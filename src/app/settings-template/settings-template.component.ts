import { Component } from '@angular/core';
import { ColorInputComponent } from '../color-input/color-input.component';
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatSliderModule} from '@angular/material/slider';
import { ImageUploadComponent } from '../image-upload/image-upload.component';


@Component({
  selector: 'app-settings-template',
  standalone: true,
  imports: [ColorInputComponent, MatCheckboxModule, MatSliderModule, ImageUploadComponent],
  templateUrl: './settings-template.component.html',
  styleUrl: './settings-template.component.scss'
})
export class SettingsTemplateComponent {

  formatLabel(value: number): string {
    if (value >= 8) {
      return Math.round(value / 1) + '';
    }

    return `${value}`;
  }

}
