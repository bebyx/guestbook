import pool from '../../db/pool.js';
import bcrypt from 'bcrypt';

export default async (req: any, res: any) => {
    const body = req.body;
    const username: string = body.name;
    const password: string = body.password;

    if (username === "" || password === "") {
	const errorMessage = "Fields should not be empty.";
	console.error(errorMessage);
	return res.render('error', { errorMessage });
    }

    try {
        const result = await pool.query(`SELECT * FROM users WHERE username=$1`, [username]);
	const user = result.rows[0];

	console.log(user);
	if (user && (await bcrypt.compare(password, user.password))) {
	    // Set session and cookie upon successful login
	    req.session.user = {};
	    req.session.user.id = user.id;
	    req.session.user.username = user.username;
	    req.session.user.role = user.role;
	    
	    console.log('Successfully signed in:\n', result);
	    return res.redirect('/');
	} else {
	    return res.redirect('/login');
	}
    } catch (err) {
        console.error('Error while signing in:\n', err);
    }
};
