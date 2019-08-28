import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{WaterFallComponent} from './water-fall.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/components/button/button';
import { TableModule } from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import {DropdownModule} from 'primeng/dropdown';
import {FileUploadModule} from 'primeng/fileupload';
import {DialogModule} from 'primeng/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ActivitiesComponent } from './activities/activities.component'; 


@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    DialogModule,
    FileUploadModule,
    DropdownModule,
    ToastModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ButtonModule,
    BrowserAnimationsModule,
    TableModule
  ],
  declarations: [WaterFallComponent, ScheduleComponent, ActivitiesComponent]
})
export class WaterFallModule { }
