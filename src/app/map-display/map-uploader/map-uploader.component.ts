import { Component } from '@angular/core';
import { MapUploaderService } from '../../map-uploader.service';

@Component({
  selector: 'app-map-uploader',
  templateUrl: './map-uploader.component.html',
  styleUrls: ['./map-uploader.component.css']
})
export class MapUploaderComponent {

  constructor(private mapUploader: MapUploaderService) {
    this.mapUploader = mapUploader;
   }

  onFileChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];

      reader.readAsDataURL(file);
      reader.onload = () => {
        this.mapUploader.addToArray(file.name, file.type, reader.result.split(',')[1]);
      };
    }

  }

}
