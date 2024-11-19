import pool from "@/lib/db";

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const [rows] = await pool.query('SELECT * FROM product');
            res.status(200).json(rows);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    } else if (req.method === 'POST') {
        const { image_id, name, description, price, stock } = req.body;



        try {
            const result = await pool.query(
                'INSERT INTO komputer (image_id, name, description, price, stock) VALUES (?, ?, ?, ?, ?)',
                [image_id, name, description, price, stock]
            );

            const newItem = {
                id: result[0].insertId,
                image_id: image_id,
                name: name,
                price: price,
                stock: stock,
            };
            res.status(201).json(newItem);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}
