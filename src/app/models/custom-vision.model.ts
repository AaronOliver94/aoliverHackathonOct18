export class VisionResponse {
  id: string;
  project: string;
  iteration: string;
  created: string;
  predictions: Array < Prediction > ;
}

export class Prediction {
  tagId: string;
  tagName: string;
  probability: number;
}
