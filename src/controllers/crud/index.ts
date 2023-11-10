import pool from '../../db/pool.js';

export default async (req: any, res: any) => {
    const result = await pool.query('SELECT * FROM messages ORDER BY created_at DESC');
    console.log(result);
    const posts = result.rows;

    const session = req.session;
    const isAdmin: boolean = session.userId && session.userRole === "admin";
	
    res.render('index', {posts, isAdmin});
};
