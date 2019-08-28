import { Component, OnInit } from '@angular/core';
import{AdminSampleService} from '../../../_services/AdminService/AdminSampleService'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  lstSamples:any[]=[]
  Samplecols:any[]=[];
  isAdd:boolean=true;
submitted:boolean=false;
profileForm: FormGroup;
isEdit:boolean=false;
isAddSubmit:boolean=false;
isEditSubmit:boolean=false;
lstFrequency:any[]=[];
lstsamplelocation1:any[]=[];
lstsamplelocation2:any[]=[];
lstsamplelocation3:any[]=[];
  constructor(private messageService:MessageService,private sampleService:AdminSampleService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.lstFrequency = [
      {name: 'test', code: 'Test'},
      {name: 'Test1', code: 'Test'},
      {name: 'Test2', code: 'Test'},
      {name: 'Test3', code: 'Test'},
      {name: 'Test4', code: 'Test'}
  ];
  this.lstsamplelocation1 = [
    {name: 'test', code: 'Test'},
    {name: 'Test1', code: 'Test'},
    {name: 'Test2', code: 'Test'},
    {name: 'Test3', code: 'Test'},
    {name: 'Test4', code: 'Test'}
];
this.lstsamplelocation2 = [
  {name: 'test', code: 'Test'},
  {name: 'Test1', code: 'Test'},
  {name: 'Test2', code: 'Test'},
  {name: 'Test3', code: 'Test'},
  {name: 'Test4', code: 'Test'}
];
this.lstsamplelocation3 = [
  {name: 'test', code: 'Test'},
  {name: 'Test1', code: 'Test'},
  {name: 'Test2', code: 'Test'},
  {name: 'Test3', code: 'Test'},
  {name: 'Test4', code: 'Test'}
];
    this.Samplecols = [
      // { field: 'Id', header: 'Id' },
      { field: 'SampleName', header: 'Name' },
      { field: 'SampleType', header: 'Type' },
      { field: 'SelectFrequncy', header: 'Frequncy' },

    //  { field: 'SampleLocation1', header: 'Location' },
      // { field: 'SampleLocation2', header: 'Location2' },
      // { field: 'SampleLocation3', header: 'Location3' },
       { field: 'SampleLocation4', header: 'Location' },

      // { field: 'Frequncy', header: 'Frequncy' },
      { field: 'Remarks', header: 'Remarks' },
      // { field: 'LogedInUser', header: 'LogedInUser' },

      // { field: 'CreatedBy', header: 'CreatedBy' },
      // { field: 'CreatedDate', header: 'CreatedDate' },
      // { field: 'ModifiedBy', header: 'ModifiedBy' },
      // { field: 'ModifiedDate', header: 'ModifiedDate' }
  ];
    this.sampleService.getSampleAll().subscribe((data:any) => {
     this.lstSamples=data;
     // console.log(data);
    });
  }
  get f() { return this.profileForm.controls; }
Load()
{
  this.sampleService.getSampleAll().subscribe((data:any) => {
    this.lstSamples=data;
    //  console.log(data);
   });
}

  onSubmit() {
  
    var Id=this.profileForm.value.IncubatorId;
    this.profileForm.value.SelectFrequncy=this.profileForm.value.SelectFrequncy['name'];
 console.log(this.profileForm)
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

      this.sampleService.registerSample(this.profileForm.value).subscribe((data:any) => {
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
      this.sampleService.updateSample(this.profileForm.value).subscribe((data:any) => {
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
    Id: [''],
    SampleName: ['', Validators.required],
    SampleType: ['', Validators.required],

    SelectFrequncy: ['', Validators.required],
    SampleLocation1: ['' ],
    SampleLocation2: [''],
    SampleLocation3: [''],
    SampleLocation4: ['', Validators.required],
    Frequncy: [''],
    Remarks: ['', Validators.required]
});
   this.isAdd=false;
 }
 onRowDeleteInit(data:any)
 {
console.log(data.Id);
this.sampleService.deleteSample(data.Id).subscribe((data:any) => {
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
  Id: [data.Id],
  SampleName: [data.SampleName, Validators.required],
  SampleType: [data.SampleType, Validators.required],

  SelectFrequncy: [data.SelectFrequncy, Validators.required],
  SampleLocation1: [data.SampleLocation1 ],
  SampleLocation2: [data.SampleLocation2],
  SampleLocation3: [data.SampleLocation3],
  SampleLocation4: [data.SampleLocation4, Validators.required],
  Frequncy: [data.Frequncy],
  Remarks: [data.Remarks, Validators.required]
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
