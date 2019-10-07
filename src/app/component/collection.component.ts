import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  processForm(form: NgForm) {
    const name = form.value.name;
    console.log('Value is: ' + name);
    form.reset();
  }

  constructor() { }

  ngOnInit() {
  }

}
