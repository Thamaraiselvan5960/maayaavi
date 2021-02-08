import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThemeComponent } from './linex/theme/theme.component';
import { LaptopComponent} from './linex/laptop/laptop.component';
import { AppComponent } from './app.component';
import { LinuxcommandsComponent } from './linex/commands/linux/linuxcommands.component';
import { GitcommandsComponent } from './linex/commands/git/gitcommands.component';
import { AwsComponent } from './linex/aws/aws.component';
import { AwsintroComponent } from './linex/aws/awsintro/awsintro.component';
import { AwssshLoginComponent } from './linex/aws/awsssh-login/awsssh-login.component';
import { AwsServicesComponent } from './linex/aws/aws-services/aws-services.component';

import { SshComponent } from './linex/ssh/ssh.component';
import { PrismComponent } from './linex/prism/prism.component';
import { ElectronjsComponent } from './linex/electronjs/electronjs.component'
import { Boto3Component } from './linex/boto3/boto3.component';
import { BotoS3Component } from './linex/boto3/boto-s3/boto-s3.component';

import { PythonComponent } from './course/python/python.component';
import { PDatatypesComponent } from './course/python/p-datatypes/p-datatypes.component';
import { HtmlComponent } from './course/frontend/html/html.component';


const routes: Routes = [
	// { path: 'home', component: AppComponent },
	{ path: 'devcolor', component: ThemeComponent },
	{ path:'laptops', component: LaptopComponent},
	{ path: 'linux', component: LinuxcommandsComponent },
	{ path: 'git', component: GitcommandsComponent },
	{ path: 'aws', component: AwsComponent },
	{ path: 'awsintro', component: AwsComponent },
	{ path: 'awsssh', component: AwsComponent },
	{ path: 'aws-services', component: AwsServicesComponent},
	
	{ path: 'ssh', component: SshComponent },
	{ path: 'prism', component: PrismComponent},
	{ path: 'electronjs', component: ElectronjsComponent},
	{ path: 'boto3', component: Boto3Component},
	{ path: 'boto-s3', component: BotoS3Component },

	{ path: 'python', component: PythonComponent },
	{ path:'p-datatype', component:PDatatypesComponent},
	{ path: 'html', component: HtmlComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
	
 }
