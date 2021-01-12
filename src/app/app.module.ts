import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ThemeComponent } from './thememaker/theme/theme.component';
import { LinexModule } from './linex/linex.module';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';

// form field
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    AppComponent,
    ThemeComponent
  ],
 imports: [
	 BrowserModule, AppRoutingModule, LinexModule,
	MatGridListModule,
	MatButtonModule,
	MatToolbarModule,
	MatCardModule,
	MatListModule,
	MatChipsModule,
	MatMenuModule,
	 MatSidenavModule,
	BrowserAnimationsModule,
	MatFormFieldModule, MatInputModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
	exports: []
})
export class AppModule  { 
	
}
