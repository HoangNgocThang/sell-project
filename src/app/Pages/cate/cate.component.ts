import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cate',
  templateUrl: './cate.component.html',
  styleUrls: ['./cate.component.scss']
})
export class CateComponent implements OnInit {

  name = 'thang';
  objet = {id: 1, name: 'hnt'};

  constructor() {
  }

  ngOnInit() {
  }

}
