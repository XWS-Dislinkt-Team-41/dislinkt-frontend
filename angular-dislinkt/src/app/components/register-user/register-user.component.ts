
import { UserService } from './../../services/user.service';
import { Education, EducationTypeToLabelMapping, emptyUserProfile, IUserProfile } from './../../model/profile';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import {
  ModalDismissReasons,
  NgbModal,
  NgbModalRef,
} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  modalReference!: NgbModalRef;
  today: Date = new Date();
  reservationThreeDays: Date = new Date();
  constructor(
    private modalService: NgbModal,
    private userService: UserService
  ) {}
  closeResult = '';
  user: IUserProfile = emptyUserProfile;
  minDate: Date = new Date();
  experience!: string;
  interest!: string;
  skill!: string;
  education = Education;
  confirmPassword!: string;
  educationTypes: any = Object.values(Education).filter(
    (value) => typeof value === 'number'
  );
  educationMapping: any = EducationTypeToLabelMapping;
  
  open(content: any) {
    this.modalReference = this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
    });
    this.modalReference.result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  register() {
    this.user.skills.push(this.skill);
    this.userService.registerUser(this.user).subscribe(() => {
      this.modalReference.close();
    });
  }

  ngOnInit(): void {}
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
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
