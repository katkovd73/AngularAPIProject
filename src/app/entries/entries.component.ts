import { EntryElement } from './../interfaces/EntryElements';
import { Component, OnInit } from '@angular/core';
import { EntryService } from '../entry.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit {

  displayedColumns: string[] = ['Description', 'IsExpense', 'Value'];
  dataSource: any;

  constructor(private service:EntryService) { }

  ngOnInit() {
    this.service.getAll().subscribe((data) => {
      console.log('Result - ', data);
      this.dataSource = new MatTableDataSource<EntryElement>(data as EntryElement[]);
    })
  }

}
