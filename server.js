const app = require('./app');
const db = require('./models/database')
const PORT = 1300;


const init = async () => {
  //sync creates the table if it does not exist. alter true creates the tables and makes any changes to keep the modules in sync
  await db.sync()
  // await models.Page.sync()
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
  });
}

init();
