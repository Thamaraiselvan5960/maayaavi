import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {

	title = "Theme Factory";
	titlebg = "#dadfea";
  constructor() { }
  ngOnInit(): void { 
	 
  }

	
}
