import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent { 
  isInvalid:boolean = true;
  search:string = "";

  onClear(){
    this.search = ""
  }

  onSubmit(){
    debugger
    if(this.search.length < 5){
      alert('Please enter a 5 Digit Zip Code')
    } else {
    alert(`You searched for ${this.search}!`)
    }
  }
}
