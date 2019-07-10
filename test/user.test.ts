
import User from '../src/scripts/user';

describe('User', () => {
    it('can be initialized without an initializer', () => {
        const user = new User();
        expect(user.add(1, 1)).toBe(2);
    }); 
}); 