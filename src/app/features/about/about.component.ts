import { Component, inject } from '@angular/core';
import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  dataService = inject(DataService);
  aboutInfo = this.dataService.aboutInfo;
  education = this.dataService.education;
  skills = this.dataService.skills;
}
