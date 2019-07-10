
import { expect } from 'chai';
import User from '../src/scripts/user';

describe('User', () => {
    it('can be initialized without an initializer', () => {
        const user = new User();
        expect(user.add(1,1)).to.equal(2);
    });
});