import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  InputType,
  InputContainerComponent,
  createInput,
} from '../input-container/input-container.component';

export type SectionType = InputType[];

export function createSection(): SectionType {
  return [createInput()]
}

@Component({
  selector: 'app-section-container',
  standalone: true,
  templateUrl: './section-container.component.html',
  styleUrls: ['./section-container.component.scss'],
  imports: [CommonModule, InputContainerComponent],
})
export class SectionContainerComponent implements OnInit {
  @Input() no!: number;
  @Input() data!: SectionType;
  @Input() removeable: boolean = true;

  @Output() remove = new EventEmitter<void>();
  @Output() dataChange = new EventEmitter<SectionType | null>();

  ngOnInit(): void {
    if (!this.data || !this.no) {
      throw new Error('Error');
    }
  }

  removeChild(index: number): void {
    this.data.splice(index, 1);
  }

  onAdd(): void {
    this.data.push(createInput());
    this.dataChange.emit(this.data)
  }

  onRemove(): void {
    this.remove.emit();
    this.dataChange.emit(null)
  }

  getResult(): number {
    return this.data.map((item) => item.value).reduce((carry, value) => carry + value, 0)
  }

  onChange(): void {
    this.dataChange.emit(this.data)
  }
}
export { createInput };