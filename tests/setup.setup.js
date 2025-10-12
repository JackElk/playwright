import { test } from '@playwright/test';

test.beforeAll(() => {
    // reset or initialize something
    console.log('Test run is started');
});

test('dummy', () => {});