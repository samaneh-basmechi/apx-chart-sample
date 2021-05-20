export interface ProgressColorModel {
    bgColor: string;
    borderColor: string;
    progressColor: string;
}

export interface RateSatusModel {
    Bad: ProgressColorModel;
    Weak: ProgressColorModel;
    Medium: ProgressColorModel;
    Good: ProgressColorModel;
    Exelent: ProgressColorModel;
}

