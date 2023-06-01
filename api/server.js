import app from "./src/js/app.js"
const port = process.env.PORT || 3030;

app.listen(port, () => {
    console.log(`API funcionando`);
})
