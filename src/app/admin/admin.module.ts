import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import {TableModule} from 'primeng/table';
// import { DataTableModule } from 'primeng/primeng';
// import { DataTableModule } from 'primeng/primeng';
// import { TableModule } from 'primeng/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; 
import { ButtonModule } from 'primeng/components/button/button';
import { TableModule } from 'primeng/table';
import { SampleComponent } from './Sample/sample/sample.component';
import { TestComponent } from './Test/test/test.component';
import { IncubatorComponent } from './Incubator/incubator/incubator.component';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import {DropdownModule} from 'primeng/dropdown';
import {FileUploadModule} from 'primeng/fileupload';
import {DialogModule} from 'primeng/dialog';
import { TestGroupingComponent } from './test-grouping/test-grouping.component';
import {MultiSelectModule} from 'primeng/multiselect';

@NgModule({
  imports: [
    DialogModule,
    FileUploadModule,
    DropdownModule,
    ToastModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ButtonModule,
    BrowserAnimationsModule,
    TableModule,
    MultiSelectModule
    // DataTableModule
    //  TableModule
    
  ],
  providers: [
    MessageService],
  declarations: [AdminComponent, SampleComponent, TestComponent, IncubatorComponent, TestGroupingComponent]
})
export class AdminModule { }
