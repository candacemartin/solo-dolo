//this is where database model info goes:

//set up pool of pg connections
const { Pool } = require('pg');

const PG_URI = 'postgres://yaqgzglh:h2rWR2CoCv7mqRuLV7tSrYwu15bBPW3Q@heffalump.db.elephantsql.com/yaqgzglh'

// create a new pool here using the connection string above
const pool = new Pool({
    connectionString: PG_URI
  });

// DB Info: setup postgreSQL db 'kinoko_grow' w/ interface at https://api.elephantsql.com/

// export an object that contains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// this will be required in the controllers to be the access point to the database
module.exports = {
    query: (text, params, callback) => {
      console.log('executed query', text);
      return pool.query(text, params, callback);
    }
  };
  