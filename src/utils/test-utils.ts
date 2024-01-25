import { cleanup, render } from '@testing-library/react'
import { afterEach } from 'vitest'

afterEach(() => {
  cleanup()
})

function customRender(ui: React.ReactElement, options = {}) {
  return render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => children,
    ...options,
  })
}

export const getRandomIntegerInRange = (min = 1, max = 1) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const makeRandomDateString = () =>
  new Date(
    getRandomIntegerInRange(2000, 2050),
    getRandomIntegerInRange(0, 11),
    getRandomIntegerInRange(1, 28)
  ).toDateString();

export const makeRandomTaskText = () =>
  `Task Item ${getRandomIntegerInRange(1, 100)}`;

export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'
// override render export
export { customRender as render }