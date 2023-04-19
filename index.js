//Import các thư viện cần dùng
var express = require('express');
const bcrypt = require('bcrypt');
const multer = require('multer');
const upload = require('./uploadMiddleware');
const Resize = require('./Resize');
const bodyParser = require('body-parser')
const path = require('path');
const axios = require('axios');
const FormData = require('form-data');
const dotenv = require("dotenv")
dotenv.config()
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const { connectDb } = require("./connectDB")
var app = express()
const fs = require('fs');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
const ImgixClient = require('imgix-core-js');

const mailer = require('./sendMail')

const session = require('express-session');
app.use(session({
  secret: 'QuocThanhJSCC',
  resave: true,
  saveUninitialized: false
}));
connectDb.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

const checkAuth = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect('/login');
  }
}
cloudinary.config({
  cloud_name: "ddd5o96qz",
  api_key: "377388323629657",
  api_secret: "TBBkuSvcJQJFbgYSAtZaNg4CIsk"
});
const storage = new CloudinaryStorage({
  cloudinary,
  allowedFormats: ['jpg', 'png']
});
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'public/images/');
//   },

//   filename:async function (req, file, cb) {
//     // if (req.url === '/editDuAn') {
//     //   connect
//     // } else {
//     //   let fileName = Date.now() + path.extname(file.originalname)
//     //   cb(null, file.fieldname + '-' + fileName);
//     //   addItem({ title: req.body.title, content: req.body.content, image: ["images/" + file.fieldname + '-' + fileName] }, connectDb)

//     // }

  
    
//     let fileName = Date.now() + path.extname(file.originalname)
//     cb(null, file.fieldname + '-' + fileName);

    

    



//   }
// });

app.use(express.static('public'));

let pass = "QuocThanhJSCAdmin"

bcrypt.hash(pass, 10, function (err, hash) {
  console.log(hash);
});
app.post("/login", async (req, res) => {
  console.log(req.body);
  let username = req.body.username
  let pass = req.body.pass
  bcrypt.compare(pass, process.env.PASS, function (err, result) {
    if (result && username === process.env.USER) {
      req.session.user = username; // Lưu thông tin người dùng vào session
      res.redirect('/admin'); // Chuyển hướng đến trang admin
    } else {
      res.redirect("/login")
    }

  });


})
var root = {
  hello: () => {
    return 'Hello world!';
  },
};
var upload2 = multer({ storage: storage })


app.get("/admin", checkAuth, (req, res) => {
  res.sendFile(__dirname + '/admin/admin.html')
})

app.get("/getItem", async (req, res) => {
  console.log();
  Number(req.query.id)
  

})


app.post('/delTypical', checkAuth, (req,res)=>{
  console.log(req.body.ids);
  req.body.ids.map(tmp=>{
    connectDb.query('UPDATE duan SET typical = ?  where  id = ?', [ 0,Number(tmp)] , (err2, res) => {
      if (err2) {
        console.error(err2);
      }
      console.log(`Updated ${res} rows`);
    });
  })
  res.redirect("/admin")
})
app.get("/getAll/", async (req, res) => {
  connectDb.query('SELECT * FROM duan', (err, rs) => {
    if (err) throw err
    // res.send(rs.rows)
    let data = rs
    const result = Object.values(data.reduce((acc, cur) => {
      if(!acc[cur.title]) {
        if(cur.image !== null){
          acc[cur.title] = {...cur, image: [cur.image], ids: [cur.id]};
        }else{
          acc[cur.title] = {...cur, image: [], ids: [cur.id]};

        }
        

      } else {
        if(cur.image !== null){
          acc[cur.title].image.push(cur.image);

        }
        acc[cur.title].ids.push(cur.id);

      }
      return acc;
    }, {}));
    
    res.send(result);
  
    // in kết quả SELECT
  })
  
  
})
// app.get("/addDuAn", async (req, res) => {
//   ghiFile()
// })
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
})
app.get('/login', function (req, res) {
  res.sendFile(__dirname + '/public/login.html');
})

