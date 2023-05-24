import app from "./src/js/app.js"
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`API funcionando`);
})
