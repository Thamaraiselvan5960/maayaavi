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

@NgModule({
  declarations: [LinuxcommandsComponent, GitcommandsComponent, AwsComponent],
  imports: [
	  CommonModule, MatButtonModule, MatToolbarModule, MatCardModule, MatSidenavModule, MatFormFieldModule,
	  MatInputModule, FormsModule 
  ]
})
export class LinexModule { }
