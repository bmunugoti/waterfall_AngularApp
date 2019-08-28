import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';


@Injectable()
export class AdminTestGroupService {
    constructor(private http: HttpClient) { }

    getTestGroupingAll() {
        return this.http.get<any[]>(`${environment.apiUrl}/TestGrouping`);
    }

    getTestGroupingById(id: number) {
        return this.http.get(`${environment.apiUrl}/TestGrouping` + id);
    }

    registerTestGrouping(user: any) {
        return this.http.post(`${environment.apiUrl}/TestGrouping`, user);
    }

    updateTestGrouping(user: any) {
        return this.http.put(`${environment.apiUrl}/TestGrouping` , user);
    }

    deleteTestGrouping(id: number) {
        return this.http.delete(`${environment.apiUrl}/TestGrouping?Id=` + id);
    }
}