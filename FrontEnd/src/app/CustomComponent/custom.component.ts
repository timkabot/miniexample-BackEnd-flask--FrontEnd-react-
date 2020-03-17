import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-custom-comp',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.less']
})

@Injectable()
export class CustomComponent {
  constructor(private http: HttpClient) { }
  title = 'Press button';

  tooltip = 'This is simple tooltip';
  @Output() customCLickButton = new EventEmitter();
  inputText = 'If you press button text and colors will change'

  private firstMicroserviceUrl = 'http://127.0.0.1:5000/'
  private timeUrl = this.firstMicroserviceUrl + 'time';
  private dateUrl = this.firstMicroserviceUrl + 'date';

  private secondMicroserviceUrl = 'http://127.0.0.1:228/'
  private colorsUrl = this.secondMicroserviceUrl + 'colors';

  getColors() {
    this.http.get<MyColors>(this.colorsUrl).subscribe(colorsObject => {
      this.log(colorsObject.background_color);

      let myDiv = document.getElementById('mainText');
      myDiv.style.color = colorsObject.font_color;
      myDiv.style.backgroundColor = colorsObject.background_color;
    })
  }

  getTime() {
    this.http.get<MyTime>(this.timeUrl).subscribe(timeObject => {
      this.log(timeObject.time);
    })
  }

  getDate() {
    this.http.get<MyDate>(this.dateUrl).subscribe(dateObject => {
      this.log(dateObject.date);
    })
  }

  getTimeAndDate(){
    this.http.get<MyTime>(this.timeUrl).subscribe(timeObject => {
      this.log(timeObject.time);
      this.http.get<MyDate>(this.dateUrl).subscribe(dateObject => {
        this.log(dateObject.date);
        this.inputText = dateObject.date.concat("  ").concat(timeObject.time).concat(" (UTC)");
      })
    })
  }

  log(value: any): void {
    console.log(value);
  }
  
  customClick():void {
    this.customCLickButton.emit("Custom click");
  }

}

class MyTime {
  id: BigInt;
  time : string;
}

class MyDate {
  id: BigInt;
  date : string;
}

class MyColors {
  id: BigInt;
  background_color : string;
  font_color : string;
}

