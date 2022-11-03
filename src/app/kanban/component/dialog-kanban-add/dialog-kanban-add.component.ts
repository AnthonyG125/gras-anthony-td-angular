import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogData} from "../kanban-list/kanban-list.component";

@Component({
  selector: 'app-dialog-kanban-add',
  templateUrl: './dialog-kanban-add.component.html',
  styleUrls: ['./dialog-kanban-add.component.scss']
})
export class DialogKanbanAddComponent implements OnInit {
  value: any;

  constructor( public dialogRef: MatDialogRef<DialogKanbanAddComponent>,
               @Inject(MAT_DIALOG_DATA) public data: DialogData,) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
