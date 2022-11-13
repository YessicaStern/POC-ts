import pg from "pg"

const { Pool }= pg;

// const connection = new Pool({
//     host: '127.0.0.1',
//     port: '5432',
//     user: 'postgres',
//     password: '1234',
//     database: 'poc'

// });
const connection = new Pool({
    host: 'ec2-52-1-17-228.compute-1.amazonaws.com',
    port: '5432',
    user: 'lyqoqlvlcggmws',
    password: 'e18d4024b6fdf9daaaa2321ee7987dee2b83ae7b166c0cff8ef52f5bfa8076ae',
    database: 'd25vbor2oa8kl2'
});

// const databaseConfig = {
//     connectionString: process.env.DATABASE_URL,
//     ssl: {
//         rejectUnauthorized: false
//     }
// };
// const connection = new Pool(databaseConfig);

// export default connection;

export {connection};
