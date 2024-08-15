import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, NgModel, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'color-input',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './color-input.component.html',
  styleUrl: './color-input.component.scss'
})
export class ColorInputComponent {
  public focused: boolean = false;

  public color:FormControl = new FormControl();

  @Input()
  public label?:string;

  @Input()
  public set inputValue(value: string) {
    this.color.setValue(value);
  }

  public onFocus(event:Event) {
    console.log('on focus');
    this.focused = true;
  }

  public onFocusOut(event:Event) {
    this.focused = false;
  }

}
