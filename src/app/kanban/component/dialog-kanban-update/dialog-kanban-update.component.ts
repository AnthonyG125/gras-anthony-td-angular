import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogData} from "../kanban-list/kanban-list.component";

@Component({
  selector: 'app-dialog-kanban-update',
  templateUrl: './dialog-kanban-update.component.html',
  styleUrls: ['./dialog-kanban-update.component.scss']
})
export class DialogKanbanUpdateComponent implements OnInit {
  value: any;

  constructor( public dialogRef: MatDialogRef<DialogKanbanUpdateComponent>,
               @Inject(MAT_DIALOG_DATA) public data: DialogData,) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
