import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogKanbanUpdateComponent } from './dialog-kanban-update.component';

describe('DialogKanbanUpdateComponent', () => {
  let component: DialogKanbanUpdateComponent;
  let fixture: ComponentFixture<DialogKanbanUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogKanbanUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogKanbanUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
