import {inject} from "aurelia-framework";
import * as moment from "moment";
import * as _ from "lodash";

const { create } = require('cypress/types/lodash');
const {
    createPool
} = require('mysql');

const pool = createPool({
    host:"localhost",
    user:"root",
    password:"root",
    database:"bugtracker",
    connectionLimit: 10


})
pool.query(`select password
from mantis_user_tableno
where username = "administrator" ` , (err,result,fields)  =>  {
    if(err){
        return console.log(err);
    }
return console.log(result);

})