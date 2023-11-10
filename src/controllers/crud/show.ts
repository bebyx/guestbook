import pool from '../../db/pool.js';

export default async (req: any, res: any) => {
    const id: number = req.params.id;
    
    const result = await pool.query(`SELECT * FROM messages WHERE id=${id}`);
    console.log(result);
    const post = result.rows[0];
    res.render('show', {post});
};
