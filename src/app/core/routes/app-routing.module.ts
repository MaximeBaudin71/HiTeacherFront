
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../../admin/dashboard/dashboard.component';
import { SequenceElementListComponent } from '../../sequence-element-list/sequence-element-list.component';
import { TodoListComponent } from '../../admin/todo-list/todo-list.component';
import { AdminInterfaceComponent } from '../../admin/admin-interface/admin-interface.component';
import { LoginComponent } from '../../auth/component/login/login.component';
import { LandingPageComponent } from 'src/app/landing-page/landing-page.component';
import { SingleElementSequenceAdminComponent } from 'src/app/admin/single-element-sequence-admin/single-element-sequence-admin.component';
import { NgModule } from '@angular/core';
import { AuthGuard } from '../guards/auth.guard';

//Ce tableau va lier les routes de votre application (les différentes URL) aux components correspondants.
const routes: Routes = [
    { path: '', component: LandingPageComponent  },
    // { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'elementsequences/niveau/sixieme', component: SequenceElementListComponent, data: { niveau: 'sixieme' } },
    { path: 'elementsequences/niveau/cinquieme', component: SequenceElementListComponent, data: { niveau: 'cinquieme' } },
    { path: 'elementsequences/niveau/quatrieme', component: SequenceElementListComponent, data: { niveau: 'quatrieme' } },
    { path: 'elementsequences/niveau/troisieme', component: SequenceElementListComponent, data: { niveau: 'troisieme' } },
    { path: 'elementsequences/niveau/segpa', component: SequenceElementListComponent, data: { niveau: 'segpa' } },
    { path: 'elementsequences/niveau/escapegame', component: SequenceElementListComponent, data: { niveau: 'escapegame' } },
    { path: 'element-update/:id', component: SingleElementSequenceAdminComponent },
    { path: 'auth/login', component: LoginComponent },
    { path: 'admin', component: AdminInterfaceComponent, canActivate : [AuthGuard] },
];

//décorateur 
@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ]
  })
export class AppRoutingModule {}