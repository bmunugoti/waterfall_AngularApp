import { Component,OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {UserService} from './_services/user.service';
import {Router,ActivatedRoute} from "@angular/router";



@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit { 
    visibleSidebar1:boolean=true;

    items: MenuItem[];
openManu:boolean=false;
isShowName:boolean=false;
constructor( private router: Router,private userService:  UserService) { 
    if(this.userService.getName()==undefined)
    {
        this.router.navigate(['login']); 
    }
    
}

ngOnInit() {
    this.items = [
        
        {
            
            label: 'Admin',
            icon: 'pi pi-fw pi-pencil',
            items: [
                {label: 'Test', icon: 'pi pi-fw pi-trash',routerLink:'/Test'},
                {label: 'Sample', icon: 'pi pi-fw pi-refresh',routerLink:'/Sample'},
                {label: 'Incubator', icon: 'pi pi-fw pi-refresh',routerLink:'/Incubator'},
                {label: 'TestGroup', icon: 'pi pi-fw pi-refresh',routerLink:'/TestGroup'}
            ]
        },
        {
            label: 'WaterFall',
            icon: 'pi pi-fw pi-pencil',
            items: [
                {label: 'Schedule', icon: 'pi pi-fw pi-trash',routerLink:'/Schedule'},
                {label: 'Activities', icon: 'pi pi-fw pi-refresh',routerLink:'/Activities'}
            ]
        },
    ];
}
    openNav()
    {
        alert('test');
        this.openManu=true;
        document.getElementById("mySidenav").style.width = "250px";
    }
    onUserclick()
    {
        this.isShowName=true;
    }
}