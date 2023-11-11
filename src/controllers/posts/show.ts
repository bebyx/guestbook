import pool from '../../db/pool.js';

export default async (req: any, res: any) => {
    const id = req.params.id;
    
    const result = await pool.query(`SELECT * FROM messages WHERE id=$1`, [id]);
    console.log(result);
    const post = result.rows[0];

    const user = req.session.user;
    res.render('posts/show', { post, user });
};
