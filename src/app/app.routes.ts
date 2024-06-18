import { Routes } from '@angular/router';
import { IronmanComponent } from '../Component/ironman/ironman.component';
import { SpidermanComponent } from '../Component/spiderman/spiderman.component';

export const routes: Routes = [
    {path : "iron" , component:IronmanComponent},
    {path : "spider" , component : SpidermanComponent}
];
