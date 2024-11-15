import pool from "@/lib/db";

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const [rows] = await pool.query('SELECT * FROM komputer');
            res.status(200).json(rows);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    } else if (req.method === 'POST') {
        const { nama_barang, jumlah, harga } = req.body;

        const tanggal_faktur = new Date();
        const total = jumlah * harga;

        try {
            const result = await pool.query(
                'INSERT INTO komputer (nama_barang, jumlah, harga, tanggal_faktur, total) VALUES (?, ?, ?, ?, ?)',
                [nama_barang, jumlah, harga, tanggal_faktur, total]
            );

            const newItem = {
                id: result[0].insertId,
                tanggal_faktur: tanggal_faktur,
                nama_barang: nama_barang,
                jumlah: jumlah,
                harga: harga,
                total: total,
            };
            res.status(201).json(newItem);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}
