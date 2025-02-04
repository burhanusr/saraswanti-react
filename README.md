# Panduan Menjalankan Program React TypeScript di Lokal

Panduan ini akan memandu Anda untuk menjalankan aplikasi berbasis **React** dengan **TypeScript** yang ada di repositori GitHub. Ikuti langkah-langkah berikut untuk mengkloning repositori, menginstal dependensi, dan menjalankan aplikasi di komputer lokal Anda.

## Prasyarat

Sebelum memulai, pastikan Anda sudah memiliki perangkat lunak berikut yang terinstal di sistem Anda:

1. **Node.js** (Versi 14 atau lebih baru)

   - **Node.js** diperlukan untuk menjalankan aplikasi berbasis JavaScript.
   - Anda dapat mengunduhnya dari [nodejs.org](https://nodejs.org/).

2. **Git** (Untuk mengkloning repositori dari GitHub)
   - Anda bisa mengunduh dan menginstalnya dari [git-scm.com](https://git-scm.com/).

## Langkah-Langkah Menjalankan Aplikasi

### 1. Mengkloning Repositori dari GitHub

Langkah pertama adalah mengkloning repositori ini ke komputer lokal Anda. Gunakan perintah berikut di terminal (pastikan Anda mengganti URL repositori dengan yang sesuai):

```bash
git clone https://github.com/burhanusr/saraswanti-react
```

### 2. Masuk ke Direktori Proyek

Setelah repositori berhasil dikloning, masuk ke dalam direktori proyek menggunakan perintah berikut:

```bash
cd saraswanti-react
```

### 3. Menginstal Dependensi

Proyek ini menggunakan npm (Node Package Manager) untuk mengelola dependensi. Jalankan perintah berikut untuk menginstal semua dependensi yang diperlukan oleh aplikasi:

```bash
npm install
```

Perintah ini akan membaca file package.json dan mengunduh semua paket yang tercantum di dalamnya.

### 4. Menjalankan Aplikasi di Lokal

Setelah semua dependensi terinstal, Anda dapat menjalankan aplikasi dengan perintah berikut:

```bash
npm run dev
```

Perintah ini akan memulai server pengembangan dan aplikasi akan terbuka secara otomatis di browser Anda. Secara default, aplikasi dapat diakses melalui http://localhost:5173.

### 5. Menjalankan Aplikasi dalam Mode Produksi (Opsional)

Jika Anda ingin membangun aplikasi untuk digunakan dalam produksi (misalnya untuk deployment ke server), Anda dapat menjalankan perintah berikut:

```bash
npm run build && npm run preview
```

Perintah ini akan membangun aplikasi untuk produksi dan menyimpannya dalam folder build/ dengan optimasi yang lebih baik untuk performa.

### Struktur Proyek

Berikut adalah struktur utama direktori dalam proyek ini:

```bash
/src
  /api           # Folder untuk panggilan API
  /components    # Komponen-komponen React
  /utils         # Fungsi utilitas dan helper
  App.tsx        # Komponen utama aplikasi
  main.tsx      # Titik masuk aplikasi (entry point)
/index.html     # HTML template utama
/package.json     # Konfigurasi npm dan dependensi proyek
/README.md       # Panduan ini
```

### Catatan

- Pastikan Node.js sudah terinstal dengan benar di sistem Anda. Anda dapat memverifikasi instalasinya dengan menjalankan perintah node -v di terminal.
- Pastikan juga npm terinstal dengan menjalankan npm -v di terminal. Jika npm belum terinstal, npm akan otomatis terinstal bersama dengan Node.js.
- Jika Anda tidak melihat aplikasi berjalan dengan benar atau mendapatkan kesalahan, coba untuk menjalankan kembali perintah npm install untuk memastikan semua dependensi terinstal dengan benar.

Jika Anda mengalami kesulitan atau membutuhkan bantuan lebih lanjut, silahkan hubungi saya.
