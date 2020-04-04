import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
clickMethod(name: string) {
  if(confirm("Thank you for your E-Mail")) {
    console.log("Implement sended Mail here");
  }
}
controller($scope) {
    $scope.resetForm = function() {
    //$scope.resetme.reset();
    document.getElementById('resetme');
    };
};
  constructor() { }

  ngOnInit(): void {
  }

}
