import { Component, OnInit } from '@angular/core';
import{WaterScheduleService} from '../../_services/WaterService/WaterScheduleService';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  lstSamples:any[]=[]
  Samplecols:any[]=[];
  isAdd:boolean=false;
submitted:boolean=false;
startDate:Date;
endDate:Date;
  constructor(private waterScheduleService:WaterScheduleService) { }

  ngOnInit() {
    this.Samplecols = [
      // { field: 'Id', header: 'Id' },
      // { field: 'SampleName', header: 'Name' },
      { field: 'SampleType', header: 'Type' },
     // { field: 'SampleLocation', header: 'Location' },

    
       { field: 'FrequencyDays', header: 'FrequencyDays' },
       { field: 'FrequencyNumber', header: 'FrequencyNumber' },
       { field: 'ScheduleDate', header: 'ScheduleDate' },
       { field: 'ReasonsComments', header: 'Comment' },
       { field: 'IsDeActive', header: 'Actions' }
     
  ];
  this.waterScheduleService.getScheduleAll().subscribe((data:any) => {
    console.log(data);
    //this.lstSamples=data;
    this.startDate=new Date();
    this.endDate = new Date();
  this.endDate.setDate( this.endDate.getDate() + 10 );
   this.lstSamples= data.filter(
      m => new Date(m.ScheduleDate) >= new Date(this.startDate) && new Date(m.ScheduleDate) <= new Date(this.endDate)
      );
    //this.lstSamples=data.filter(item => item.SampleType==this.profileForm.value.SampleType);
     console.log(this.lstSamples);
   });
  }
  onRowLoad()
  {
    console.log(this.lstSamples);
  }
}
