export interface IMessage {
  id: string;
  text: string;
  sentTime: Date;
  seen: boolean;
}

export const emptyMessage: IMessage = {
  id:'1234567899',
  text:  '',
  sentTime: new Date(),
  seen: false
}