import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { HighlighterService } from '../../../service/prism/highlighter.service';

@Component({
  selector: 'app-boto-ec2',
  templateUrl: './boto-ec2.component.html',
  styleUrls: ['./boto-ec2.component.css']
})
export class BotoEc2Component implements OnInit {

	key_pair = '<pre><code class="language-python">import boto3\nec2=boto3.resource("ec2")\n\n#create a file to store the key locally\nfile = open("tomtheevilcat1.pem", "w")\n\n#call the boto ec2 function to create a key pair\nkey_pair = ec2.create_key_pair(KeyName = "tomtheevilcat1")\n\n#capture the key and store in a file\nkey_pair_out = str(key_pair.key_material)\nprint(key_pair_out)\nfile.write(key_pair_out)</code></pre>'
 	new_ec2_instance = "<pre><code class='language-python'>import boto3\nec2 = boto3.resource('ec2', region_name='us-east-1')\n\nopen('tomtheevilcat1.pem','r').read()\n#create a new ec2 instance\ninstances = ec2.create_instances(\n\tImageId='ami-0a4a70bd98c6d6441',\n\tMinCount=1,\n\tMaxCount=1,\n\tInstanceType='t2-micro',\n\tKeyName='SSH_filename' #enter your own file name\n)</code></pre>"
    ec2_status = "<pre><code class='language-python'>for status in ec2.meta.client.describe_instance_status()['InstanceStatuses']:\n\tprint(status) </code></pre>"
    ec2_running = '<pre><code class="language-python">#use filter() method to retrive all running EC2 instances\ninstances = ec2.instances.filter(\n\tFilters=[{"Name":"instance-state-name", "Values": ["running"]}])\nfor instance in instances:\n\tprint(instance.id, instance.instance_type)</code></pre>'

	start_or_stop_ec2= "<pre><code class='language-python'>#stop an instance\nec2.instances.filter(InstanceIds = 'id').stop()\n\n#terminating an instance\nec2.instances.filter(InstanceIds = 'id').terminate()</code></pre>"
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
