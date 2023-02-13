import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  createSection,
  SectionType,
} from './example/section-container/section-container.component';
import { __values } from 'tslib';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
[x: string]: any;
  title = 'my-ng3';

  data: SectionType[] = [createSection()];
  
  removeChild(index: number): void {
    this.data.splice(index, 1)
  }

  onAdd(): void {
    this.data.push(createSection());
  }
}
