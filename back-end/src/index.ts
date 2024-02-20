import {app} from "./app"

const PORT = process.env.PORT || 4000

app.set('port',PORT)

app.listen(app.get('port'), () => {
    console.log(`Server listening at port ${app.get('port')}`);
} )