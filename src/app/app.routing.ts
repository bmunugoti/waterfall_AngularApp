import { Routes, RouterModule } from '@angular/router';

// import { HomeComponent } from './home';
// import { LoginComponent } from './login';
// import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import { AppComponent } from './app.component';
import{AdminComponent} from './admin/admin.component';
import{WaterFallComponent} from './water-fall/water-fall.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SampleComponent } from './admin/Sample/sample/sample.component';
import { TestComponent } from './admin/Test/test/test.component';
import { IncubatorComponent } from './admin/Incubator/incubator/incubator.component';
import { ScheduleComponent } from './water-fall/schedule/schedule.component';
import { TestGroupingComponent } from './admin/test-grouping/test-grouping.component';
import { ActivitiesComponent } from './water-fall/activities/activities.component';



const appRoutes: Routes = [
    { path: '', component: LoginComponent },
     { path: 'login', component: LoginComponent},
    //  { path: 'admin', component: AdminComponent },
     { path: 'waterFall', component: WaterFallComponent },
     { path: 'Incubator', component: IncubatorComponent },
     { path: 'Sample', component: SampleComponent },
     { path: 'Test', component: TestComponent },
     { path: 'TestGroup', component: TestGroupingComponent },
     { path: 'Schedule', component: ScheduleComponent },
     { path: 'Activities', component: ActivitiesComponent },

    // otherwise redirect to home  ScheduleComponent
    { path: '**', redirectTo: '' }
];

// export const routing = RouterModule.forRoot(appRoutes);
@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
        exports:[RouterModule]
        
})
export class AppRoutingModule{}