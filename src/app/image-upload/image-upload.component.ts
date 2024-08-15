import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'image-upload',
  standalone: true,
  imports: [],
  templateUrl: './image-upload.component.html',
  styleUrl: './image-upload.component.scss'
})
export class ImageUploadComponent {

  public imgSrc:string = '/assets/imgs/replaceimg.png';

  @ViewChild('fileInput')
  public fileInput?:ElementRef<HTMLInputElement>;

  public openUploadModal() {
    this.fileInput?.nativeElement.click();
  }

  public async onFileChange(event:Event) {
    if (this.fileInput?.nativeElement.files?.length) {
      const file = this.fileInput.nativeElement.files[0];
      this.imgSrc = await this.getBase64(file);
    }
  }

  private getBase64(file:File) {
    return new Promise<string>((resolve, reject) => {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        resolve(<string>reader.result);
      };
      reader.onerror = function (error) {
        reject(error);
      };
    });
 }
}
