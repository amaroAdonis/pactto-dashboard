import { Component} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ImageUploadComponent } from '../image-upload/image-upload.component';
@Component({
  selector: 'app-profile-template',
  standalone: true,
  imports: [MatSelectModule, MatInputModule, FormsModule, ImageUploadComponent],
  templateUrl: './profile-template.component.html',
  styleUrl: './profile-template.component.scss'
})
export class ProfileTemplateComponent {

}
