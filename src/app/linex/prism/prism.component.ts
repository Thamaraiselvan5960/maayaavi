import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { HighlighterService } from '../../service/prism/highlighter.service';
@Component({
  selector: 'app-prism',
  templateUrl: './prism.component.html',
  styleUrls: ['./prism.component.css']
})
export class PrismComponent implements OnInit {

    component1 = '<pre><code> </code></pre>'
    pinstall = '<pre><code class="language-markup">npm install prismjs --save </code></pre>'
    json = '<pre><code class="language-json">...\n...\n"styles":\n[\n...\n...\n],\n"scripts": [\n\t...\n\t...\n\t"./node_modules/prismjs/prism.js"\n],\n...\n </code></pre>'
    stylescss = '<pre><code class="language-css">@import "~prismjs/plugins/toolbar/prism-toolbar.css";\n@import "~prismjs/themes/prism-okaidia";</code></pre>';
    service = "<pre><code class='language-typescript'>import { Injectable, Inject } from '@angular/core';\nimport { PLATFORM_ID } from '@angular/core';\nimport { isPlatformBrowser } from '@angular/common';\nimport 'prismjs';\nimport 'prismjs/components/prism-css';\nimport 'prismjs/components/prism-git'\nimport 'prismjs/components/prism-javascript';\nimport 'prismjs/components/prism-java';\nimport 'prismjs/components/prism-markup';\nimport 'prismjs/components/prism-typescript';\nimport 'prismjs/components/prism-sass';\nimport 'prismjs/components/prism-scss';\ndeclare var Prism: any;\n@Injectable()\nexport class HighlightService {\n\tconstructor(@Inject(PLATFORM_ID) private platformId: Object) {}\n highlightAll() {\n\tif (isPlatformBrowser(this.platformId)) {\n\tPrism.highlightAll();\n}\n}\n}\n</code></pre>";
    appmodule="<pre><code class='language-typescript'>import { HighlightService } from '../services/prismjs.service';\n...\n...\n...\n //mention service in providers array\n providers: [HighlightService]</code></pre>";
    component = "<pre><code class='language-typescript'>import { Component, OnInit, AfterViewChecked  } from '@angular/core';\nimport { HighlightService } from '../../../services/prismjs.service';\n@Component({\n selector: 'app-gitcommands',\ntemplateUrl: './gitcommands.component.html',\nstyleUrls: ['./gitcommands.component.css']\n})\nexport class GitcommandsComponent  {\n style = '&lt;pre&gt;&lt;code class='language-css'&gt;h1{&#92n&#92tfont-size:20px;&#92nfont-weight:700;&#92n}&lt;/code&gt;&lt;/pre&gt;'\\use &#92n and &#92t for next line and tab\n private highlighted: boolean = false\n\nconstructor(private highlightService: HighlightService) {}\n\nngAfterViewChecked() {\n\tif (!this.highlighted) {\n\t  this.highlightService.highlightAll()\n\t\tthis.highlighted = true\n\t}\n}\n\n </code></pre>";
    injuction = "<pre><code class='language-markup'>&lt;div [innerHTML]='style'&gt;&lt;/div&gt;</code></pre>";
    output = "<pre><code class='language-css'>h1{\n\tfont-size:20px;\nfont-weight:700;\n}\n</code></pre>";
    private highlighted: boolean = false
  constructor(private highlightService: HighlighterService) { }

  ngOnInit(): void {
  }
  ngAfterViewChecked() {
    if (!this.highlighted) {
      this.highlightService.highlightAll()
      this.highlighted = true
    }
  }
}








