import { Link } from 'react-router-dom'

export default function KartuItem({ item }) {
  const { id, judul, kategori, daerahAsal, waktuMasak, tingkatKesulitan } = item
  return (
    <article className="kartu">
      <h3>
        <Link to={`/koleksi/${id}`}>{judul}</Link>
      </h3>
      <p>
        Kategori: {kategori}
        <br />
        Daerah Asal: {daerahAsal}
        <br />
        Waktu Masak: {waktuMasak}
        <br />
        Tingkat Kesulitan: {tingkatKesulitan}
      </p>
    </article>
  )
}