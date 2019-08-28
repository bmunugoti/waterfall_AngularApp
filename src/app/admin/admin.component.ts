import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  cols:any[]=[];
  transactions: {
   vin:string,
   year:string,
   brand:string,
   color:string
  }[];
  constructor() { }

  ngOnInit() {
    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
  ];
    this.transactions = [
      {
        vin: "1",
        year: 'Third transaction',
        brand: "Audi",
        color:"red"
      },
      {
        vin: "2",
        year: 'one5 transaction',
        brand: "Audi",
        color:"blue"
      },
      {
        vin: "3",
        year: 'one3 transaction',
        brand: "Audi",
        color:"white"
      },
      {
        vin: "4",
        year: 'one2 transaction',
        brand: "Audi",
        color:"green"
      },
      {
        vin: "5",
        year: 'one1 transaction',
        brand: "Audi",
        color:"blue"
      },
      {
        vin: "6",
        year: 'one transaction',
        brand: "Audi",
        color:"white"
      },
      {
        vin: "7",
        year: 'TWo transaction',
        brand: "Audi",
        color:"green"
      }
    ];
  
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
