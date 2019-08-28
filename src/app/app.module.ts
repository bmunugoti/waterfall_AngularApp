import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent }  from './app.component';
import { AppRoutingModule }        from './app.routing';
// import { AlertComponent } from './_directives';
import { AuthGuard } from './_guards';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlertService, AuthenticationService, UserService } from './_services';;
import { WaterFallModule } from './water-fall/water-fall.module';
import{AdminModule} from './admin/admin.module';
import { LoginModule } from './login/login.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; 
import { ButtonModule } from 'primeng/components/button/button';
import {SidebarModule} from 'primeng/sidebar';
import{AdminIncubatorService} from './_services/AdminService/AdminIncubatorService';
import{AdminSampleService} from './_services/AdminService/AdminSampleService';
import{AdminTestService} from './_services/AdminService/AdminTestService';
import {PanelMenuModule} from 'primeng/panelmenu';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import {DropdownModule} from 'primeng/dropdown';
import {FileUploadModule} from 'primeng/fileupload';
import{AdminTestGroupService} from './_services/AdminService/AdminTestGroupService';
import {MultiSelectModule} from 'primeng/multiselect';
import {  WaterScheduleService } from './_services/WaterService/WaterScheduleService';

@NgModule({
    imports: [
        MultiSelectModule,
        FileUploadModule,
        DropdownModule,
        PanelMenuModule,
        ToastModule,
        SidebarModule,
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AdminModule,
        WaterFallModule,
        LoginModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ButtonModule,
        // TableModule,
        // DataTableModule,
        // InputTextModule,
        // DialogModule,
        // ButtonModule,
        FormsModule
        // DataGridModule
        // TableModule
    ],
    declarations: [
        AppComponent
        // AlertComponent
       
    ],
    providers: [
        WaterScheduleService,
        AdminTestGroupService,
        MessageService,
        AdminTestService,
        AdminSampleService,
        AdminIncubatorService,
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }