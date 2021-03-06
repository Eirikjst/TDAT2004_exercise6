import * as express from "express";
import * as mysql from "mysql";

module.exports = function(app: express.Application, pool: mysql.Pool){
    app.get("/latestNews_home", function(req: express.Request, res: express.Response){
        pool.getConnection(function(err: mysql.MysqlError, conn){
            let query_str: string = 'SELECT * FROM tdat2004_exercise6.articles order by date_created DESC limit 8;';
            conn.query(query_str, function(err: mysql.MysqlError, result: mysql.queryCallback){
                conn.release();
                if (err){
                    console.error(err);
                    res.send(false);
                } else {
                    res.send(result);
                }
            });
        });
    });

    app.get("/popularNews_home", function(req: express.Request, res: express.Response){
        pool.getConnection(function(err: mysql.MysqlError, conn){
            let query_str: string = "SELECT * FROM tdat2004_exercise6.articles order by likes DESC limit 8;";
            conn.query(query_str, function(err: mysql.MysqlError, result:mysql.queryCallback){
                conn.release();
                if (err){
                    console.error(err);
                    res.send(false);
                } else {
                    res.send(result);
                }
            });
        });
    });
}