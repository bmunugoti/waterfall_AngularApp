import { Component, OnInit } from '@angular/core';
import{AdminIncubatorService} from '../../../_services/AdminService/AdminIncubatorService';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-incubator',
  templateUrl: './incubator.component.html',
  styleUrls: ['./incubator.component.css']
})
export class IncubatorComponent implements OnInit {
lstIncubators:any[]=[];
incubatorcols:any[]=[];
isAdd:boolean=true;
submitted:boolean=false;
profileForm: FormGroup;
isEdit:boolean=false;
isAddSubmit:boolean=false;
isEditSubmit:boolean=false;
grdlength:number;
  constructor(private messageService:MessageService, private incubatorService:AdminIncubatorService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    
   
    this.incubatorcols = [
      // { field: 'IncubatorId', header: 'ID' },
      { field: 'IncubatorName', header: ' Name' },
      { field: 'IncubatorDescription', header: 'Description' }
      // { field: 'LogedInUser', header: 'LogedInUser' },

      // { field: 'CreatedBy', header: 'CreatedBy' },
      // { field: 'CreatedDate', header: 'CreatedDate' },
      // { field: 'ModifiedBy', header: 'ModifiedBy' },
      // { field: 'ModifiedDate', header: 'ModifiedDate' }
  ];
    this.incubatorService.getIncubatorAll().subscribe((data:any) => {
     this.lstIncubators=data;
      console.log(data);
      var id=this.lstIncubators[this.lstIncubators.length-1].IncubatorId;
      this.grdlength=parseInt(id+1);
    });
  }
  Load()
  {
    this.incubatorService.getIncubatorAll().subscribe((data:any) => {
      this.lstIncubators=data;
       //console.log(data);
     });
  }
  get f() { return this.profileForm.controls; }
  onSubmit() {
  
    var Id=this.profileForm.value.IncubatorId;
// console.log(this.profileForm)
    // stop here if form is invalid
    if (this.profileForm.invalid) {
      this.isAdd = false;
      this. submitted = true;
        return;
    }
    else
    {
      this.isAdd = true;
      this. submitted = true;
      if(this.isAddSubmit==true)
    {

      this.incubatorService.registerIncubator(this.profileForm.value).subscribe((data:any) => {
        // this.lstIncubators=data;
        this.messageService.add({severity:'success', summary:'Success Message', detail:'Insert Successfully'});
         // console.log(data);
         this.Load();
        });
    }
    if(this.isEditSubmit==true)
    {
      console.log('update')
      console.log(this.profileForm.value)
      this.incubatorService.updateIncubator(this.profileForm.value).subscribe((data:any) => {
        // this.lstIncubators=data;
         // console.log(data);
         this.messageService.add({severity:'success', summary:'Success Message', detail:'Update Successfully'});
         this.Load();
        });
    }
    }
    
   
}
Cancel()
{
  this.isAdd=true;
}
 btnAdd()
 {
   this.isAddSubmit=true;
   this.isEditSubmit=false;
  this.profileForm = this.formBuilder.group({
    IncubatorId: [this.grdlength.toString(), Validators.required],
    IncubatorName: ['', Validators.required],
    IncubatorDescription: ['', Validators.required]
});
   this.isAdd=false;
 }
 onRowDeleteInit(data:any)
 {
console.log(data.IncubatorId);
this.incubatorService.deleteIncubator(data.IncubatorId).subscribe((data:any) => {
  // this.lstIncubators=data;
   // console.log(data);
   this.messageService.add({severity:'success', summary:'Success Message', detail:'Delete Successfully'});
   this.Load();
  });
 }
 onRowEditInit(data:any)
 {
   this.isEditSubmit=true;
   this.isAddSubmit=false;
  this.isAdd=false;
  this. submitted = false;
  console.log(data);
  this.profileForm = this.formBuilder.group({
    IncubatorId: [data.IncubatorId, Validators.required],
    IncubatorName: [data.IncubatorName, Validators.required],
    IncubatorDescription: [data.IncubatorDescription, Validators.required]
});
 }
  customSort(event: any) {
    event.data.sort((data1, data2) => {
        let value1 = data1[event.field];
        let value2 = data2[event.field];
        let result = null;

        if (value1 == null && value2 != null)
            result = -1;
        else if (value1 != null && value2 == null)
            result = 1;
        else if (value1 == null && value2 == null)
            result = 0;
        else if (typeof value1 === 'string' && typeof value2 === 'string')
            result = value1.localeCompare(value2);
        else
            result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

        return (event.order * result);
    });
}
}
