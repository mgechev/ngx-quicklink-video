import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TeamComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: TeamComponent
      }
    ]),
    CommonModule
  ]
})
export class TeamModule { }
