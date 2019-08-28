import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';


@Injectable()
export class AdminTestService {
    constructor(private http: HttpClient) { }

    getTestAll() {
        return this.http.get<any[]>(`${environment.apiUrl}/AdminChemicalTest`);
    }

    getTestById(id: number) {
        return this.http.get(`${environment.apiUrl}/AdminChemicalTest` + id);
    }

    registerTest(user: any) {
        return this.http.post(`${environment.apiUrl}/AdminChemicalTest`, user);
    }

    updateTest(user: any) {
        return this.http.put(`${environment.apiUrl}/AdminChemicalTest`, user);
    }

    deleteTest(id: number) {
        return this.http.delete(`${environment.apiUrl}/AdminChemicalTest?Id=` + id);
    }
}