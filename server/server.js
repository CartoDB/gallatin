const path = require('path')
const express = require('express');
const app = express();
const public = path.join(__dirname, '..', 'public')
const port = process.env.PORT || 3000;
const multer = require('multer')
const axios = require('axios')
const CartoDB = require('cartodb');

app.use(express.static(public));

app.get('*', (req, res) => {
  res.sendFile(path.join(public, 'index.html'));
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './server/files');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

const importer = new CartoDB.Import({user:'mforrest', api_key:'665b6d21a3b9c20906057414b7da378b519df141'});

app.post('/', upload.single('selectedFile'), (req, res) => {

  console.log("upload");

  let cartoTableName = 'adkfjhdaskhfakdjshfkladhsflkashdf'

  const fileName = req.file.filename;

  importer
   .file(path.join(__dirname + '/files', `${fileName}`), {
     privacy: 'public'
   })
   .error((error) => {
     console.log('Error! ', error)
     res.status(500).json({ success: false, table: null, error: error })
     res.send()
   })
   .done((table_name) => {
     console.log('Table ' + table_name + ' has been created!');
     res.status(200).json({ success: true, table: table_name, error: null })
     res.send()
   });

});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
})
