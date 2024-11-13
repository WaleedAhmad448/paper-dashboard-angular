import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core/service/api-service.service';
import { Property } from '../../../core/model/property.model';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {
  properties: Property[] = [];
  displayDialog: boolean = false; // حالة الـ Dialog
  newProperty: Property = {
    title: '',
    description: '',
    price: 0,
    type: 'apartment',
    location: '',
    latitude: 0,
    longitude: 0,
    user_id: 1 // تأكد من تعيين هذا بناءً على المستخدم المتصل
  };

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadProperties();
  }

  loadProperties(): void {
    this.apiService.getProperties().subscribe((data: Property[]) => {
      this.properties = data;
    });
  }

  // فتح الـ Dialog
  showDialog() {
    this.newProperty = { title: '', description: '', price: 0, type: 'apartment', location: '', latitude: 0, longitude: 0, user_id: 1 };
    this.displayDialog = true;
  }

  // إضافة عقار جديد
  onSubmit() {
    this.apiService.createProperty(this.newProperty).subscribe((response) => {
      console.log('Property created:', response);
      this.loadProperties(); // تحديث القائمة بعد إضافة العقار
      this.displayDialog = false; // إغلاق الـ Dialog
    });
  }
}