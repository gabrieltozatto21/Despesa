import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  template: `
	<ngx-spinner class="local" name="main" bdColor="rgba(255,255,255,0.9)" size="medium" color="#183884" [fullScreen]="true">
	</ngx-spinner><router-outlet></router-outlet>
	`,
  styleUrls: []
})

export class AppComponent {
  title = 'despesas';

  constructor(
    private readonly spinner: NgxSpinnerService
  ){}


}
