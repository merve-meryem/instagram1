import { beforeEach, expect, test } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

let dom;
let document;
beforeEach(() => {
  dom = render(<App />);
  document = dom.container;
});

test("Arama Çubuğu componenti eklenmiş", () => {
  expect(screen.queryByPlaceholderText(/Arama/i)).not.toBe(null);
});

test('Arama Çubuğu ile search yapılabiliyor.', async () => {
  const arama = screen.queryByPlaceholderText(/Arama/i);
  fireEvent.input(arama, { target: { value: 'phil' } });
  expect(screen.queryAllByText(/philzcoffee/i)).not.toBe(null);
  expect(screen.queryByText(/Twitch/i)).toBe(null);
});

test("Arama Çubuğundaki input alanına bir şeyler yazıp, silince de doğru sonuçlar geliyor. ", async () => {
  const arama = screen.queryByPlaceholderText(/Arama/i);
  fireEvent.input(arama, { target: { value: 'phil' } });
  expect(screen.queryAllByText(/philzcoffee/i)).not.toBe(null);
  expect(screen.queryByText(/Twitch/i)).toBe(null);

  fireEvent.input(arama, { target: { value: '' } });
  expect(screen.queryAllByText(/philzcoffee/i)).not.toBe(null);
  expect(screen.queryAllByText(/Twitch/i)).not.toBe(null);
});
