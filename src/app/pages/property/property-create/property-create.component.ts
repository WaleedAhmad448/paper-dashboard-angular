import { Component } from '@angular/core';
import { ApiService } from '../../../core/service/api-service.service';
import { Property } from '../../../core/model/property.model';

@Component({
  selector: 'app-property-create',
  templateUrl: './property-create.component.html',
  styleUrls: ['./property-create.component.css']
})
export class PropertyCreateComponent {
  property: Property = {
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

  onSubmit(): void {
    this.apiService.createProperty(this.property).subscribe((response) => {
      console.log('Property created:', response);
      // يمكنك إضافة منطق لتوجيه المستخدم إلى قائمة العقارات بعد الإضافة
    });
  }
}