import puppeteer from "puppeteer";
import dotenv from "dotenv";
dotenv.config();

const page = async (req, res) => {
    const rut = process.env.RUT;
    const password = process.env.PASSWORD;
    const user = process.env.USER;

    try {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

            await page.goto(
            "https://zeusr.sii.cl//AUT2000/InicioAutenticacion/IngresoRutClave.html?https://misiir.sii.cl/cgi_misii/siihome.cgi"
            );
            await page.setViewport({ width: 1080, height: 668 });
            await page.type("#rutcntr", rut);
            await page.type("#clave", password);
            await page.click("#bt_ingresar");
            await page.waitForNavigation();

        await page.goto(
        `https://loa.sii.cl/cgi_IMT/TMBCOC_InformeAnualBhe.cgi?rut_arrastre=${user}&dv_arrastre=0&cbanoinformeanual=2024`
        );

        const screenshotBuffer = await page.screenshot();
            res.writeHead(200, {
            "Content-Type": "image/png",
            "Content-Length": screenshotBuffer.length,
        });
        res.end(screenshotBuffer);
    } catch (error) {
        console.error(error);
        if (!res.headersSent) {
        res.status(500).json({ error: error.message });
        }
    }
  // finally {

  //     if (browser && browser.isConnected()) {
  //         await browser.close();
  //     }
  // }
};

export { page };
