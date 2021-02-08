import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PythonComponent } from './python/python.component';
import { HtmlComponent } from './frontend/html/html.component';
import { PDatatypesComponent } from './python/p-datatypes/p-datatypes.component';


@NgModule({
  declarations: [
    PythonComponent, HtmlComponent, PDatatypesComponent

  ],
  imports: [
    CommonModule
  ]
})
export class CourseModule { }
