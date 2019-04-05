import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent { 
  search:number = null;

  onClear(){
    this.search = null
  }

  onSubmit(){
    if(this.search < 10000 || this.search > 99999){
      alert('Please enter a 5 Digit Zip Code')
    } else {
      alert(`You searched for ${this.search}!`)
    }
  }
}
