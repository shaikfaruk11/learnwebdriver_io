//  describe("alert handling flows", () => {
//     it ("alert", async()=>{
//         await browser.pause(2000)
//         await $('//android.widget.Button[@content-desc="Forms"]').click();
//         await browser.pause(2000)
//         await $("//android.widget.TextView[@text='Active']").click()
//         await browser.pause(2000);
//         await browser.acceptAlert();
//         await $('~text-input').setValue("hello");
// })
//  it ("alert dismiss", async()=>{
//         await browser.pause(2000)
//         await $('//android.widget.Button[@content-desc="Forms"]').click();
//         await browser.pause(2000)
//         await $("//android.widget.TextView[@text='Active']").click()
//         await browser.pause(2000);
//         await browser.dismissAlert();
//         await $('~text-input').setValue("hello");

//     })
//      it ("alert get text", async()=>{
//         await browser.pause(2000)
//         await $('//android.widget.Button[@content-desc="Forms"]').click();
//         await browser.pause(2000)
//         await $("//android.widget.TextView[@text='Active']").click()
//         await browser.pause(2000);
//         console.log("alert text: " + await browser.getAlertText());

//     })
// });