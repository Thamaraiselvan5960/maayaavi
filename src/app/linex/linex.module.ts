import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinuxcommandsComponent } from './commands/linux/linuxcommands.component';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { GitcommandsComponent } from './commands/git/gitcommands.component';
import { AwsComponent } from './aws/aws.component';
import { SshComponent } from './ssh/ssh.component';
import { MatChipsModule } from '@angular/material/chips';


import { PrismComponent } from './prism/prism.component';
import { HighlighterService } from '../service/prism/highlighter.service';
import { ElectronjsComponent } from './electronjs/electronjs.component';
import { ThemeComponent } from './theme/theme.component';
import { Boto3Component } from './boto3/boto3.component';
import { AwsintroComponent } from './aws/awsintro/awsintro.component';
import { AwssshLoginComponent } from './aws/awsssh-login/awsssh-login.component';
import { BotoS3Component } from './boto3/boto-s3/boto-s3.component';
import { BotoEc2Component } from './boto3/boto-ec2/boto-ec2.component';
import { AwsServicesComponent } from './aws/aws-services/aws-services.component';
import { AwsSecurityComponent } from './aws/aws-security/aws-security.component';
import { LaptopComponent } from './laptop/laptop.component';
@NgModule({
  declarations: [LinuxcommandsComponent, GitcommandsComponent, AwsComponent, SshComponent, PrismComponent, ElectronjsComponent, ThemeComponent, Boto3Component, AwsintroComponent, AwssshLoginComponent, BotoS3Component, BotoEc2Component, AwsServicesComponent, AwsSecurityComponent, LaptopComponent],
  imports: [
	  CommonModule, MatButtonModule, MatToolbarModule, MatCardModule, MatSidenavModule, MatFormFieldModule,
	  MatInputModule, FormsModule, MatChipsModule
  ],
  providers: [HighlighterService]
})
export class LinexModule { }
