import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <label>Faforite Color <input [(ngModel)]="favoriteColor" />{{ favoriteColor}}
  `,
})
export class AppComponent  {
  name = 'Angular';
  favoriteColor='';

}
