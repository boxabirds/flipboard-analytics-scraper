import url from 'url';
import { createRunner } from '@puppeteer/replay';

export async function run(extension) {
    const runner = await createRunner(extension);
    // const runner = await createRunner(extension, {
    //     browser: {
    //         headless: false, // Set headless to false
    //     }
    // });



    await runner.runBeforeAllSteps();

    await runner.runStep({
        type: 'navigate',
        url: 'https://flipboard.com/',
        assertedEvents: [
            {
                type: 'navigation',
                url: 'https://flipboard.com/',
                title: 'Flipboard: Your Social Magazine'
            }
        ]
    });
    await runner.runStep({
        type: 'click',
        target: 'https://cdn.privacy-mgmt.com/index.html?hasCsp=true&message_id=903716&consentUUID=null&consent_origin=https%3A%2F%2Fcdn.privacy-mgmt.com%2Fconsent%2Ftcfv2&preload_message=true&version=v1',
        selectors: [
            [
                'aria/Accept'
            ],
            [
                'div.mobile-reverse > div:nth-of-type(2) > button'
            ],
            [
                'xpath///*[@id="notice"]/div[3]/div[2]/button'
            ],
            [
                'pierce/div.mobile-reverse > div:nth-of-type(2) > button'
            ],
            [
                'text/Accept'
            ]
        ],
        offsetY: 25.8203125,
        offsetX: 136.5,
    });
    await runner.runStep({
        type: 'click',
        target: 'main',
        selectors: [
            [
                'aria/Username or Email'
            ],
            [
                'form > div:nth-of-type(1) input'
            ],
            [
                'xpath///*[@id="content"]/div/div/form/div[1]/div/input'
            ],
            [
                'pierce/form > div:nth-of-type(1) input'
            ]
        ],
        offsetY: 29.046875,
        offsetX: 133.5,
    });
    await runner.runStep({
        type: 'change',
        value: 'julian.harris@gmail.com',
        selectors: [
            [
                'aria/Username or Email'
            ],
            [
                'form > div:nth-of-type(1) input'
            ],
            [
                'xpath///*[@id="content"]/div/div/form/div[1]/div/input'
            ],
            [
                'pierce/form > div:nth-of-type(1) input'
            ]
        ],
        target: 'main'
    });
    await runner.runStep({
        type: 'click',
        target: 'main',
        selectors: [
            [
                'aria/Password'
            ],
            [
                'div:nth-of-type(2) input'
            ],
            [
                'xpath///*[@id="content"]/div/div/form/div[2]/div/input'
            ],
            [
                'pierce/div:nth-of-type(2) input'
            ]
        ],
        offsetY: 17.046875,
        offsetX: 144.5,
    });
    await runner.runStep({
        type: 'change',
        value: 'Fl1pb04rdc0m!',
        selectors: [
            [
                'aria/Password'
            ],
            [
                'div:nth-of-type(2) input'
            ],
            [
                'xpath///*[@id="content"]/div/div/form/div[2]/div/input'
            ],
            [
                'pierce/div:nth-of-type(2) input'
            ]
        ],
        target: 'main'
    });
    await runner.runStep({
        type: 'click',
        target: 'main',
        selectors: [
            [
                'aria/Log In'
            ],
            [
                'form > button'
            ],
            [
                'xpath///*[@id="content"]/div/div/form/button'
            ],
            [
                'pierce/form > button'
            ],
            [
                'text/Log In'
            ]
        ],
        offsetY: 20.6484375,
        offsetX: 182.5,
    });
    await runner.runStep({
        type: 'click',
        target: 'main',
        selectors: [
            [
                'aria/Avatar - Julian[role="image"]'
            ],
            [
                'div > header img'
            ],
            [
                'xpath///*[@id="content"]/div/div/header/nav/ul/li[5]/div/button/div/div/picture/img'
            ],
            [
                'pierce/div > header img'
            ]
        ],
        offsetY: 20.453125,
        offsetX: 10,
    });
    await runner.runStep({
        type: 'click',
        target: 'main',
        selectors: [
            [
                'aria/Analytics'
            ],
            [
                'nav > ul li:nth-of-type(2) > a'
            ],
            [
                'xpath///*[@id="content"]/div/div/header/nav/ul/li[5]/ul/li[2]/a'
            ],
            [
                'pierce/nav > ul li:nth-of-type(2) > a'
            ],
            [
                'text/Analytics'
            ]
        ],
        offsetY: 25.6015625,
        offsetX: 67.046875,
    });
    await runner.runStep({
        type: 'click',
        target: 'main',
        selectors: [
            [
                'aria/HIGHLIGHTS: CLIMATE HOPE[role="rowheader"]'
            ],
            [
                'tbody > tr:nth-of-type(1) > th'
            ],
            [
                'xpath///*[@id="content"]/div/div/div/main/div/div[2]/section[2]/div/table/tbody/tr[1]/th'
            ],
            [
                'pierce/tbody > tr:nth-of-type(1) > th'
            ]
        ],
        offsetY: 20.0078125,
        offsetX: 209,
    });

    await runner.runAfterAllSteps();
}

if (process && import.meta.url === url.pathToFileURL(process.argv[1]).href) {
    run()
}
