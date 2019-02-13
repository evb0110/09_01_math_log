import {
  Magician,
  Daemon,
} from '../src/js/MagicianDaemon';


test('testing stoned magician', () => {
  const magician = new Magician('John', 3, 4, 10, 14);

  magician.attack = 100;
  magician.stoned = true;

  expect(magician.attack(2)).toBe(85);
});

test('testing healthy magician', () => {
  const magician = new Magician('John', 3, 4, 10, 14);

  magician.attack = 100;

  expect(magician.attack(3)).toBe(80);
});

test('testing stoned not boolean', () => {
  const magician = new Magician('John', 3, 4, 10, 14);

  magician.attack = 100;
  const getResult = () => {
    magician.stoned = 'stoned';
  };

  expect(getResult).toThrow();
});

test('testing stoned getter', () => {
  const magician = new Magician('John', 3, 4, 10, 14);

  expect(magician.stoned).toBe(false);
});

test('testing stoned daemon', () => {
  const daemon = new Daemon('Peter', 2, 3, 11, 34);

  daemon.stoned = true;
  daemon.attack = 1000;
  expect(daemon.attack(8)).toBe(915);
});

test('attack should be non-negative', () => {
  const daemon = new Daemon('Peter', 2, 3, 11, 34);

  daemon.stoned = true;
  daemon.attack = 1;
  expect(daemon.attack(100) === 0).toBe(true);
});
