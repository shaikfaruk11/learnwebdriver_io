// describe("handling e2e",()=>{
//     it("e2e", async()=>{
//         await browser.url("https://demoqa.com/automation-practice-form");
//         await browser.pause(20000);
//         await $('#firstName').setValue("shaik");
//         const firstName = await $('#firstName').getValue();
//         expect(firstName).toEqual("shaik");
//         await $('#lastName').setValue("faruk");
//         await $("#userEmail").setValue("s@gmail");
//         await $("//*[@value='Male']").click();
//         expect(await $("//*[@value='Male']").isSelected()).toEqual(true);
//         await browser.pause(2000);
//         await $("//*[@id='userNumber']").setValue("1234567890");
//         browser.saveScreenshot("./screenshot.png");
//         await browser.pause(2000);

//     //   await $('~Login').click()
//     //     await browser.pause(2000);
//     //     await $('//android.widget.TextView[@text="Sign up"]').click();
//     //     await browser.pause(2000);
//     //     await $("~input-email").setValue("xyz@gmail.com");
//     //     await browser.pause(2000);
//     //     await $("//android.widget.EditText[@content-desc='input-password']").setValue("12345678");
//     //     await browser.pause(2000);
//     //     await $("//android.widget.EditText[@content-desc='input-repeat-password']").setValue("12345678");
//     //     await browser.pause(2000);
//     //     await $("//android.view.ViewGroup[@content-desc='button-SIGN UP']/android.view.ViewGroup").click();
//     //     await browser.pause(2000);
//     //     const buttonText = await $("//android.widget.Button[@resource-id='android:id/button1']").getAttribute('text');
//     //     expect(buttonText).toEqual('OK');
//     //     await $("//android.widget.Button[@resource-id='android:id/button1']").click();
//     //     await browser.pause(2000);
//     //     await $("(//android.widget.TextView[@text='Login'])[1]").click();
//         // await browser.pause(2000);
//         // await $("~input-email").setValue("xyz@gmail.com");
//         // await browser.pause(2000);
//         // await $("~input-password").setValue("12345678");
//         // await browser.pause(2000);
//         // await $("//android.view.ViewGroup[@content-desc='button-LOGIN']/android.view.ViewGroup").click();

//     })
// })