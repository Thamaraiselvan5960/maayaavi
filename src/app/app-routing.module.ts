import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThemeComponent } from './linex/theme/theme.component';
import { AppComponent } from './app.component';
import { LinuxcommandsComponent } from './linex/commands/linux/linuxcommands.component';
import { GitcommandsComponent } from './linex/commands/git/gitcommands.component';
import { AwsComponent } from './linex/aws/aws.component';
import { AwsintroComponent } from './linex/aws/awsintro/awsintro.component';
import { AwssshLoginComponent } from './linex/aws/awsssh-login/awsssh-login.component';

import { SshComponent } from './linex/ssh/ssh.component';
import { PrismComponent } from './linex/prism/prism.component';
import { ElectronjsComponent } from './linex/electronjs/electronjs.component'
import { Boto3Component } from './linex/boto3/boto3.component';
const routes: Routes = [
	// { path: 'home', component: AppComponent },
	{ path: 'devcolor', component: ThemeComponent },
	{ path: 'linux', component: LinuxcommandsComponent },
	{ path: 'git', component: GitcommandsComponent },
	{ path: 'aws', component: AwsComponent },
	{ path: 'awsintro', component: AwsComponent },
	{ path: 'awsssh', component: AwsComponent },
	
	{ path: 'ssh', component: SshComponent },
	{ path: 'prism', component: PrismComponent},
	{ path: 'electronjs', component: ElectronjsComponent},
	{ path: 'boto3', component: Boto3Component}
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
	
 }
