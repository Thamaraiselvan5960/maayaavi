import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { HighlighterService } from '../../../service/prism/highlighter.service';


@Component({
  selector: 'app-awsssh-login',
  templateUrl: './awsssh-login.component.html',
  styleUrls: ['./awsssh-login.component.css']
})
export class AwssshLoginComponent implements OnInit {

	pip3 = "<pre><code class='language-markup'>apt install python3-pip</code></pre>"
  constructor(private highlightService: HighlighterService) { }

  private highlighted: boolean = false;
  ngOnInit(): void {
  }

   ngAfterViewChecked() {
    if (!this.highlighted) {
      this.highlightService.highlightAll()
      this.highlighted = true
    }
  }

}
