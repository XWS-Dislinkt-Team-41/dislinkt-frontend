import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IJobOffer, initJobOffer } from 'src/app/model/jobOffer';
import { JobOfferService } from 'src/app/services/job-offer.service';

@Component({
  selector: 'app-add-edit-job-offer',
  templateUrl: './add-edit-job-offer.component.html',
  styleUrls: ['./add-edit-job-offer.component.css'],
})
export class AddEditJobOfferComponent implements OnInit {
  jobOffer: IJobOffer = initJobOffer;
  jobOfferId!: string;
  prerequisite!: string;

  ngOnInit(): void {
    this.jobOfferId = this._route.snapshot.paramMap.get('id')!;
  }

  constructor(
    private _jobOfferService: JobOfferService,
    private _route: ActivatedRoute,
    private _toastr: ToastrService,
    private _router: Router
  ) {}

  addJobOffer() {
    this._jobOfferService.createJobOffer(this.jobOffer).subscribe(
      (data) => {
        this._toastr.success('JobOffer was successfully added.');
        this._router.navigate(['/jobOffers']);
      },
      (err) => {
        console.log(err);
        this._toastr.error("Couldn't add the jobOffer!");
      }
    );
  }

  addPrerequisite() {
    this.jobOffer.prerequisites.push(this.prerequisite);
  }
}
