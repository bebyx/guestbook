import pool from '../../db/pool.js';

export default async (req: any, res: any) => {
    const body = req.body;
    const username: string = body.name === "" ? "Anonymous" : body.name;
    const email: string = body.email;
    const message: string = body.message;

    if (message === "") {
	const errorMessage = "Message should not be empty.";
	console.error(errorMessage);
	return res.render('error', { errorMessage });
    }

    try {
        const insertQuery: string = `
          INSERT INTO messages (username, email, message)
          VALUES ($1, $2, $3)
        `;

        const values: string[] = [username, email, message];

        const result = await pool.query(insertQuery, values);

        console.log('Row inserted successfully:\n', result);
    } catch (err) {
        console.error('Error executing insert query:', err);
    }

    console.log(body);
    res.redirect('/');
};
