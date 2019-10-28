import { Component, OnInit } from "@angular/core";

@Component({
  selector: "buttons",
  templateUrl: "./buttons.component.html",
  styleUrls: ["./buttons.component.css"]
})
export class ButtonsComponent implements OnInit {
  buttonHeading: string = "Buttons";
  inactiveG: boolean = false;
  inactiveS: boolean = false;
  inactiveC: boolean = false;
  jokeHeading: string = "Jokes Below!"
  active: boolean = false;
  location: string = 'center';

  reactivate(){
    this.inactiveG= false;
    this.inactiveS= false;
    this.inactiveC= false;
  }

  shiftLocation(oldLocation: string) {
    while (this.location === oldLocation) {
       this.location = ['left', 'right', 'center'][Math.floor(Math.random()*3)];
    }
    return this.location;
 }


  constructor() {}

  ngOnInit() {}
}
