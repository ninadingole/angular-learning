import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-tv-rating-form',
  templateUrl: './tv-rating-form.component.html',
  styleUrls: ['./tv-rating-form.component.scss']
})
export class TvRatingFormComponent implements OnInit {
  tvShows = [
    { name: 'Better call Saul!' },
    { name: 'Breaking Bad' },
    { name: 'Lost' },
    { name: 'Mad men' }
  ];


  form = new FormGroup({
    tvShow: new FormControl('', Validators.required),
    rating: new FormControl('', Validators.required),
  });

  submit() {
    alert(JSON.stringify(this.form.value));
    this.form.reset();
  }
  constructor() { }

  ngOnInit(): void {
  }



}
