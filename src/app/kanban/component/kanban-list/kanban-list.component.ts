import {Component, Injectable, OnInit} from '@angular/core';
import {DialogKanbanAddComponent} from "../dialog-kanban-add/dialog-kanban-add.component";
import {MatDialog} from "@angular/material/dialog";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {DialogKanbanUpdateComponent} from "../dialog-kanban-update/dialog-kanban-update.component";

export interface DialogData {
  columnName: string;
  itemList: [];
  itemName: string;
}

@Component({
  selector: 'app-kanban-list',
  templateUrl: './kanban-list.component.html',
  styleUrls: ['./kanban-list.component.scss']
})
export class KanbanListComponent implements OnInit {
  @Injectable()
  Title!: String;
  value = '';

  itemList = ['Netlify'];
  itemList2 = ['Drag And Drop', 'Ajout d\'une colonne'];
  itemList3 = ['Ajouter', 'Modifier', 'Front'];
  itemList4 = ['Finir le TP'];

  Cards = [
    { title : 'To Do', background :'5px solid #FFB300', item: this.itemList },
    { title : 'In progress', background : ' 5px solid #29B6F6', item: this.itemList2 },
    { title: 'Done', background : ' 5px solid #8BC34A', item: this.itemList3 },
    { title: 'Gone' ,background: ' 5px solid #FF3D00', item: this.itemList4 }
  ]




  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(columnName: string, itemList: string[]): void {
    const dialogRef = this.dialog.open(DialogKanbanAddComponent, {
      width: '250px',
      data: {columnName: columnName, itemList: itemList},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null){
           // @ts-ignore
        itemList.push(result);
        console.log(itemList);
      }else{
        console.log('The dialog was closed');
      }
    });
  }

  openDialogUpdate(item: string, itemList: string[]): void {
    const dialogRef = this.dialog.open(DialogKanbanUpdateComponent, {
      width: '250px',
      data: {itemName: item, itemList: itemList},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null){
        var index = itemList.indexOf(item);
        if (index > -1) {
          itemList[index] = result;
        }

        console.log(itemList);
      }else{
        console.log('The dialog was closed');
      }
    });
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  onDeleteItem(list: string[] = [], item : any) {
    const index = list.indexOf(item, 0);
    if (index > -1) {
      list.splice(index, 1);
    }
    console.log(list)

  }

  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }

  onAddColumn(title: string) {
    let newItemList: string[]  = [];
    if(title === ''){
      alert('Veuillez entrer une valeur')
    }else{
      this.Cards.push({
        title: title, background: '5px solid ' + this.getRandomColor(), item: newItemList
      });
    }

  }

  onCloseColumn(cardTitle: string) {

    console.log(this.Cards);
  }
}
