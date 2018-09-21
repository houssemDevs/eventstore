export interface ISnapshot {
  provider: string;
  version: string;
  data: any;
  [_: string]: any;
}
