import { Component, Input, OnInit } from '@angular/core';
import { Cell } from 'src/app/models/Cell.model';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {
//  @Input() isWall = false;
//  @Input() isAgv = false;
@Input() cell:Cell = {} as Cell;
  constructor() { }

  ngOnInit(): void {
  }

  mouseEnter(e:any){
  if(e.ctrlKey)
  {
    this.cell.isWall = true;
  }
  }
}
