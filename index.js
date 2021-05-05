const express = require('express')
const { Sequelize, DataTypes } = require('sequelize')


const app = express ();
const sequelize = new Sequelize ({
    dialect: 'sqlite',
    storage:'./db.db'
});

const Item = require ('./models/menu')
const items = Item ( sequelize, DataTypes)
// We need to parse JSON coming from requests

app.use(express.json())



app.get('', (req, res) =>{
  res.send ('<h1>Home items</h1>')
})

app.get('/items', async (req, res) =>{    
  const item1 = await MENU.findAll()
  res.json ({ action: item1 })
  })

app.get('/items/:ID_ITEM', async (req, res) =>{
  const item1_ID = req.params.ID_ITEM 
  const item1 = await MENU.findByPk(item1_ID)
  res.json({ item1 })
})

app.post('/items', async (req, res) =>{
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
        res.status(400).json({"Error":errors.join(",")});
        return;
    }



  const body = req.body
  const new_items = await MENU.create({
    ITEM_NAME: body.ITEM_NAME,
    DESCRIPCION: body.DESCRIPCION,
    TIPO_COMIDA: body.TIPO_COMIDA,
    PRECIO:body.PRECIO,
    FOTO_URL:body.FOTO_URL
  })
  res.json({ new_items })
})

app.put('/items/:ID_ITEM', async (req, res) =>{
  try{
      const item1_ID = req.params.ID_ITEM
      const body = req.body
      const item1 = await MENU.findByPk(item1_ID)
      items1.update({
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



app.delete('/items/:ID_ITEM', async (req, res) => {
  try{
      const ID = req.params.ID_ITEM
      const delete_item = await menu.destroy({ where: { ID: ID } })
      res.send({ action: 'Delete item', delete_item: delete_item })
  } catch (error) {
      return res.send( `<h1>Error Delete </h1><br><h2> Server error detele item:</h2><br><h2>${error}</h2>`)
  }
})

app.listen(5000, () => {
  console.log('Listening port number 5000')
})