import React, { useState } from "react";
import "./App.css";

// Import komponen
import Header from "./components/Header/Header";
import UserCard from "./components/UserCard/UserCard";
import ProductList from "./components/ProductList/ProductList";
import Button from "./components/Button/Button";

function App() {
  // State untuk data user yang login
  const [currentUser] = useState({
    name: "Admin",
    avatar: "https://i.pravatar.cc/150?img=1",
  });

  // State untuk data users
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Ahmad Rizki",
      email: "ahmad@example.com",
      role: "Admin",
      avatar: "/user.png",
      isActive: true,
    },
    {
      id: 2,
      name: "Sari Dewi",
      email: "sari@example.com",
      role: "User",
      avatar: "/user.png",
      isActive: false,
    },
    {
      id: 3,
      name: "Budi Santoso",
      email: "budi@example.com",
      role: "Moderator",
      avatar: "/user.png",
      isActive: true,
    },
  ]);

  // State untuk data products
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Laptop ASUS VivoBook",
      price: 5800000,
      category: "Electronics",
      image:
        "https://static.retailworldvn.com/Products/Images/12217/321637/laptop-asus-vivobook-14-i3-1215u-8gb-256gb-opi-win11-a1404za-ips321-quiet-blue-1.jpg",
      stock: 5,
    },
    {
      id: 2,
      name: "Smartphone Samsung A54",
      price: 4200000,
      category: "Electronics",
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/id/sm-a546ezwdxid/gallery/id-galaxy-a54-5g-sm-a546-sm-a546ezwdxid-535684446?$684_547_PNG$",
      stock: 8,
    },
    {
      id: 3,
      name: "Buku Pemrograman React",
      price: 150000,
      category: "Books",
      image:
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//107/MTA-6577919/lokomedia_lokomedia_jalan_pintas_menjadi_master_reactjs_buku_pemrograman_full02_j716thmo.jpg",
      stock: 18,
    },
    {
      id: 4,
      name: "Mouse Wireless Logitech",
      price: 350000,
      category: "Electronics",
      image:
        "https://down-id.img.susercontent.com/file/76a0969b7d64065bc13493bf55df1849",
      stock: 15,
    },
  ]);

  // Handler functions
  const handleEditUser = (userId) => {
    alert(`Edit user dengan ID: ${userId}`);
  };

  const handleDeleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  const handleAddToCart = (product) => {
    alert(`Menambahkan ${product.name} ke keranjang`);
  };

  const handleAddNewUser = () => {
    const newUser = {
      id: users.length + 1,
      name: `User Baru ${users.length + 1}`,
      email: `user${users.length + 1}@example.com`,
      role: "User",
      avatar: "/user.png",
      isActive: true,
    };
    setUsers([...users, newUser]);
  };

  const handleAddNewProduct = () => {
    const newProduct = {
      id: products.length + 1,
      name: `Produk Baru ${products.length + 1}`,
      price: Math.floor(Math.random() * 1000000) + 100000,
      category: "Other",
      image: "/new.png",
      stock: Math.floor(Math.random() * 20),
    };
    setProducts([...products, newProduct]);
  };

  return (
    <div className="App">
      <Header
        title="Demo Komponen React dengan Props"
        subtitle="Pengembangan Web Modern - Pertemuan 3"
        user={currentUser}
      />

      <main className="App-main">
        {/* Section Users */}
        <section className="section">
          <div className="section-header">
            <h2>Manajemen Pengguna ({users.length})</h2>
            <Button variant="success" onClick={handleAddNewUser}>
              Tambah User
            </Button>
          </div>

          <div className="users-grid">
            {users.map((user) => (
              <UserCard
                key={user.id}
                user={user}
                onEdit={handleEditUser}
                onDelete={handleDeleteUser}
              />
            ))}
          </div>
        </section>

        {/* Section Products */}
        <section className="section">
          <div className="section-header">
            <h2>Katalog Produk</h2>
            <Button variant="primary" onClick={handleAddNewProduct}>
              Tambah Produk
            </Button>
          </div>
          <ProductList products={products} onAddToCart={handleAddToCart} />
        </section>
      </main>
    </div>
  );
}

export default App;
