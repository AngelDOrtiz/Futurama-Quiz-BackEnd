import pool from '../utils/pool.js';

export default class User {
    id;
    username;
    password;
    scores;

    constructor(row) {
        this.id = row.id;
        this.username = row.username;
        this.password = row.password;
        this.scores = row.scores;
    }

    static async INSERT({ username, password, scores }) {
        const {rows} = await pool.query(
            'INSERT INTO users (username, password, scores) VALUES ($1, $2, $3) RETURNING *', [username, password, scores] 
        )
        return new User(rows[0])
    } 
    static async getById(id) {
        const {rows} = await pool.query(
            'SELECT * FROM users WHERE id=$1', [id] 
        )
        return new User(rows[0])
    }
}