import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	title = 'Toms tutorial';
	mode:any = 'over';
	primary = '#1f85de';
	secondary = '#dadfea';
	button = '#de781f';
}
