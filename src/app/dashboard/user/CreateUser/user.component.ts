'use strict';
import { Component, OnInit, OnDestroy} from '@angular/core';
import {userModel} from '../../../models/userModel';
import {userService} from '../../../services/userService';
import {roleService} from '../../../services/roleService';
import {ToasterModule, ToasterService} from 'angular2-toaster/angular2-toaster';

@Component({
  selector: 'app-user',
  templateUrl: "user.component.html",
  styleUrls: ['user.component.css'],
  providers: [roleService, userService],

})
export class userComponent implements OnInit {

  // variable declaration
  private usermodel;
  private rolesList: any;
  private errorString:string;
  private toasterService: ToasterService;
  
  constructor(private _http: userService, private _roleHttp:roleService,toasterService: ToasterService) {
  this.usermodel = new userModel("", "", "", "", "", "", "","","",true);
   this.toasterService = toasterService;
  }
  ngOnInit() {
  this.getRoles();
  }
  ngOnDestroy() {

  }

  getRoles() {
    this._roleHttp.getRoles().subscribe(
      data => {
        this.rolesList = data.results     
      },
      error => alert(error),
      () => console.log("Roles data FetChing completed")
    );

  }

  onChange($event, deviceValue) {
    console.log(deviceValue);
}

  saveUser() {
    console.log("" + this.usermodel.username);
    this._http.createUser(this.usermodel);
    this.toasterService.pop('success', 'User deleted Successfully!!!!', 'User deleted Successfully!!!!!!');


  }

}
