export interface IJobOffer {
  id: string;
  userId: string;
  company: string;
  position: string;
  seniority: string;
  description: string;
  prerequisites: string[];
}

export const initJobOffer: IJobOffer = {
  id: '',
  userId: '',
  company: '',
  position: '',
  seniority: '',
  description: '',
  prerequisites: [],
};
