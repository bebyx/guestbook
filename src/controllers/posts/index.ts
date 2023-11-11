import pool from '../../db/pool.js';

export default async (req: any, res: any) => {
    const result = await pool.query('SELECT * FROM messages ORDER BY created_at DESC');
    console.log(result);
    const posts = result.rows;

    const user = req.session.user;
	
    res.render('index', {posts, user});
};
