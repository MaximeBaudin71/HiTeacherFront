import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { Task } from '../../models/task.models';
import { TaskService } from '../../core/service/task.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {

  tachesNonRealisees: Task[] = [];
  tachesRealisees: Task[] = [];


  constructor(private tacheService: TaskService) { }

  onTaskDropped(event: CdkDragDrop<Task[]>) {
    const item = event.item.data; // La tâche que vous avez déplacée
    const previousList = event.previousContainer.data; // La liste source
    const currentList = event.container.data; // La liste cible
  
    // Si vous souhaitez inverser la valeur de IsCompleted lorsqu'une tâche est déplacée
    item.IsCompleted = !item.IsCompleted;
  
    // Supprimez la tâche de la liste source et ajoutez-la à la liste cible
    previousList.splice(event.previousIndex, 1);
    currentList.splice(event.currentIndex, 0, item);
    
    // Ensuite, vous pouvez mettre à jour la tâche via votre service
    //this.tacheService.updateTache(item).subscribe(/* Gérer la réponse */);
  }

  

  ngOnInit() {
    this.tacheService.getTaches().subscribe(data => {
      // Filtrer les tâches en fonction de l'attribut IsCompleted
      this.tachesNonRealisees = data.filter(tache => !tache.isCompleted);
      this.tachesRealisees = data.filter(tache => tache.isCompleted);
    });






  }
}
