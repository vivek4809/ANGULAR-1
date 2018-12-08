import { Profile } from "../Profile/profile";

export interface User {
  emailID: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  password: string;
  age: number;
  mobileNo: number;
  gender: string;
  firstSecurityAnswer: string;
  secondSecurityAnswer: string;
  profile: Profile
}
