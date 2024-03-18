import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ClothesComponent } from './clothes/clothes.component';
import { TshirtsComponent } from './tshirts/tshirts.component';
import { TrousersComponent } from './trousers/trousers.component';

const routes: Routes = [
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"clothes",
   component:ClothesComponent,
  children:[
    {path:"tshirts",component:TshirtsComponent},
    {path:"trousers",component:TrousersComponent}
  ]
},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"employees",component:EmployeeListComponent},
  {path:"employees/:id", component:EmployeeDetailsComponent},
  {path:"**" ,component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
