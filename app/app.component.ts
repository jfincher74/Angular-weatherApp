import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent { 
  search:string = "";

  onClear(){
    this.search = ""
  }

  onSubmit(){
    alert(`You searched for ${this.search}!`)
  }
}
