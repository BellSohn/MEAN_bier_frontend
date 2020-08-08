import { ModuleWithProviders } from '@angular/core';
import {Routes,RouterModule } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { BierComponent } from './components/bier/bier.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';
import { WebComponent } from './components/web/web.component';

const Approutes:Routes=[
	{path:'',component:AboutComponent},
	{path:'about',component:AboutComponent},
	{path:'bier',component:BierComponent},
	{path:'create',component:CreateComponent},
	{path:'contact',component:ContactComponent},
	{path:'bier-detail/:id',component:DetailComponent},
	{path:'edit/:id',component:EditComponent},
	{path:'web',component:WebComponent},
	{path:'**',component:ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing:ModuleWithProviders = RouterModule.forRoot(Approutes);