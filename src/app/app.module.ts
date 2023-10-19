import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AppRoutingModule } from './core/routes/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { SingleSequenceElementComponent } from './single-sequence-element/single-sequence-element.component';
import { SequenceElementListComponent } from './sequence-element-list/sequence-element-list.component';
import { TodoListComponent } from './admin/todo-list/todo-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminInterfaceComponent } from './admin/admin-interface/admin-interface.component';
import { FormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DatePipe } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteConfirmationDialogComponent } from './dialog/delete-confirmation-dialog/delete-confirmation-dialog.component';
import { NgModule } from '@angular/core';
import { SingleElementSequenceAdminComponent } from './admin/single-element-sequence-admin/single-element-sequence-admin.component';
'@material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    SingleSequenceElementComponent,
    SequenceElementListComponent,
    TodoListComponent,
    AdminInterfaceComponent,
    LandingPageComponent,
    DeleteConfirmationDialogComponent,
    SingleElementSequenceAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, //Ajout du routing
    BrowserAnimationsModule, //Animations
    MatToolbarModule,
    MatMenuModule,
    HttpClientModule, //Methode GET et POST
    AuthModule, //Authentification
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule, 
    DatePipe,
    FormsModule, // Pour les formulaires
    MatDialogModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatIconModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
