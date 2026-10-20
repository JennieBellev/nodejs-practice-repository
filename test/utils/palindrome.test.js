const isPlaindrome = require('./palindrome');

test('returns true for a strandard single-word palindrome', () => {
    expect(isPlaindrome('racecar')).toBe(true);
});

test('returns true for a complex palindrom sentence ignroing case and spaces', () => {
    expect(isPlaindrome('A man, a plan, a canal: Panama')).toBe(true);
}
);
