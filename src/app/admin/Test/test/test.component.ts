import { Component, OnInit } from '@angular/core';
import{AdminTestService} from '../../../_services/AdminService/AdminTestService';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MessageService} from 'primeng/api';
import {SelectItem} from 'primeng/api';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  Testcols:any[]=[];
  lstTest:any[]=[];
  isAdd:boolean=true;
submitted:boolean=false;
profileForm: FormGroup;
isEdit:boolean=false;
isAddSubmit:boolean=false;
isEditSubmit:boolean=false;
lstTypes:any[]=[];
lstUoM:any[]=[];
min:number;
max:number;
errormsg:string;
uploadedFiles: any[] = [];
display: boolean = false;
deleteId:number;
lstTypes1:any[]=[];
isShowDrp:boolean=false;
selectedUoM:string='Test2';
    // showDialog() {
    //     this.display = true;
    // }

  constructor(private messageService:MessageService,private testService:AdminTestService,private formBuilder: FormBuilder) { 
    
  }

  ngOnInit() {

    this.lstTypes = [
      {name: 'Chemical', code: 'Chemical'},
      {name: 'Micro', code: 'Micro'}
      
    ];
    this.lstUoM= [
      {name: 'Test', value: 'Test'},
      {name: 'Test1', value: 'Test1'},
      {name: 'Test2', value: 'Test2'}

      
    ];
    this.Testcols = [
      // { field: 'Id', header: 'Id' },
      { field: 'TestName', header: 'Name' },
      { field: 'TestType', header: 'Type' },
      // { field: 'TestType1', header: 'Type' },

      { field: 'UnitOfMeasurment', header: 'UoM' },
      //{ field: 'TestCondition', header: 'Condition' },
      { field: 'TestDescription', header: 'Description' },
      { field: 'TestFile', header: 'File' }

      // { field: 'TestGreaterThan', header: 'GreaterThan' },
      // { field: 'TestLessthan', header: 'Lessthan' },
      // { field: 'TestMax', header: 'Max' },
      // { field: 'TestMin', header: 'Min' },
      // { field: 'LogedInUser', header: 'LogedInUser' },

      // { field: 'CreatedBy', header: 'CreatedBy' },
      // { field: 'CreatedDate', header: 'CreatedDate' },
      // { field: 'ModifiedBy', header: 'ModifiedBy' },
      // { field: 'ModifiedDate', header: 'ModifiedDate' }
  ];
    this.testService.getTestAll().subscribe((data:any) => {
     this.lstTest=data;
      //console.log(data);
    });
  }
  onTypechange(event:any)
  {
    this.isShowDrp=true;
    this.lstTypes1 = [
      {name: 'test', code: 'test'},
      {name: 'Test1', code: 'Test1'}
      
    ];
  }
Load()
{
  this.testService.getTestAll().subscribe((data:any) => {
    this.lstTest=data;
     //console.log(data);
   });
}
  get f() { return this.profileForm.controls; }


  onSubmit() {
    console.log(this.uploadedFiles)

    var Id=this.profileForm.value.IncubatorId;
 console.log(this.profileForm)
//  this.profileForm.value['TestMax']=this.profileForm.value['TestMax']
 this.profileForm.value.TestType=this.profileForm.value.TestType['name'];
 this.profileForm.value.UnitOfMeasurment=this.profileForm.value.UnitOfMeasurment['name'];
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

      this.testService.registerTest(this.profileForm.value).subscribe((data:any) => {
        // this.lstIncubators=data;
         // console.log(data);
         this.messageService.add({severity:'success', summary:'Success Message', detail:'Record Added Successfully'});
         this.Load();
        });
    }
    if(this.isEditSubmit==true)
    {
      console.log('update')
      console.log(this.profileForm.value)
      this.testService.updateTest(this.profileForm.value).subscribe((data:any) => {
        // this.lstIncubators=data;
         // console.log(data);
         this.messageService.add({severity:'success', summary:'Success Message', detail:'Record Updated Successfully'});
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
    Id: [''],
    TestName: ['', Validators.required],
    TestType: ['', Validators.required],
    TestType1: ['', Validators.required],
    UnitOfMeasurment: ['', Validators.required],
    TestCondition: ['' ],
    TestDescription: [''],
    TestFile: [''],
    TestGreaterThan: ['', Validators.required],
    TestLessthan: ['', Validators.required],

    TestMax: ['', Validators.required],
    TestMin: ['', Validators.required]

});
   this.isAdd=false;
 }
 onRowDeleteInit(data:any)
 {
  this.display = true;
// console.log(data.Id);
this.deleteId=data.Id;
 }
 onclickdelete()
 {
  this.display=false;
  this.testService.deleteTest(this.deleteId).subscribe((data:any) => {
    // this.lstIncubators=data;
     // console.log(data);
     this.messageService.add({severity:'success', summary:'Success Message', detail:'Deleted Successfully'});
     this.Load();
     
    });
 }
 onclickcancel()
 {
   this.display=false;
 }
 onRowEditInit(data:any)
 {
   this.isEditSubmit=true;
   this.isAddSubmit=false;
  this.isAdd=false;
  this. submitted = false;
  console.log(data);
  this.isShowDrp=true;
  // this.lstTypes1 = [
  //   {name: 'test', code: 'test'},
  //   {name: 'Test1', code: 'Test1'}
    
  // ];
  // this.lstTypes = [
  //   {name: 'Chemical', code: 'Chemical'},
  //   {name: 'Micro', code: 'Micro'}
    
  // ];
  // this.lstUoM= [
  //   {label: 'Test', value: 'Test'},
  //     {label: 'Test1', value: 'Test1'},
  //     {label: 'Test2', value: 'Test2'}

    
  // ];

  this.profileForm = this.formBuilder.group({
    Id: [data.Id],
    TestName: [data.TestName, Validators.required],
    TestType: ['Micro', Validators.required],
    TestType1: ['', Validators.required],
    UnitOfMeasurment: [data.UnitOfMeasurment, Validators.required],
    TestCondition: [data.TestCondition ],
    TestDescription: [data.TestDescription],
    TestFile: [''],
    TestGreaterThan: [data.TestGreaterThan, Validators.required],
    TestLessthan: [data.TestLessthan, Validators.required],

    TestMax: [data.TestMax, Validators.required],
    TestMin: [data.TestMin, Validators.required]

});
this.selectedUoM='Test2';
 }
 onUpload(event) {
   console.log(event)
  for(let file of event.files) {
      this.uploadedFiles.push(file);
  }
console.log(this.uploadedFiles)
 // this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
}
//  onBasicUpload(event:any)
//  {
//    console.log(event)
//   this.profileForm.value.TestFile=event.target.value;
//  }
 onchange(event:any)
 {
// console.log(this.profileForm);
this.min=parseInt(this.profileForm.value['TestMin']);
this.max=parseInt(this.profileForm.value['TestMax']);
console.log(this.max+""+this.min)
if(this.min>this.max)
{
this.errormsg="please enter the correct value"
}
else
{
  this.errormsg="";
}
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
