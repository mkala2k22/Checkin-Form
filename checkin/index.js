const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const bodyparser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const { GraphQLObjectType, GraphQLNonNull, GraphQLInt, GraphQLString, GraphQLList, GraphQLSchema } = require('graphql');

const app = express();

var checkinData = [
    {
        "bookingCode" :123456 ,
        "lastName" : "Kala",
        "flightNumber": "KLM1234"

    },
    {
        "bookingCode" :223456 ,
        "lastName" : "Kabadwal",
        "flightNumber": "KLM1234"

    },
    {
        "bookingCode" :323456 ,
        "lastName" : "Kalia",
        "flightNumber": "KLM1234"

    }
];

const checkinDataType = new GraphQLObjectType({
    name: 'checkinData',
    description: 'This represent checkin data ',
    fields: () => ({
        bookingCode: {type:new GraphQLNonNull(GraphQLInt)},
        lastName: {type:new GraphQLNonNull(GraphQLString)},
        flightNumber: {type: new GraphQLNonNull(GraphQLString)}
    })
})


const RoorQueryType = new GraphQLObjectType({
    name : 'Query',
    description: 'Root Query',
    fields: () => ({
        checkinData: {
            type: new GraphQLList(checkinDataType),
            description: 'List of all booking code',
            resolve: () => checkinData
        },
      /*  checkinData:{
            type: checkinDataType,
            description: 'Single booking code',
            args: {
                id: {
                    type: new GraphQLNonNull(GraphQLInt)
                },
            },
            resolve: (root, args) => {
                return checkinData.find(item => item.id === args.id)
            }
          }*/
    })

})


const schema = new GraphQLSchema({
    query: RoorQueryType
})
app.use('/graphql', graphqlHTTP({
    graphiql : true,
    schema: schema

}))

app.use(cors({
    origin: 'http://localhost:4200'
}));
app.use(bodyparser.json());


let bookingData = JSON.parse(fs.readFileSync('./data/bookingId.json'));


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");    
    next();
  });

//Create server with port
app.listen(3000, () => {
    console.log('server is running on  port 3000...');
});


// get call for user checkin
app.get('/checkin',(req,res)=>{
        res.status(200).json({
            status : "Success",
            message : "Successful Checkin",
             bookingData : bookingData.bookingCode
        });
}); 


/*app.all('*', (req, res, next) => {
    const err = new Error('Page not found');
    err.status = "Fail";
    err.statusCode = 404;
    next(err);
});*/


app.use((error, req, res, next) => {
    error.statusCode = error.statusCode || 500;
    error.status = error.status || 'error';
    res.status(error.statusCode).json({
        status: error.status,
        message : error.message
    });
});






