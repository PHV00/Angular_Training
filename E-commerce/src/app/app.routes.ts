import { Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { HomeComponent } from './Pages/home/home.component';
import { BuyComponent } from './Pages/buy/buy.component';

export const routes: Routes = [
    {
        path: "",
        component: LoginComponent
    },
    {
        path: "Home",
        component: HomeComponent
    },
    {
        path: "Buy/:id",
        component: BuyComponent
    }
];
