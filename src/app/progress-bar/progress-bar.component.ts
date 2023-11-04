import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {
  @Input() progress!: number;

  getColor(progress: number): string {
    if (progress < 30) {
      return 'red';
    } else if (progress < 70) {
      return 'yellow';
    } else {
      return 'green';
    }
  }
}
