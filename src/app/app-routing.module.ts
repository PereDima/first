import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { MainComponent } from './main/main.component';
import { SkillsComponent } from './skills/skills.component';
import { NfnComponent } from './nfn/nfn.component';
import { StudyComponent } from './study/study.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'work', component: WorkComponent},
  {path: 'study', component: StudyComponent},
  {path: '**', component: NfnComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
