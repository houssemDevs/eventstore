export interface IEvent {
  type: string;
  provider: string;
  [_: string]: any;
}