app.get('/gioi-thieu', function (req, res) {
  res.sendFile(__dirname + '/public/gioi-thieu.html');
})
app.get('/lien-he', function (req, res) {
  res.sendFile(__dirname + '/public/lien-he.html');
})
app.get('/du-an', function (req, res) {
  res.sendFile(__dirname + '/public/du-an.html');
})
app.post('/addDuAn', checkAuth, upload2.array('multiFiles'), (req, res) => {
    console.log(req.body);
    if(req.files !== undefined){
      req.files.map((tmp)=>{
        const queryText = 'INSERT INTO duan(title, content, image, type) VALUES(?, ?, ?, ?)';
        const queryValues = [req.body.title, req.body.content,tmp.path, Number(req.body.type)];
        connectDb.query(queryText, queryValues, (error, result) => {
          if (error) {
            throw error;
          }
          
        });
      })
    }
    const queryText = 'INSERT INTO duan(title, content, image, type) VALUES(?, ?, ?, ?)';
    const queryValues = [req.body.title, req.body.content,null, Number(req.body.type)];
    connectDb.query(queryText, queryValues, (error, result) => {
      if (error) {
        throw error;
      }
    });



    res.redirect("/admin")

})

app.post('/editDuAn', checkAuth, upload2.array('multiFiles'), (req, res) => {
  console.log(req.body);
  if(req.files !== undefined){
    req.files.map((tmp)=>{
      const queryText = 'INSERT INTO duan(title, content, image, type) VALUES(?, ?, ?, ?)';
      const queryValues = [req.body.title, req.body.content,tmp.path, Number(req.body.type)];
      connectDb.query(queryText, queryValues, (error, result) => {
        if (error) {
          throw error;
        }
        
      });
    })
  }

  req.body.ids.split("|").map(tmp=>{
    connectDb.query('UPDATE duan SET title = ?, content = ?, type = ?, typical = ?  where  id = ?', [req.body.title, req.body.content,Number(req.body.type), Number(req.body.typical),tmp] , (err2, res) => {
      if (err2) {
        console.error(err2);
      }
      console.log(`Updated ${res} rows`);
    });
  })
  res.redirect("/admin")

})
app.post("/delImg", (req, res) => {
  checkAuth(req, res, () => {
    
    
    connectDb.query('DELETE FROM duan WHERE image=?',[req.body.image], (err, res) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(`Deleted ${res} rows`);
    });
  })
  res.send("1")

})
app.post("/delItem", (req, res) => {
  
  checkAuth(req, res, () => {
    connectDb.query('DELETE FROM duan WHERE title=? and content = ?',[req.body.title, req.body.content], (err, res) => {
      if (err) {
        console.error(err);
        return;
      }
      //api xoa tat ca hinh cua 1 du an map images
    });

  })
  res.redirect("/admin")

})
app.post('/send-email', async (req, res) => {
  const { name, phone, email, address, comments } = req.body
  if (!email) {
    res.redirect("/lien-he")
    return
  }
  let body = `
  <h3>Email Cần Liên Hệ Từ Web</h3>
  <p><strong>Họ tên</strong>: ${name}</p>
  <p><strong>Số điện thoại</strong>: ${phone}</p>
  <p><strong>Email</strong>: ${email}</p>
  <p><strong>Địa chỉ</strong>: ${address}</p>
  <p><strong>Nội dung</strong>: ${comments}</p>

  `
  await mailer.sendMail("Cần từ vấn QuocThanhJSC.com", body)
  res.redirect("/lien-he")
})
app.get('/nhan_thong_tin', async (req, res) => {
  const email = req.query.email
  console.log(req.query);
  if (!email) {
    res.send(JSON.stringify(0))
    return
  }
  let body = `
  <h3>Đăng Ký Nhận Thông Tin Từ Web</h3>
  <p><strong>Email</strong>: ${email}</p>
  `
  await mailer.sendMail("Đăng Ký Nhận Thông Tin QuocThanhJSC.com", body)
  res.send(JSON.stringify(1))
})
app.post('/post', upload.single('imag2e'), async function (req, res) {
  // folder upload
  const imagePath = (__dirname + '/public/images');
  // call class Resize
  const fileUpload = new Resize(imagePath);
  if (!req.file) {
    res.status(401).json({ error: 'Please provide an image' });
  }
  const filename = await fileUpload.save(req.file.buffer);

  return res.status(200).json({ name: filename });
});

// Khởi tạo server tại port 4000
app.listen(process.env.PORT || 2011);

setInterval(()=>{
  try{
    connectDb.query('SELECT 1', (err2, res) => {
      if (err2) {
        console.error(err2);
      }
      console.log(`Re-Connection: ${res} `);
    });
  }catch(err){

  }
  
},36000)