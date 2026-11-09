import { Eyes, Target, BatchInfo } from '@applitools/eyes-webdriverio';
describe("window handling",()=>{
    let eyes: Eyes;
    beforeEach(async () => {
    eyes = new Eyes();
    eyes.setApiKey(process.env.APPLITOOLS_API_KEY!);
    eyes.setBatch(new BatchInfo({ name: 'WDIO visual smoke' }));

    await eyes.open(
      browser,
      'My App',
      'Homepage test',
    );
  });

  afterEach(async () => {
    await eyes.close();
  });

    it("window handling", async()=>{
        await browser.url("https://www.wikipedia.org/")
        await browser.pause(2000);
        await eyes.check("Home page",Target.window());
        let tet=await $$("//a")
        for(let a of tet){
            console.log(a.getText());
        }
        await browser.pause(6000);
        let dropdown =await $("#searchLanguage")
        await eyes.check("new test",Target.window())
        expect(dropdown).toBeDisplayed();
        dropdown.selectByVisibleText('Shqip')
        await browser.saveScreenshot("screenshot1.png");

        // await browser.url("https://demoqa.com/browser-windows");
        // await $('//button[@id="tabButton"]').doubleClick();
        // const text=await $("//h1").getText();
        // console.log("value:"+text);
        // await browser.pause(30000); 


        // await browser.pause(20000);
        // const handles=await browser.getWindowHandles();
        // browser.switchToWindow(handles[1]);

    }); 
});