import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignalsComponent} from "./components/signals/signals.component";
import {CreateEntryComponent} from "./components/create-entry/create-entry.component";

const routes: Routes = [
  {
    path: 'signals',
    component: SignalsComponent
  },
  {
    path: 'profile',
    component: CreateEntryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




