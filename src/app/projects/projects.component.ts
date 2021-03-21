import { Component, OnChanges, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PROJECTS } from './myDataProjects';

export interface Project{
  readonly lesson: string;
  readonly theme: string;
  readonly note?: string;
  readonly href: string;
  readonly readme: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, OnChanges {
  projects: Project[];

  displayedColumns: string[] = ['lesson', 'theme', 'note', 'href', 'readme'];

  dataSource;

  constructor() {}

  ngOnChanges(){

  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(PROJECTS);
    console.log('datasource', this.dataSource);
  }


}
