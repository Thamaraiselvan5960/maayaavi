import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	title = 'Toms tutorial';
	mode:any = 'over';
	
	
}

@Component({
  selector: 'app-nav',
  templateUrl: './app.nav.html',
  styleUrls: ['./app.component.css']
})
export class AppNav {

	
}