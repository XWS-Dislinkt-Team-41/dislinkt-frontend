import {
  IUserProfile,
  Education,
  EducationTypeToLabelMapping,
} from './../../../model/profile';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { UserProfileService } from 'src/app/services/user-profile.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-change-user-info',
  templateUrl: './change-user-info.component.html',
  styleUrls: ['./change-user-info.component.css'],
})
export class ChangeUserInfoComponent implements OnInit {
  @Input() user!: IUserProfile;
  confirmPassword!: string;
  location!: string;
  errorMessage!: string;
  @Input() userId!: string;
  minDate!: Date;
  experience!: string;
  interest!: string;
  skill!: string;
  education = Education;
  educationTypes: any = Object.values(Education).filter(
    (value) => typeof value === 'number'
  );
  educationMapping: any = EducationTypeToLabelMapping;

  constructor(
    private _profileService: UserProfileService,
    private _route: ActivatedRoute,
    private _toastr: ToastrService
  ) {}

  ngOnInit(): void {
    // this.userId = this._route.snapshot.paramMap.get('id')!;
    // this._profileService.getUserById(this.userId).subscribe((user) => {
    //   this.user = user;
    // });
    this._profileService
      .getUserById('626ed920b5d7948d48ffc170')
      .subscribe((user) => {
        this.user = user.user;
      });
    this.minDate = new Date(Date.now());
  }

  updatePersonalInfo() {
    this._profileService.updatePersonalInfo(this.user).subscribe({
      next: (data) => {
        this.user = data.user;
        this._toastr.success('User has been successfully udpated.');
      },
      error: (error) => {
        this.errorMessage = error.message;
        this._toastr.error('Update has failed.');
      },
    });
  }

  updateCareerInfo() {
    this._profileService.updateCareerInfo(this.user).subscribe({
      next: (data) => {
        this.user = data;
        this._toastr.success('User has been successfully udpated.');
      },
      error: (error) => {
        this.errorMessage = error.message;
        this._toastr.error('Update has failed.');
      },
    });
  }

  updateInterestsInfo() {
    this._profileService.updateInterestsInfo(this.user).subscribe({
      next: (data) => {
        this.user = data;
        this._toastr.success('User has been successfully udpated.');
      },
      error: (error) => {
        this.errorMessage = error.message;
        this._toastr.error('Update has failed.');
      },
    });
  }

  addExperience() {
    this.user.experience.push(this.experience);
  }

  addInterest() {
    this.user.interests.push(this.interest);
  }

  addSkill() {
    this.user.skills.push(this.skill);
  }
}
