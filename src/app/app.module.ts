import { BrowserModule } from '@angular/platform-browser';
import { PrettyJsonModule } from 'angular2-prettyjson';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LinkedInSdkModule } from 'angular-linkedin-sdk';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

const appRoutes: Routes = [
  { path: 'profile', component: ProfileComponent },
  
];


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    PrettyJsonModule,
    LinkedInSdkModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    { provide: 'apiKey', useValue: '81ncpdqd5pg6w5' },
    { provide: 'authorize', useValue: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
