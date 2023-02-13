import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createSection, SectionContainerComponent, SectionType } from '../../section-container/section-container.component';
import { ExampleDataService } from '../../example-data.service';

@Component({
  selector: 'app-example-input-page',
  standalone: true,
  imports: [CommonModule, SectionContainerComponent],
  templateUrl: './example-input-page.component.html',
  styleUrls: ['./example-input-page.component.scss'],
})
export class ExampleInputPageComponent {
  data!: SectionType[];

  constructor(private dataService: ExampleDataService) {
    this.data = this.dataService.load()
  }

  private stroeData(): void {
    console.debug(this.data);
    this.dataService.save(this.data)
  }

  onChange(): void {
    this.stroeData()
  }

  removeChild(index: number): void {
    this.data.splice(index, 1);
    this.stroeData()
  }

  onAdd(): void {
    this.data.push(createSection());
    this.stroeData()
  }
}
