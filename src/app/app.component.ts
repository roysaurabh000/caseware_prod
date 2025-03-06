import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Import RouterModule

@Component({
  standalone: true,
  selector: 'app-root',
  // Add RouterModule to the component's imports array
  imports: [RouterModule],
  template: `<router-outlet></router-outlet>`,
  styles: []
})
export class AppComponent { }