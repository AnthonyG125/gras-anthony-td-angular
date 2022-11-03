import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogKanbanAddComponent } from './dialog-kanban-add.component';

describe('DialogKanbanAddComponent', () => {
  let component: DialogKanbanAddComponent;
  let fixture: ComponentFixture<DialogKanbanAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogKanbanAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogKanbanAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
