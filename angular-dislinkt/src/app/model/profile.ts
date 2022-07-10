import { Gender } from "./gender";

export interface IUserProfile {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  mobileNumber: string;
  gender: Gender;
  birthDay: Date;
  username: string;
  biography: string;
  experience: string[];
  education: Education;
  skills: string[];
  interests: string[];
  password: string;
  isPrivate: boolean;
}

export enum Education {
  Primary,
  LowerSecondary,
  UpperSecondary,
  PostSecondary,
  ShortCycleTetriary,
  Bachelor,
  Master,
  Doctorate,
}

export const EducationTypeToLabelMapping: Record<Education, string> = {
  [Education.Primary]: "Primary",
  [Education.LowerSecondary]: "Lower Secondary",
  [Education.UpperSecondary]: "Upper Secondary",
  [Education.PostSecondary]: "Post Secondary",
  [Education.ShortCycleTetriary]: "Short-Cycle Tetriary",
  [Education.Bachelor]: "Bachelor",
  [Education.Master]: "Master",
  [Education.Doctorate]: "Doctorate",
};
