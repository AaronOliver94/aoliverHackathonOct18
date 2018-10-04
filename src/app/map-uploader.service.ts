import { Injectable } from '@angular/core';
import {
  Headers,
  Http,
  RequestOptionsArgs
} from '@angular/http';
import { VisionResponse } from './models/custom-vision.model';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class MapUploaderService {

  constructor(private http: Http) {}

  public submitBuildingSearch(data): Observable <VisionResponse> {

    const opt: RequestOptionsArgs = {
      headers: new Headers({
        'content-type': 'application/octet-stream'
      })
    };
    opt.headers.append('Prediction-Key', '68d134eb0f3f4479803227535b020909');
    const uri = 'https://southcentralus.api.cognitive.microsoft.com/customvision/' +
    'v2.0/Prediction/5459b472-b946-4f9a-b8cf-8a80feb7b30c/image?iterationId=781369d1-e6dd-47a0-b481-142f5540dbce';
    return this.http.post(uri, data, opt).map((resp) => resp.json());
  }

}
