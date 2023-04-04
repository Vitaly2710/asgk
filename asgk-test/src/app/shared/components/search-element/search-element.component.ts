import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Person} from "../../interfaces/costumers.interface";
import {FormControl, FormGroup} from "@angular/forms";
import {SearchService} from "../../services/search.service";

@Component({
  selector: 'app-search-element',
  templateUrl: './search-element.component.html',
  styleUrls: ['./search-element.component.css'],
  providers: [SearchService]
})
export class SearchElementComponent implements OnInit{
  @Input() list: Person[] = [];

  @Output() filteredList = new EventEmitter<Person[]>()

  constructor(private search: SearchService) {
  }


  public searchForm : FormGroup = new FormGroup({
    "search": new FormControl(),
  });

  ngOnInit() {
    this.subscribe();
  }

  private subscribe() {
    this.searchForm.valueChanges.subscribe((i) => {
      this.filteredList.emit(this.search.getList(this.list, i.search))
    })
  }


}
