import bcrypt from 'bcrypt';
import pool from './pool.js';

export default async function initAdmin() {
    const username = "admin";
    const plaintextPassword = 'password';
    const hashedPassword = await bcrypt.hash(plaintextPassword, 10);
    
    const role = "admin";
    
    const insertQuery: string = `
INSERT INTO users (username, password, role)
VALUES ($1, $2, $3)
`;
    const values = [username, hashedPassword, role];
    
    const result = await pool.query(insertQuery, values);

    console.log(result);
}


