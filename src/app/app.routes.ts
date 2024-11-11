import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ToggleComponent } from './toggle/toggle.component';
import { MoviesComponent } from './movies/movies.component';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';
import { NewComponent } from './new/new.component';

export const routes: Routes = [
    {
        path:"",
        component:NavbarComponent
    },
    {
        path:"about",
        component:AboutComponent
    },
    {
        path:"contact",
        component:ContactComponent,
    },
    {
        path:"toggle",
        component:ToggleComponent,
    },
    {
        path:"movies",
        component:MoviesComponent,
    },
    {
        path:"create-medicine",
        component:CreateMedicineComponent,
    },
    {
        path:"new",
        component:NewComponent,
    }
];
