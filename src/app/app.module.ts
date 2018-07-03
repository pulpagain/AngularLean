import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MockComponent } from './mock/mock-data.component';
import { HeroesComponent } from './heroes/heroes.component';
import { GradeHeaderComponent } from './commo-component/grade-headerComponent/grade-header.component';

@NgModule({
  declarations: [
    AppComponent,MockComponent,HeroesComponent,GradeHeaderComponent
  ],
  imports: [
    BrowserModule,FormsModule                //FormsModule是使用双向数据绑定必须要的，否则浏览器无法正常工作
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }