const puppeteer = require("puppeteer");
(async () => {
    const browser = await puppeteer.launch({headless:true}); 
    const page = await browser.newPage();
    await page.goto("https://www.github.com/trending");
    //ss
    const grabhtml =await page.evaluate(() => {
        const html =document.querySelector("html");
        return html.innerHTML;
       
    });
    console.log(grabhtml);
    //ss
    
    const grabTitle =await page.evaluate(() => {
        const title =document.querySelectorAll(".h3.lh-condensed");
        let titles =[]
        title.forEach((tag) => {
            titles.push(tag.innerText)
        }) 
        return titles;
    })
    console.log(grabTitle);


    
    await browser.close();
})();

