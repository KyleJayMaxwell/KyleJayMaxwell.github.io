import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="box">
    <div class="vertcenter">
      <h1 class="center">Hello {{name}}'s site is currently down for maintence.</h1>
      <p class="center">Please come back soon!</p>
    </div>
  </div>
`,
})
export class AppComponent  { name = 'Kyle'; }
