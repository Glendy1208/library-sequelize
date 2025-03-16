# LIBRARY-SEQUELIZE

Ini adalah proyek latihan Express.js dengan Sequelize sebagai ORM dan PostgreSQL sebagai database.

## Cara Menjalankan Proyek

### Prasyarat
- Node.js (versi 16 atau lebih baru)
- PostgreSQL (sudah terinstal dan berjalan)

### Langkah-langkah

1. **Clone proyek**
   ```bash
   git clone https://github.com/Glendy1208/library-sequelize.git
   cd library-sequelize
2. **Install Dependensi**
   ```bash
   npm install
3. **Setup database**
    - buat sebuah database di postgre
    - Salin file .env example kemudian copy sampai muncul file .env example copy
    - rename .env example copy menjadi .env
    - kemudian konfigurasikan .env sesuai dengan database yang dibuat
4. **Jalankan migrasi dan seeder**
    ```bash
    npx sequelize-cli db:migrate
    npx sequelize-cli db:seed:all
4. **Jalankan server**
    ```bash
    npm start
5. **Akses Aplikasi**
    - http://localhost:3000

## API ENDPOINT
1. **Mendapatkan semua author** : GET http://localhost:3000/authors
2. **Mendapatkan semua books** : GET http://localhost:3000/books
3. **Mendapatkan book by id** : GET http://localhost:3000/books/id
4. **Mendapatkan semua books by author** : GET http://localhost:3000/books/author/id
5. **update book by id** : PUT http://localhost:3000/books/id
7. **delete book by id** : DELETE http://localhost:3000/books/id
8. **create book baru** : POST http://localhost:3000/books