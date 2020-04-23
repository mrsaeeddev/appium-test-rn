import wd from 'wd';
jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
const PORT = 4723;
const config = {
    platformName: 'Android',
    deviceName: 'ZY2246GR6W',
    app: 'C:/Users/HUZAIFA/Desktop/Creatella/AwesomeProject/android/app/build/outputs/apk/debug/app-debug.apk'
};
const driver = wd.promiseChainRemote('localhost', PORT);
beforeAll(async () => {
    await driver.init(config);
    await driver.sleep(3000);
}) // Sometime for the app to load
test('appium renders', async () => {
    expect(await driver.hasElementByAccessibilityId('app-root')).toBe(true);
    // const element = await driver.elementByAccessibilityId('alertButton')
    // await element.click()
    expect(await driver.hasElementByAccessibilityId('notHere')).toBe(false);
});