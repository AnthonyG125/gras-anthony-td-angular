import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KanbanComponent } from './kanban/kanban.component';
import { KanbanListComponent } from './kanban/component/kanban-list/kanban-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {DragDropModule} from "@angular/cdk/drag-drop";
import { DialogKanbanAddComponent } from './kanban/component/dialog-kanban-add/dialog-kanban-add.component';
import {MatDialogModule} from "@angular/material/dialog";
import { DialogKanbanUpdateComponent } from './kanban/component/dialog-kanban-update/dialog-kanban-update.component';

@NgModule({
  declarations: [
    AppComponent,
    KanbanComponent,
    KanbanListComponent,
    DialogKanbanAddComponent,
    DialogKanbanUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    DragDropModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
