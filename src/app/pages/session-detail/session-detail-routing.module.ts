import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SessionDetailPage } from './session-detail';
import { SessionGuard } from './session.guard';

const routes: Routes = [
  {
    path: '',
    component: SessionDetailPage,
    canDeactivate: [SessionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionDetailPageRoutingModule { }
