import { IDb } from './db';
import { IEvent } from './event';
import { ISnapshot } from './snapshot';

export interface IStore {
  save_events(provider: string, type: string, expectedVersion: number, events: IEvent[]): Promise<number>;
  get_events(provider?: string, type?: string, offset?: number, limit?: number): Promise<IEvent[]>;
  count_events(provider?: string, type?: string): Promise<number>;
  save_snapshot(provider: string, version: number, snapshot: ISnapshot): void;
  latest_snapshot(provider: string): Promise<ISnapshot>;
}

export class Store implements IStore {
  private db: IDb;
  constructor(db: IDb) {
    this.db = db;
  }

  public save_events(provider: string, type: string, expectedVersion: number, events: IEvent[]): Promise<number> {
    return this.db.save_events(provider, type, expectedVersion, events);
  }

  public get_events(provider?: string, type?: string, offset?: number, limit?: number): Promise<IEvent[]> {
    return this.db.get_events(provider, type, offset, limit);
  }

  public count_events(provider?: string, type?: string): Promise<number> {
    return this.db.count_events(provider, type);
  }

  public save_snapshot(provider: string, verison: number, snapshot: ISnapshot) {
    throw new Error('Not yet implemented');
  }

  public latest_snapshot(provider: string): Promise<ISnapshot> {
    throw new Error('Not yet implemented');
  }
}
