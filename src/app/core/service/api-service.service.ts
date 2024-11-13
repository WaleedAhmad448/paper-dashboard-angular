import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Property } from '../model/property.model'; // تأكد من وجود ملف النموذج هنا

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:8000/api/properties'; // تأكد من تعديل هذا الرابط وفقًا لإعدادات خادم Laravel

  constructor(private http: HttpClient) {}

  // الحصول على جميع العقارات
  getProperties(): Observable<Property[]> {
    return this.http.get<Property[]>(this.baseUrl);
  }

  // إضافة عقار جديد
  createProperty(property: Property): Observable<Property> {
    return this.http.post<Property>(this.baseUrl, property);
  }
}