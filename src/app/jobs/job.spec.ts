import { Job } from './job';

describe('Job', () => {
  it('should create an instance', () => {
    expect(new Job('title', 'description', 100000, 840, 'ChIJSXSioZtUDWsRIp8OL3aPIjc')).toBeTruthy();
  });
});
