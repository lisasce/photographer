import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  zoomPic(event){
    //@ts-ignore
    //$(event.target).toggleClass("zoom");
    //@ts-ignore
    let sourcePic = event.srcElement.src;
    console.log(sourcePic);
    let zoomedPic = document.getElementById("zoomedPic");
    //@ts-ignore
    zoomedPic.innerHTML = "<img style='width:100%' src="+sourcePic+">";
    //@ts-ignore
    $("#zoomedPic").toggleClass("toggle");
    // $("#zoomedPic").show();
  }


  hideZoom(){
    //@ts-ignore
    $("#zoomedPic").hide();
    //@ts-ignore
    $("#zoomedPic").removeClass("toggle");
  }
}
