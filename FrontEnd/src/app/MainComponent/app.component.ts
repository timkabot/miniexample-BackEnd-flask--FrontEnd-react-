import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'FrontEnd';
  tooltip = 'This is simple tooltip'

  @Input() value = 'Some two way data binding value'
  @Output() changed: EventEmitter<string> = new EventEmitter()

  log(): void{
    console.log(this.value)
  }
  someMethod(strValue:string){
    console.log(strValue)
    this.value = strValue
  } 
}
