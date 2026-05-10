import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './careers.component.html',
})
export class CareersComponent {
  jobs = [
    {
      title: 'Front-End Developer (Javascript / AngularJs)',
      salary: '5 Lakhs per annum',
      skills: 'Javascript, AngularJs, Analytical Skills',
      details: '2-3 Months offline training followed by WFH. Willing to sign bond for 3.5 years.'
    },
    {
      title: 'Back-End Developer (.NET)',
      salary: '5 Lakhs per annum',
      skills: 'C#, Analytical Skills, Communication',
      details: '2-3 Months offline training followed by WFH. Willing to sign bond for 3.5 years.'
    },
    {
      title: 'DataBase Developer (SQL)',
      salary: '4 Lakhs per annum',
      skills: 'SQL, Stored Procedures, Queries, Views',
      details: '2-3 Months offline training followed by WFH. Willing to sign bond for 3.5 years.'
    },
    {
      title: 'Business Analyst / Quality Analyst',
      salary: '3 to 4 Lakhs per annum',
      skills: 'Communication, Requirement Analysis',
      details: '2 Months offline training followed by WFH. Willing to sign bond for 3 years.'
    }
  ];
}
