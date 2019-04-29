import app from './app'
import connection from './mysqlConfig'

import regeneratorRuntime from "regenerator-runtime";

console.log(regeneratorRuntime)

//router 
const start = async () => {

// All users
app.get('/users',(req, res) => {
    const allUsers =connection.query(
        'SELECT * FROM `users`',
        function(err, results) {
          res.json(results);
          
        }
      );
});


//add user with redirect 
app.post('/add/user', (req, res) => {
    const { user_name } = req.query;
    connection.query('INSERT INTO users SET ? ',
      {
        user_name
        
      }
    , (err, result) => {
      res.redirect('/users');
    });
  });

// delete user with redirect
app.post('/user/delete/', (req, res) => {
    const { user_id } = req.query;
    connection.query(`DELETE FROM users WHERE user_id =${user_id} `
    
    , (err, result) => {
      res.redirect('/users');
    });
  });
// update user name with redirect 

app.post('/user/update/', (req, res,next) => {
    const {user_id}=req.query;
    const { user_name } = req.query;

    connection.query(`UPDATE users SET user_name = '${user_name}' WHERE user_id = ${user_id}`

    
    , (err, result) => {
      res.redirect('/users');
    });
  });

  // get user by id 

  app.get('/user/get',(req, res) => {
      const {user_id}=req.query;
    const allUsers =connection.query(
        `SELECT * FROM  users where user_id=${user_id}`,
        function(err, results) {
          res.json(results);
          
        }
      );
});

app.listen(8080, () => console.log("server listening on port 8080"));
};

start();