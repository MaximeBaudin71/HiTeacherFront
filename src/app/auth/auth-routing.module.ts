import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../auth/component/login/login.component';
import { AdminInterfaceComponent } from '../admin/admin-interface/admin-interface.component';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  { path: 'auth/login', component: LoginComponent },
  { path: 'admin', component: AdminInterfaceComponent, canActivate : [AuthGuard]}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule {}