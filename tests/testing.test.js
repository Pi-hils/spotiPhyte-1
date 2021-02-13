
describe('testing shop', () => {
  test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
  });

  test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
  });

  test('buy fertilizer from the shop', () => {
    const data = {fertilizer: 1};
    expect(data).toEqual({fertilizer: 1});
  });
});

describe('items inside shhop', () =>{
  test('buy fertilizer from the shop', () => {
  const items = ['fertilizer','dancepowder','weedkiller','miracleGro'];
   expect (items).toEqual(['fertilizer','dancepowder','weedkiller','miracleGro']);
  });

  test('buy fertilizer from the shop', () => {
    const items = ['fertilizer','dancepowder','weedkiller','miracleGro'];
    // expect("a string").toContain("a")
    expect (items).toContain('fertilizer');
    });

    test('buy fertilizer from the shop', () => {
      const items = ['fertilizer','dancepowder','weedkiller','miracleGro'];
      expect (items).toContain('dancepowder');
      });

      test('buy fertilizer from the shop', () => {
        const items = ['fertilizer','dancepowder','weedkiller','miracleGro'];
        expect (items).toContain('weedkiller');
        });
});