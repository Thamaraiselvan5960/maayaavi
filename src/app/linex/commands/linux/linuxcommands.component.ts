import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linuxcommands',
  templateUrl: './linuxcommands.component.html',
  styleUrls: ['./linuxcommands.component.css']
})
export class LinuxcommandsComponent implements OnInit {

	primary = '#1f85de';
	secondary = '#dadfea';
	button = '#de781f';

  constructor() { }

  ngOnInit(): void {
  }

}
