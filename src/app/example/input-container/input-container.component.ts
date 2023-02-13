import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

export type InputType = { value: number };

export function createInput(): InputType {
  return { value: 0 };
}

@Component({
  selector: 'app-input-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-container.component.html',
  styleUrls: ['./input-container.component.scss'],
})
export class InputContainerComponent implements OnInit {
  @Input() no!: number;
  @Input() data!: InputType;
  @Input() removeable: boolean = true;

  @Output() remove = new EventEmitter<void>();
  @Output() dataChange = new EventEmitter<InputType | null>();

  protected readonly id = Math.floor(Math.random() * 6);

  ngOnInit(): void {
    if (!this.data || !this.no) {
      throw new Error('value an no porp must be speficied');
    }
  }
  onChange(value: number): void {
    this.dataChange.emit(this.data)
    this.data.value = value;
  }

  onRemove(): void {
    this.dataChange.emit(null)
    this.remove.emit();
  }
}
