import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { TasksComponent } from './demo/components/tasks/tasks.component';
import { ButtonComponent } from './demo/components/button/button.component';
import { TaskHeaderComponent } from './demo/components/task-header/task-header.component';
import { TaskComponent } from './demo/components/task/task.component';
import { TaskItemComponent } from './demo/components/task-item/task-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddTaskComponent } from './demo/components/add-task/add-task.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path:'demo', component: TasksComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    TasksComponent,
    ButtonComponent,
    TaskHeaderComponent,
    TaskComponent,
    TaskItemComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
