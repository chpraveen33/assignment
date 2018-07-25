import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { RegisterComponent } from './register/register.component';
import {FilterPipe} from './app.filterPipe';
import { FilterComponent } from './filter/filter.component'
import { RegisterService } from './register..service';
import { HttpClientModule } from '@angular/common/http';

const router : Routes=[{path :'' ,redirectTo:'/filter',pathMatch:'full'},
{path:'filter',component:FilterComponent },
{path:'register',component:RegisterComponent}]
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    FilterPipe,
    FilterComponent,
    ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
