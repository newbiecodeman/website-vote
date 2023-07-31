// Logout.jsx
import React from 'react';

const Logout = () => {
  // Fungsi untuk melakukan proses logout
  const handleLogout = () => {
    // Lakukan logika logout di sini (misalnya, menghapus token dari local storage)
    // Setelah logout, Anda dapat mengarahkan pengguna kembali ke halaman login atau halaman lain yang sesuai.
    console.log('Logout berhasil');
  };

  return (
    <div className="logout">
      <h2>Logout</h2>
      <p>Anda akan keluar dari sesi admin.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
