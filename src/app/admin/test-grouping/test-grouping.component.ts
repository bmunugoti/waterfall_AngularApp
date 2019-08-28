import { Component, OnInit } from '@angular/core';
 import{AdminTestGroupService} from '../../_services/AdminService/AdminTestGroupService';
 import{AdminTestService} from '../../_services/AdminService/AdminTestService';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MessageService} from 'primeng/api';
import {SelectItem} from 'primeng/api';
interface TestDrp {
  name: string,
  code: string
}
@Component({
  selector: 'app-test-grouping',
  templateUrl: './test-grouping.component.html',
  styleUrls: ['./test-grouping.component.css']
})

export class TestGroupingComponent implements OnInit {
testGroupCols:any[]=[];
lstTestGroups:any[]=[];
isAdd:boolean=true;
submitted:boolean=false;
profileForm: FormGroup;
isEdit:boolean=false;
isAddSubmit:boolean=false;
isEditSubmit:boolean=false;
lstdrp:any[]=[]
selectedTestDrp:any[];
TestDrp:any[]=[]
selectedTestId:string;
  constructor(private adminTestService:AdminTestService, private messageService:MessageService, private testGroupinService:AdminTestGroupService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.testGroupCols = [
       //{ field: 'TestGroupId', header: 'ID' },
      { field: 'TestGroupName', header: ' Name' },
      { field: 'TestGroupDescription', header: 'Description' },
      { field: 'SelectedIds', header: 'SelectedIds' },
      { field: 'MappedSampleIdToTestGroup', header: 'MappedSampleIdToTestGroup' }
     
  ];
  this.adminTestService.getTestAll().subscribe((data:any) => {
   
    this.lstdrp=data;
    this.lstdrp.forEach(obj=>
      {
        this.TestDrp.push({name:obj.TestName,code:obj.Id})
      })
     console.log(this.TestDrp);
    
   });
    this.testGroupinService.getTestGroupingAll().subscribe((data:any) => {
     this.lstTestGroups=data;
      console.log(data);
     
    });
  }
  Load()
  {
    this.testGroupinService.getTestGroupingAll().subscribe((data:any) => {
      this.lstTestGroups=data;
       console.log(data);
     
     });
  }
  get f() { return this.profileForm.controls; }
  onSubmit() {
  
    var Id=this.profileForm.value.IncubatorId;
    this.profileForm.value.SelectedIds.forEach(obj=>
      {
        if(obj.name!==undefined)
        {
          this.selectedTestId+=","+obj.name;
        }
     
      })
      this.profileForm.value.SelectedIds=this.selectedTestId;
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
      console.log(this.profileForm.value);
      this.testGroupinService.registerTestGrouping(this.profileForm.value).subscribe((data:any) => {
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
      this.testGroupinService.updateTestGrouping(this.profileForm.value).subscribe((data:any) => {
       
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
   // IncubatorId: ['', Validators.required],
   TestGroupName: ['', Validators.required],
   TestGroupDescription: ['', Validators.required],
   SelectedIds: ['', Validators.required],
   MappedSampleIdToTestGroup: ['', Validators.required]

});
   this.isAdd=false;
 }
 onRowDeleteInit(data:any)
 {
console.log(data.TestGroupId);
this.testGroupinService.deleteTestGrouping(data.TestGroupId).subscribe((data:any) => {
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
    TestGroupId: [data.TestGroupId],
    TestGroupName: [data.TestGroupName, Validators.required],
   TestGroupDescription: [data.TestGroupDescription, Validators.required],
   SelectedIds: [data.SelectedIds, Validators.required],
   MappedSampleIdToTestGroup: [data.MappedSampleIdToTestGroup, Validators.required]
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
