import pool from '$lib/server/database.js'


export async function load(){
    const [rows]= await pool.execute('SELECT * from Event')
   
   
   
   
    return {
        events: rows
    }  

};