import { User } from './user';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User('firstName', 'lastName', new Date(), 'phoneNumber', 'email')).toBeTruthy();
  });
});
