import { Component, OnInit } from '@angular/core';
import { Cell } from './models/Cell.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  //rows: Cell[] = Array(50).fill({ isWall:false, isAgv:false} as Cell);
  cell: Cell = { isWall: false, isAgv: false };
  title = 'prototype';
  columns: Cell[][] = [];
  agv_X_pos = 25;
  agv_Y_pos = 25;
  ngOnInit(): void {

    for (let index = 0; index < 30; index++) {
      let row = [];
      for (let j = 0; j < 100; j++) {
        row.push({ isWall: false, isAgv: false } as Cell);
      }
      this.columns.push(row)
    }
    console.log(this.columns)
    this.updateAGV();
  }

  btnClick(dir: 'right' | 'left' | 'down' | 'up') {
    this.resetAGV();
    switch (dir) {
      case 'right':
        this.agv_X_pos++;
        break;
      case 'left':
        this.agv_X_pos--;
        break;
      case 'up':
        this.agv_Y_pos--;
        break;
      case 'down':
        this.agv_Y_pos++;
        break;

      default:
        break;
    }
    this.updateAGV();
  }

  updateAGV() {
    this.columns[this.agv_Y_pos][this.agv_X_pos].isAgv = true;
  }

  resetAGV() {
    this.columns[this.agv_Y_pos][this.agv_X_pos].isAgv = false;
  }

}
