import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
/*esto es un servicio,luego hay
que incluirlo en los providers*/
import { routing,appRoutingProviders } from './app.routing'; 

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { BierComponent } from './components/bier/bier.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';
import { WebComponent } from './components/web/web.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BierComponent,
    CreateComponent,
    ContactComponent,
    ErrorComponent,
    DetailComponent,
    EditComponent,
    WebComponent,
   
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [
  appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
