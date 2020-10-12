import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  message : string = "welcome"
  today : string = new Date().toLocaleDateString();
  user : any;
  @Input("name") userName : string;
  InputString : String ="Initial Value";
  constructor() {

    setInterval( () => { 
      let localtime = new Date();
      this.message = " changing welcome to new "+ localtime.toLocaleTimeString()
    }, 1000)
   
 
   }

  ngOnInit(): void {
    this.user = {
      firstName : this.userName,
      lastName : "Markonda",
      location : "Houston,Tx",
      phone : [ 1234567, 67899443]
  }
  }
    addTwoNumbers(a: number ,b: number){
      return a+b;
    }
}
