import fetchRocket from './__mock__/rocketSlice';

describe('Rockets must pass the test', () => {
  test('Fetch available rockets must return data', () => {
    expect(fetchRocket()).toBeDefined();
  });
  test('Fetch mission return value length must be', () => {
    expect(fetchRocket()).toHaveLength(3);
  });
  test('Fetch mission return name to be', () => {
    expect(fetchRocket()[2].name).toBe('Falcon Heavy');
  });
});
