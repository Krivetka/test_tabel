import { Routes } from '@angular/router';
import {TableComponent} from "./components/table/table.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";

export const routes: Routes = [
  {path: '', component: TableComponent},
  {path: '**', component: NotFoundComponent}
];
