import Settings from '../src/js/settings';

const availableSettings = new Map([
  ['theme', new Set(['dark', 'light', 'gray'])],
  ['music', new Set(['trance', 'pop', 'rock', 'chillout', 'off'])],
  ['difficulty', new Set(['easy', 'normal', 'hard', 'nightmare'])],
]);

const defaultSettings = new Map(
  [...availableSettings].map(setting => [setting[0], [...setting[1]][0]]),
);

describe('TESTING DEFAULT AND AVAILABLE SETTINGS', () => {
  test('testing default values', () => {
    const settings = new Settings(availableSettings, defaultSettings);
    const result = settings.settings;
    const expected = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);

    expect(result).toEqual(expected);
  });

  test('testing available values for music and difficulty', () => {
    const settings = new Settings(availableSettings, defaultSettings);
    settings.music = 'off';
    settings.difficulty = 'nightmare';
    const result = settings.settings;
    const expected = new Map([
      ['theme', 'dark'],
      ['music', 'off'],
      ['difficulty', 'nightmare'],
    ]);

    expect(result).toEqual(expected);
  });

  test('testing available value for theme', () => {
    const settings = new Settings(availableSettings, defaultSettings);
    settings.theme = 'light';
    const result = settings.settings;
    const expected = new Map([
      ['theme', 'light'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);

    expect(result).toEqual(expected);
  });
});

describe('TESTING UNAVAILABLE SETTINGS', () => {
  test('testing wrong theme', () => {
    const settings = new Settings(availableSettings, defaultSettings);
    const makeResult = () => {
      settings.theme = 'dirty';
    };

    expect(makeResult).toThrow();
  });

  test('testing wrong music', () => {
    const settings = new Settings(availableSettings, defaultSettings);
    const makeResult = () => {
      settings.music = 'waltz';
    };

    expect(makeResult).toThrow();
  });

  test('testing wrong difficulty', () => {
    const settings = new Settings(availableSettings, defaultSettings);
    const makeResult = () => {
      settings.difficulty = 'hell';
    };

    expect(makeResult).toThrow();
  });
});
