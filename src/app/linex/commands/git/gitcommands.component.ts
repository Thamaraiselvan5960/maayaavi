import { Component, OnInit, AfterViewChecked  } from '@angular/core';
import { HighlighterService } from '../../../service/prism/highlighter.service';

@Component({
  selector: 'app-gitcommands',
  templateUrl: './gitcommands.component.html',
  styleUrls: ['./gitcommands.component.css']
})

export class GitcommandsComponent  {
  init = "<pre><code class='language-markup'>git init</code></pre>"
  remote = "<pre><code class='language-markup'>git remote add origin remote_url</code></pre>"
  clone = "<pre><code class='language-markup'>git clone remote_repo_url</code></pre>"
  branch_clone = "<pre><code class='language-css'>git clone --branch branch_name remote_repo_url</code></pre>"
  add = "<pre><code class='language-markup'>git add.</code></pre>"
  commit = "<pre><code class='language-markup'>git commit -m 'commit meaasge'</code></pre>"
  commitamend = "<pre><code class='language-markup'>git commit --amend -m 'commit meaasge' </code></pre>"
  push = "<pre><code class='language-markup'>git push origin master</code></pre>"
  status = "<pre><code class='language-markup'>git status</code></pre>"
  pull = "<pre><code class='language-markup'>git pull origin master</code></pre>"

  html = "<pre><code class='language-css'></code></pre>"
  private highlighted: boolean = false

  constructor(private highlightService: HighlighterService) {}

  ngAfterViewChecked() {
    if (!this.highlighted) {
      this.highlightService.highlightAll()
      this.highlighted = true
    }
  }
}
