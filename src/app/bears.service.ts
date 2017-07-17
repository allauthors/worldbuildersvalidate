import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class BearsService {

  constructor(private http: Http) { }
  getAllBears()
  {
    return this.http.get('/api/bears')
      .map(res => res.json());
  }

}
