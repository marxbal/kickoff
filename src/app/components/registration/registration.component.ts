import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  MatSort
} from '@angular/material/sort';
import {
  MatPaginator
} from '@angular/material/paginator';
import {
  MatTableDataSource
} from '@angular/material/table';
import {
  DatePipe
} from '@angular/common';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [DatePipe]
})
export class RegistrationComponent implements OnInit {

  displayedColumns: string[] = ['agentCode', 'fullName', 'email', 'contact', 'office'];
  dataSource: any;

  @ViewChild(MatSort, {
    static: true
  }) sort: MatSort;
  @ViewChild(MatPaginator, {
    static: true
  }) paginator: MatPaginator;
  constructor(private datePipe: DatePipe) {}

  registeredList: [];

  ngOnInit() {
    var savedList = localStorage.getItem('registeredList');

    if (savedList != '' && savedList != null) {
      this.registeredList = JSON.parse(savedList);
    }

    this.dataSource = new MatTableDataSource(this.registeredList);

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  save() {
    var date = this.datePipe.transform(new Date(), 'yyyyMMddHHmmss');
    var savedList = localStorage.getItem('registeredList');

    var FileSaver = require('file-saver');
    var file = new File([savedList], "list" + date + ".json", {
      type: "application/json;charset=utf-8"
    });
    FileSaver.saveAs(file);
  }
}
