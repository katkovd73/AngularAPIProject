import { EntryElement } from './../interfaces/EntryElements';
import { Component, OnInit } from '@angular/core';
import { EntryService } from '../entry.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { UpdateEntryComponent } from '../update-entry/update-entry.component';
import { compute } from '../Test_Functions/compute';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit {

  displayedColumns: string[] = ['Description', 'IsExpense', 'Value', 'Actions'];
  dataSource: any;
  countNumber!: number;

  constructor(private service:EntryService,
              private dialog:MatDialog) { }

  ngOnInit() {
    this.service.getAll().subscribe((data) => {
      console.log('Result - ', data);
      this.dataSource = new MatTableDataSource<EntryElement>(data as EntryElement[]);
    })

    this.countNumber = 0;
  }

  updateEntry(entry: any) {
    console.log(entry);
    this.dialog.open(UpdateEntryComponent, {
      data: {
        Id:entry.Id,
        Description:entry.Description,
        IsExpense:entry.IsExpense,
        Value:entry.Value
      }
    })
  }

  countUp(){
    this.countNumber = compute(this.countNumber);   
  }

}
