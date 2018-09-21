import { IEvent } from './event';
import { ISnapshot } from './snapshot';

export interface IDb {
  save_events(provider: string, type: string, expectedVersion: number, events: IEvent[]): Promise<number>;
  get_events(provider?: string, type?: string, offset?: number, limit?: number): Promise<IEvent[]>;
  count_events(provider?: string, type?: string): Promise<number>;
  save_snapshot(provider: string, version: number, snapshot: ISnapshot): void;
  latest_snapshot(provider: string): Promise<ISnapshot>;
}
