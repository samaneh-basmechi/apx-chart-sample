import { RateSatusModel } from '../../../models/rate-satus.model';
export class ProgressColorConfig{
    public progressColors: RateSatusModel = {
        Bad: {
          bgColor: `rgba( ${255 + ', ' + 0 + ', ' + 0} , 0.2)`,
          borderColor: `rgba( ${255 + ', ' + 0 + ', ' + 0} , 0.8)`,
          progressColor: `rgba( ${255 + ', ' + 0 + ', ' + 0} , 1)`
        },
        Weak: {
          bgColor: `rgba( ${255 + ', ' + 106 + ', ' + 0} , 0.2)`,
          borderColor: `rgba( ${255 + ', ' + 106 + ', ' + 0} , 0.8)`,
          progressColor: `rgba( ${255 + ', ' + 106 + ', ' + 0} , 1)`
        },
        Medium: {
          bgColor: `rgba( ${255 + ', ' + 212 + ', ' + 0} , 0.2)`,
          borderColor: `rgba( ${255 + ', ' + 212 + ', ' + 0} , 0.8)`,
          progressColor: `rgba( ${255 + ', ' + 212 + ', ' + 0} , 1)`,
        },
        Good: {
          bgColor: `rgba( ${3 + ', ' + 193 + ', ' + 0} , 0.2)`,
          borderColor: `rgba( ${3 + ', ' + 193 + ', ' + 0} , 0.8)`,
          progressColor: `rgba( ${3 + ', ' + 193 + ', ' + 0} , 1)`
        },
        Exelent: {
          bgColor: `rgba( ${4 + ', ' + 128 + ', ' + 2} , 0.2)`,
          borderColor: `rgba( ${4 + ', ' + 128 + ', ' + 2} , 0.8)`,
          progressColor: `rgba( ${4 + ', ' + 128 + ', ' + 2} , 1)`
        },
      };
}
