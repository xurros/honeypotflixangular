/**
 * Renders a view of the director of a selected movie.
 */

 import { Component, OnInit, Inject } from "@angular/core";
 import { FetchApiDataService } from "../fetch-api-data.service";
 // You'll use this import to close the dialog on success
 import { MAT_DIALOG_DATA } from "@angular/material/dialog"
 
@Component({
  selector: "app-movie-director-view",
  templateUrl: "./movie-director-view.component.html",
  styleUrls: ["./movie-director-view.component.scss"],
})

export class MovieDirectorViewComponent implements OnInit {
  constructor(
    public fetchApiData: FetchApiDataService,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      Name: string;
      Bio: string;
      // Birthdate: Date;
    }
  ) {}

  ngOnInit(): void {}
}
