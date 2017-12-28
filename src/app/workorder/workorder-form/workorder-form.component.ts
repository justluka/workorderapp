import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  moduleId : module.id,
  templateUrl: './workorder-form.component.html',
  styleUrls: ['./workorder-form.component.css']
})
export class WorkorderFormComponent implements OnInit {
  colorTheme = 'theme-blue';
  bsConfig: Partial<BsDatepickerConfig>;
  constructor() { }

  ngOnInit() {
    this.bsConfig = Object.assign({}, { containerClass: 'theme-blue'});
  }

}
