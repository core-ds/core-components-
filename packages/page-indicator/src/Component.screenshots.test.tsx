import {
    setupScreenshotTesting,
    createSpriteStorybookUrl,
    createPreview,
} from '../../screenshot-utils';

const screenshotTesting = setupScreenshotTesting({
    it,
    beforeAll,
    afterAll,
    expect,
});

describe('PageIndicator.Dynamic', () =>
    createPreview({
        componentName: 'PageIndicator',
        subComponentName: 'Dynamic',
        knobs: {
            active: false,
        },
    }));

describe(
    'PageIndicator.Dynamic | main props',
    screenshotTesting({
        cases: [
            [
                'sprite',
                createSpriteStorybookUrl({
                    componentName: 'PageIndicator',
                    subComponentName: 'Dynamic',
                    knobs: {
                        activeElement: [0, 5, 8],
                        elements: [10, 12],
                        size: [6, 8],
                        activeElementSize: [80, 100],
                        gap: [6, 8],
                        active: false,
                    },
                    size: { width: 300, height: 20 },
                }),
            ],
        ],
        screenshotOpts: {
            fullPage: true,
        },
        viewport: { width: 1024, height: 600 },
    }),
);

describe('PageIndicator.Bullet', () =>
    createPreview({
        componentName: 'PageIndicator',
        subComponentName: 'Bullet',
        knobs: {
            activeElement: 0,
        },
    }));

describe(
    'PageIndicator.Bullet | main props',
    screenshotTesting({
        cases: [
            [
                'sprite',
                createSpriteStorybookUrl({
                    componentName: 'PageIndicator',
                    subComponentName: 'Bullet',
                    knobs: {
                        activeElement: [0, 2, 5],
                        elements: [5, 6, 10],
                        size: [6, 8],
                        gap: [6, 8],
                    },
                    size: { width: 100, height: 20 },
                }),
            ],
        ],
        screenshotOpts: {
            fullPage: true,
        },
        viewport: { width: 1024, height: 600 },
    }),
);

describe('PageIndicator.Step', () =>
    createPreview(
        {
            componentName: 'PageIndicator',
            subComponentName: 'Step',
            knobs: {
                activeElement: 0,
            },
        },
        '',
        {
            evaluate: async (page) => {
                await page.$eval('[class^=pageIndicator]', (el) => {
                    const div = document.createElement('div');
                    div.style.setProperty('width', '200px');
                    el.parentElement?.replaceChild(div, el);
                    div.appendChild(el);
                });
            },
        },
    ));

describe(
    'PageIndicator.Step | main props',
    screenshotTesting({
        cases: [
            [
                'sprite',
                createSpriteStorybookUrl({
                    componentName: 'PageIndicator',
                    subComponentName: 'Step',
                    knobs: {
                        activeElement: [0, 5, 8],
                        elements: [10, 12],
                        size: [6, 8],
                        gap: [6, 8],
                    },
                    size: { width: 200, height: 20 },
                }),
            ],
        ],
        screenshotOpts: {
            fullPage: true,
        },
        viewport: { width: 1024, height: 600 },
    }),
);

describe('PageIndicator.Runner', () =>
    createPreview(
        {
            componentName: 'PageIndicator',
            subComponentName: 'Runner',
            knobs: {
                activeElement: 0,
            },
        },
        '',
        {
            evaluate: async (page) => {
                await page.$eval('[class^=pageIndicator]', (el) => {
                    const div = document.createElement('div');
                    div.style.setProperty('width', '200px');
                    el.parentElement?.replaceChild(div, el);
                    div.appendChild(el);
                });
            },
        },
    ));

describe(
    'PageIndicator.Runner | main props',
    screenshotTesting({
        cases: [
            [
                'sprite',
                createSpriteStorybookUrl({
                    componentName: 'PageIndicator',
                    subComponentName: 'Runner',
                    knobs: {
                        activeElement: [0, 5, 8],
                        elements: [10, 12],
                        size: [6, 8],
                    },
                    size: { width: 200, height: 20 },
                }),
            ],
        ],
        screenshotOpts: {
            fullPage: true,
        },
        viewport: { width: 1024, height: 600 },
    }),
);
