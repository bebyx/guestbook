import pool from '../../db/pool.js';

export default async (req: any, res: any) => {
    const body = req.body;
    const username = body.name;
    const email = body.email;
    const message = body.message;

    try {
        const insertQuery = `
          INSERT INTO messages (username, email, message)
          VALUES ($1, $2, $3)
        `;

        const values = [username, email, message];

        const result = await pool.query(insertQuery, values);

        console.log('Row inserted successfully:', result);
    } catch (err) {
        console.error('Error executing insert query:', err);
    }

    console.log(body);
    res.redirect('/');
};
