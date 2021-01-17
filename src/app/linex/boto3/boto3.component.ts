import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { HighlighterService } from '../../service/prism/highlighter.service';

@Component({
  selector: 'app-boto3',
  templateUrl: './boto3.component.html',
  styleUrls: ['./boto3.component.css']
})
export class Boto3Component implements OnInit {

	botoinstall = "<pre><code class='language-markup'>pip install boto3</code></pre>"
	credentials = "<pre><code class='language-markup'>[default]\naws_access_key_id = YOUR_ACCESS_KEY\naws_secret_access_key = YOUR_SECRET_KEY</code></pre>"
	location = "<pre><code class='language-markup'>[default]\nregion = us-east-1</code></pre>"
	tree = "<pre><code class='language-markup'>.aws --> folder name\n |--credentials -->filename without any extension \n |--config -->filename without any extension</code></pre>"
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
