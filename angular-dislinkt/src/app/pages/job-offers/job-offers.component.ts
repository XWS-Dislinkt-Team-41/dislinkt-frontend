import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IJobOffer } from 'src/app/model/jobOffer';
import { IUser } from 'src/app/model/user';
import { JobOfferService } from 'src/app/services/job-offer.service';

@Component({
  selector: 'app-job-offers',
  templateUrl: './job-offers.component.html',
  styleUrls: ['./job-offers.component.css'],
})
export class JobOffersComponent implements OnInit {
  addFormVisible: boolean = false;
  jobOffer!: IJobOffer[];
  jobOffers!: IJobOffer[];
  jobOfferId!: number;
  filter: string = '';
  jobOfferOwner!: IUser;

  constructor(
    private _router: Router,
    private _jobOfferService: JobOfferService,
    private _toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this._jobOfferService.getJobOffers().subscribe((data) => {
      this.jobOffers = data.jobOffers;
    });
  }

  jobOfferProfile(jobOfferId: string) {
    this._router.navigateByUrl(`jobOfferProfile/${jobOfferId}`);
  }

  addJobOffer() {
    this._router.navigateByUrl('addJobOffer/1');
  }

  added(submitted: boolean) {}

  deleteJobOffer(jobOfferId: string) {
    //   this._jobOfferService.deleteJobOffer(jobOfferId).subscribe((jobOffers) => {
    //     this._toastr.success('JobOffer successfully removed.');
    //     this.getJobOffers(this.jobOfferOwner.id);
    //   },
    //   (error) => {
    //     this._toastr.error(
    //       "You can't delete a jobOffer that has active reservations!"
    //     );
    //   });
  }

  searchJobOffers(filter: string) {
    this._jobOfferService.searchJobOffer(filter).subscribe((data) => {
      this.jobOffers = data.jobOffers;
    });
  }
}
