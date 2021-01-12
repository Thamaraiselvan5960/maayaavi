import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThemeComponent } from './thememaker/theme/theme.component';
import { AppComponent } from './app.component';
import { LinuxcommandsComponent } from './linex/commands/linux/linuxcommands.component';
import { GitcommandsComponent } from './linex/commands/git/gitcommands.component';
const routes: Routes = [
	// { path: 'home', component: AppComponent },
	{ path: 'devcolor', component: ThemeComponent },
	{ path: 'linux', component: LinuxcommandsComponent },
	{ path: 'git', component: GitcommandsComponent }
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
	
 }
