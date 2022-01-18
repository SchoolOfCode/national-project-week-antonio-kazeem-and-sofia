import pg from 'pg';

const pool = new pg.Pool({
    user: 'tikkofuzpkjumd',
    host: 'ec2-54-216-90-155.eu-west-1.compute.amazonaws.com',
    database: 'decu74t7djvo9g',
    password:
        '499e180f0db3ae559c6f8e557c72c42a9d737a8532a6a9584561039998913eb2',
    port: 5432,
    ssl: { rejectUnauthorized: false },
});

export default function query(text, params) {
    return pool.query(text, params);
}
