import { test } from '@playwright/test';

test.afterAll(() => {
    // reset or initialize something
    console.log('All tests completed');
});

test('dummy', () => {});