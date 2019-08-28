import { Component, OnInit } from '@angular/core';
import{AdminSampleService} from '../../_services/AdminService/AdminSampleService';
import{WaterScheduleService} from '../../_services/WaterService/WaterScheduleService';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  lstSamples:any[]=[]
  Samplecols:any[]=[];
  isAdd:boolean=false;
submitted:boolean=false;
profileForm: FormGroup;
  constructor(private waterScheduleService:WaterScheduleService,private sampleService:AdminSampleService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      // Id: [''],
      SampleName: ['', Validators.required],
      SampleType: ['', Validators.required],
  
     
      SampleLocation4: ['', Validators.required]
     
  });
    this.Samplecols = [
      // { field: 'Id', header: 'Id' },
      { field: 'SampleName', header: 'Name' },
      { field: 'SampleType', header: 'Type' },
     // { field: 'SampleLocation', header: 'Location' },

    
       { field: 'FrequencyDays', header: 'FrequencyDays' },
       { field: 'FrequencyNumber', header: 'FrequencyNumber' },
       { field: 'ScheduleDate', header: 'ScheduleDate' },
     
     
  ];
   
  }
  get f() { return this.profileForm.controls; }
  
  onSubmit() {
  
   // var Id=this.profileForm.value.IncubatorId;
    //this.profileForm.value.SelectFrequncy=this.profileForm.value.SelectFrequncy['name'];
 console.log(this.profileForm.value)
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
      this.waterScheduleService.getScheduleAll().subscribe((data:any) => {
        console.log(data);
        this.lstSamples=data.filter(item => item.SampleType==this.profileForm.value.SampleType);
         console.log(this.lstSamples);
       });
    }
  }
  onRowLoad()
  {
    console.log(this.lstSamples);
    this.waterScheduleService.registerSchedule(this.lstSamples).subscribe((data:any) => {
      // console.log(data);
      // this.lstSamples=data.filter(item => item.SampleType==this.profileForm.value.SampleType);
      //  console.log(this.lstSamples);
     });
  }
}
