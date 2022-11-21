import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplyComponent } from './apply/apply.component';
import { ViewComponent } from './view/view.component';
import { RouterModule , Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QueryComponent } from './query/query.component';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';
const appRoutes: Routes =[		
  {path:'Apply' , component:ApplyComponent},
  {path:'View', component:ViewComponent},
  {path:'Home' , component:HomeComponent},
  {path:'Query' , component:QueryComponent},
  {path:'Feedback' , component:FeedbackComponent},
  {path:'ContactUs' , component:ContactComponent},
  ];
  
@NgModule({
  declarations: [
    AppComponent,
    ApplyComponent,
    ViewComponent,
    HomeComponent,
    QueryComponent,
    ContactComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ HomeComponent]
})
export class AppModule { }
