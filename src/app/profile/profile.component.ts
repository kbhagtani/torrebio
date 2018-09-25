import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  data: any;

  constructor( private route: ActivatedRoute) { }


  ngOnInit() {
    this.data = this.route.paramMap.switchMap((p: ParamMap) => {
      return p.get('data');
    });

  }

}
