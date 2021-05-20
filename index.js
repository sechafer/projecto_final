const express = require('express')
const { Sequelize, DataTypes } = require('sequelize')


const app = express ();
const sequelize = new Sequelize ({
    dialect: 'sqlite',
    storage:'./db.db'
});
const cors = require('cors');

var corsOptions = {
  origin: 'http://localhost',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors())

const MENU = require ('./models/menu')
const items = MENU ( sequelize, DataTypes)
// We need to parse JSON coming from requests

app.use(express.json())



app.get('', (req, res, next) =>{
  res.send ('<h1>Home items</h1>')
})

app.get('/items', async (req, res, next) =>{    
  var item1 = await items.findAll()
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Request-Width, Content-Type, Accept");
  app.use(cors());
  res.json ({ "items": item1 });
  
  
  })

app.get('/items/:id', cors(), async (req, res) =>{
  const item1_ID = req.params.id 
  const item1 = await items.findByPk(item1_ID)
  /* res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Request-Width, Content-Type, Accept");
   */
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    app.use(cors());  
    res.json({ item1 })
  var errors=[]
  
 
  if (errors.length){
    res.status(304).json({"Error 304":errors.join(",")});
    return;
}
})

app.post('/items', cors(), async (req, res) =>{
    var errors=[]
    if (!req.body.ITEM_NAME){
        errors.push("Nombre de plato no enviado");
    }
    if (!req.body.DESCRIPCION){
        errors.push("Descripción no enviada");
    }
    if (!req.body.TIPO_COMIDA){
        errors.push("Tipo de comida no enviada");
    }
    if (!req.body.PRECIO){
        errors.push("Precio no enviado");
    }
    if (!req.body.FOTO_URL){
        errors.push("Foto no Cargada");
    }
    if (errors.length){
        res.status(400).json({"Error 400":errors.join(",")});
        return;
    }
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    
    const body = req.body
  const new_items = await items.create({
    ITEM_NAME: body.ITEM_NAME,
    DESCRIPCION: body.DESCRIPCION,
    TIPO_COMIDA: body.TIPO_COMIDA,
    PRECIO:body.PRECIO,
    FOTO_URL:body.FOTO_URL
  })
  res.json({ new_items })
})

app.put('/items/:id', cors(),  async (req, res) =>{
  try{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");   const item1_ID = req.params.id
   
    const body = req.body
      const item1 = await items.findByPk(item1_ID)
      item1.update({
          ITEM_NAME: body.ITEM_NAME,
          DESCRIPCION: body.DESCRIPCION,
          TIPO_COMIDA: body.TIPO_COMIDA,
          PRECIO:body.PRECIO,
          FOTO_URL:body.FOTO_URL
      });        
      res.send({ action: 'Update item', item1:item1 })
  } catch (error) {
      return res.send( `<h1> Error Update: </h1><br><h2>Server error  de item:</h2><br><h2>${error}</h2>`)
  }
})



app.delete('/items/:id', cors(),  async (req, res) => {
  try{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");   const item1_ID = req.params.id
   
    const ID = req.params.id
      const delete_item = await items.destroy({ where: { ID: ID } })
      res.send({ action: 'Delete item', delete_item: delete_item })
  } catch (error) {
      return res.send( `<h1>Error Delete </h1><br><h2> Server error detele item:</h2><br><h2>${error}</h2>`)
  }
})

app.listen(5000, () => {
  console.log('Listening port number 5000')
})