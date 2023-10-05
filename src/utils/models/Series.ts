import { MotionPicture } from './MotionPicture';

export interface Series extends MotionPicture {
  seasons: number;
  episodes: number;
}
