import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const student = {
    name: "Sovantri Putra Paskah Halawa",
    nim: "4232250001",
    prodi: "Ilmu Komputer",
  };

  const matkul = ["Jaringan Komputer", "Pemrograman React", "IoT"];

  const getCurrentTime = () => {
    return new Date().toLocaleString();
  };

  return (
    <div className="App">
      <h1>Belajar Topologi Jaringan</h1>

      <div className="student-info">
        <h2>Informasi Mahasiswa</h2>
        <p>Nama: {student.name}</p>
        <p>NIM: {student.nim}</p>
        <p>Program Studi: {student.prodi}</p>
      </div>

      <div className="courses">
        <h3>Mata Kuliah:</h3>
        <ul>
          {matkul.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </div>

      <div className="time">
        <p>Waktu Saat Ini: {getCurrentTime()}</p>
      </div>

      <div className="status">
        <p>Status: {student.nim ? "Terdaftar" : "Belum Terdaftar"}</p>
      </div>
    </div>
  );
}

export default App;
