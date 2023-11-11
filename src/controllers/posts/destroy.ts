import pool from '../../db/pool.js';

export default async (req: any, res: any) => {
    const id: number = req.params.id;

    const user = req.session.user;

    if (user && user.role === "admin") {
	const result = await pool.query(`DELETE FROM messages WHERE id=$1`, [id]);
	console.log(result);
	res.redirect('/');
    } else {
	const message = "You are not logged in as admin.";
	console.error(message)
	res.render('message', { message })
    }
};
