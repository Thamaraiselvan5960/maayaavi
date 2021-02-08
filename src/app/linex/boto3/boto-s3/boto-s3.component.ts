import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { HighlighterService } from '../../../service/prism/highlighter.service';


@Component({
  selector: 'app-boto-s3',
  templateUrl: './boto-s3.component.html',
  styleUrls: ['./boto-s3.component.css']
})
export class BotoS3Component implements OnInit {
  
  low_intro = "<pre><code class='language-python'>import boto3\n\n s3 = boto3.client('s3')\n#create a bucket\nnew_buc = s3.create_bucket(Bucket = 'tomtheevilcat', CreateBucketConfiguration={'LocationConstraint': 'ap-south-1'})\n\n# upload file\nfile =  s3.upload_file('test.txt','tomtheevilcat', 'test_file.txt')\n# s3.upload_file( file_name, bucket_name, key )\n\n# list bucket\nbucket_names = s3.list_buckets()\n\n# listout bucket names\nprint(bucket_names)</code></pre>"
  high_intro = "<pre><code class='language-python'>import boto3\n\ns3 = boto3.resource('s3')\n\n#create a bucket\nnew_buc = s3.create_bucket(Bucket = 'tomtheevilcat1', CreateBucketConfiguration={'LocationConstraint': 'ap-south-1'})\n\n# upload file\nmy_bucket = s3.Bucket(name = 'tomtheevilcat1')\nmy_bucket.upload_file('test.txt', 'demo_file.txt')\n# s3.upload_file( file_name, bucket_name, key )\n</code></pre>"

  constructor(private highlightService: HighlighterService) { }

  ngOnInit(): void {
  }

    private highlighted: boolean = false;

   ngAfterViewChecked() {
    if (!this.highlighted) {
      this.highlightService.highlightAll()
      this.highlighted = true
    }
  }
}
