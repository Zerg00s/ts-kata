
import User from '../src/scripts/user';

test('should return 2', () => {
    const user = new User();
    expect(user.add(1, 1)).toBe(2);
}); 