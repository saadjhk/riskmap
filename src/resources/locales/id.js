export class LocaleId {
  constructor() {
    this.translation_strings = {
      "page_title": "Laporan Banjir",
      "card_titles": {
        "1": "Pilih lokasi banjir",
        "2": "Laporkan Tinggi Genangan",
        "3": "Unggah Foto",
        "4": "Tambahkan Deskripsi",
        "5": "Tinjau & Laporkan",
        "6": "Syarat dan ketentuan"
      },
      "notification": {
        "header": {
          "location_1": "Lokasi GPS bermasalah",
          "location_2": "Kota belum terjangkau",
          "photo_1": "Ukuran terlalu besar",
          "photo_2": "Browser tidak mendukung"
        },
        "message": {
          "location_1": "Drag peta untuk memilih lokasi",
          "location_2": "Cakupan wilayah: Jakarta, Surabaya, Bandung. Laporan dari luar area ini tidak dapat ditampilkan pada peta.",
          "photo_1": "Foto yang dipilih melebihi kapasitas 4.2mb",
          "photo_2": "Foto yang dipilih tidak didukung oleh browser"
        }
      },
      "web_menu": {
        "tab_names": {
          "map": "peta",
          "report": "laporkan",
          "info": "info"
        }
      },
      "report_info": {
        "share_msg": "Laporan%20banjir%20pada%20petabencana%2Eid",
        "water_depth": "Tinggi",
        "source": "Sumber"
      },
      "flood_info": {
        "title": "Area terdampak banjir",
        "level_hint": "Status ketinggian banjir",
        "time_hint": "Diperbarui pada",
        "state_codes": {
          "1": {
            "severity": "Tidak diketahui",
            "description": "Ketinggian banjir tidak diketahui, harap berhati-hati"
          },
          "2": {
            "severity": "Rendah",
            "description": "Banjir antara 10 sampai 70 cm"
          },
          "3": {
            "severity": "Sedang",
            "description": "Banjir antara 71 sampai 150 cm"
          },
          "4": {
            "severity": "Parah",
            "description": "Banjir di atas 150 cm"
          }
        }
      },
      "map_helper": "Pilih kota:",
      "report_content": {
        "twitter": {
          "title": "Laporan lewat Twitter",
          "steps": [
            "Tweet #banjir ke @petabencana.",
            "Buka linknya, dan ikuti panduan untuk menginput lokasi, foto, dan deskripsi.",
            "Anda dapat melihat laporan Anda di peta lewat link balasan. Cek PetaBencana.id untuk info banjir terkini."
          ]
        },
        "telegram": {
          "title": "Laporan lewat Telegram",
          "steps": [
            "Kirim /banjir ke @BencanaBot.",
            "Buka linknya, dan ikuti panduan untuk menginput lokasi, foto, dan deskripsi.",
            "Anda dapat melihat laporan Anda di peta lewat link balasan. Cek PetaBencana.id untuk info banjir terkini."
          ]
        },
        "otherapps": {
          "title": "Laporan lewat aplikasi lokal",
          "steps": [
            "Anda dapat melapor lewat Qlue, PasangMata, dan Z-Alert.",
            "Laporan Anda sudah tampil di peta. Cek PetaBencana.id untuk info banjir terkini."
          ],
          "links": "<br><ul><li>Qlue:&nbsp;<a href='https://play.google.com/store/apps/details?id=org.qluein.android'><i class='icon-android'></i></a>&nbsp;&#124;&nbsp;<a href='https://itunes.apple.com/us/app/qlue-jakarta-smart-city/id987432944?ls=1&mt=8'><i class='icon-apple'></i></a></li><li><a href='http://pasangmata.detik.com/'>PasangMata</a></li><li><a href='https://www.zurich.co.id/id-id/kampanye-kami/zurich-alert-the-alert-you-really-need'>Z-Alert</a></li></ul>"
        }
      },
      "info_content": {
        "intro": "PetaBencana.id memanfaatkan kekuatan media sosial untuk mengumpulkan, menyortir, dan menampilkan informasi banjir secara real-time.",
        "p1": "PetaBencana.id merupakan sebuah proyek yang diinisiasi oleh Humanitarian Infrastructures Group di MIT yang bertujuan untuk mengembangkan CogniCity Open Source Software (CogniCity OSS) sebagai sebuah platform gratis dan terbuka untuk manajemen kebencanaan di kota-kota besar di Asia Selatan dan Tenggara.",
        "p2": "Platform ini menggunakan paradigma “manusia sebagai sensor terbaik”, di mana laporan terkonfirmasi dikumpulkan secara langsung dari pengguna di lapangan, dengan metode yang memungkinkan pengolahan data yang cepat dengan biaya minimum. Kerangka kerja ini menghasilkan data real-time dan akurat, yang langsung tersedia untuk pengguna dan petugas darurat berwenang.",
        "p3": "PetaBencana.id mengumpulkan, menyortir, dan “memvisualisasikan” data menggunakan CogniCity Open Source Software - sebuah platform untuk manajemen kebencanaan - untuk mengubah kicauan di media sosial dan digital menjadi informasi penting bagi warga, komunitas, dan instansi pemerintah.",
        "partners": {
          "implementing": "Mitra Pelaksana",
          "project": "Mitra Proyek",
          "data": "Mitra Penyedia Data"
        },
        "mapCredits": "Peta Dasar",
        "mapImproveLink": "Meningkatkan peta dasar di",
        "browserStack": "Ujicoba didukung oleh <a href='https://www.browserstack.com' target='_blank'>BrowserStack</a>.",
        "privacy": "Privasi:",
        "disclaimer": "Kami tidak menyimpan informasi tentang pengguna. Semua informasi yang berasal dari perangkat seluler bergeolokasi dipetakan secara real time; informasi ini dapat dilihat lewat API terbuka untuk aplikasi lain.",
        "USAID": "Situs web ini dapat terselenggara dengan dukungan dari warga Amerika melalui USAID (U.S. Agency for International Development). Situs ini bukan merupakan situs resmi USAID atau Pemerintah Amerika Serikat. Konten situs ini seluruhnya merupakan tanggung jawab dari para pencipta dan belum tentu merefleksikan pandangan dari USAID dan Pemerintah Amerika Serikat."
      },
      "card_error_messages":{
        "already_received": "Laporan sudah diterima",
        "unknown_link": "Laporkan link tidak ada",
        "unknown_error": "Laporan tertangani kesalahan verifikasi Link",
        "link": "Pergi ke PetaBencana.id"
      },
      "card_hints":{
        "description": "Masukkan deskripsi di sini ...",
        "water_depth": "Tinggi genangan",
        "agreement_text": "Dengan mengirimkan laporan ini Anda setuju dengan",
        "agreement_title": "Kesepakatan Kontribusi PetaBencana.id",
        "more_details_required": "Deskripsi atau Foto diperlukan untuk melapor",
        "location_check": "Lokasi tidak terbaca, laporan tidak dapat ditampilkan di peta",
        "swipe": "Geser",
        "thanks": "Terima kasih atas laporan Anda",
        "redirect": "Mengalihkan ke PetaBencana.id",
        "next": "LANJUTKAN",
        "previous": "KEMBALI",
        "confirmation": "Kami akan mengirimkan pesan konfirmasi melalui"
      },
      "legend":{
        "title": "Legenda",
        "flood_gauges": "Tinggi Muka Air",
        "flood_depth": "Tinggi Banjir (cm)"
      },
      "termsContents": "<h3 style='text-align:left'>Kesepakatan Kontribusi PetaBencana.id</h3><p>Dokumen ini menjelaskan 'kesepakatan' antara 'Anda' dan proyek 'PetaBencana.id' dalam berkontribusi mengenai 'laporan banjir' termasuk 'konten' informasinya.</p><p>Dokumen ini berkenaan dengan Laporan Banjir yang dibuat via Kartu Laporan Banjir dari PetaBencana.id. Kartu Laporan ini dikeluarkan oleh program otomatis 'Bot' PetaBencana.id sebagai link sekali kirim (one-time-link) dan dikirimkan kepada Anda melalui pesan sosial. Sebagai catatan bahwa dokumen ini tidak termasuk kontribusi yang dikumpulkan oleh PetaBencana.id melalui pihak ketiga penyedia data.</p><h4>1. Tentang PetaBencana.id</h4><p>1.1 PetaBencana.id mengumpulkan Laporan Banjir dari pengguna dan pemerintah lokal ke dalam peta banjir. PetaBencana.id dibuat dengan tujuan menyajikan dan membagikan informasi terbaik dari lokasi yang terkena banjir secara real-time untuk menolong penduduk dan pembuat kebijakan dalam merespon kejadian banjir dengan lebih baik. Laporan Banjir yang Anda kirimkan divisualisasikan dalam peta terbuka dari web PetaBencana.id di <a href='https://petabencana.id/map'>https://petabencana.id/map</a>.</p><p>1.2 PetaBencana.id merupakan proyek dari Urban Risk Lab di Massachusetts Institute of Technology yang dioperasikan secara kolaboratif dengan Pacific Disaster Centre dan Badan Nasional Penanggulangan Bencana. PetaBencana.id disponsori oleh USAID.</p><p>1.3 PetaBencana.id adalah software open source dan tersedia tanpa jaminan tertentu. Untuk keterangan lebih lanjut lihat pada <a href='https://github.com/urbanriskmap/urbanriskmap-meta/blob/master/petabencana.id/LICENSING.md'>dokumentasi lisensi proyek</a>.</p><h4>2. Opt-In</h4><p>Pengisian dari Laporan Banjir ke laman PetaBencana.id tersedia sebagai servis opt-in. PetaBencana.id tidak mengumpulkan data apa pun dari Anda kecuali Anda meminta one-time-link dari Bot PetaBencana.id menggunakan platform pesan sosial.</p><h4>3. Data yang Dikumpulkan</h4><p>3.1 PetaBencana.id menghargai privasi Anda dan hanya mengumpulkan data yang diperlukan untuk peta berupa laporan genangan banjir dan sedikit informasi yang dibutuhkan untuk berkomunikasi dengan Anda via pesan sosial.</p><p>3.2 Laporan Banjir Anda beserta kontennya akan dilisensi oleh PetaBencana.id di bawah <a href='https://creativecommons.org/licenses/by/4.0/'>creative commons license</a>. Laporan Anda akan dapat diakses secara publik di <a href='https://petabencana.id'>https://petabencana.id</a></p><p>3.3 Laporan Banjir yang dikumpulkan oleh PetaBencana.id termasuk data berikut;</p><ul><li>Lokasi Anda ketika melaporkan</li><li>Tinggi genangan</li><li>Foto genangan (pilihan)</li><li>Deskripsi banjir</li><li>Waktu pelaporan</li><li>Nama akun atau nomor pengguna pesan sosial</li><li>Bahasa yang digunakan</li></ul><h4>4. Hak yang Diperoleh</h4><p>4.1 PetaBencana.id tidak meng-klaim kepemilikan dari konten Laporan Banjir Anda. Namun, demi menghargai isian dari Laporan Anda, dengan ini Anda turut berkontribusi pada proyek PetaBencana.id di seluruh dunia, bebas royalti, non-eksklusif, terus menerus, lisensi tanpa batas untuk mengakses data dalam platform PetaBencana.id dan sub-lisensi Laporan Banjir Anda beserta kontennya sesuai ketentuan lisensi yang sudah dijelaskan pada bagian 3.2 yang berkaitan dengan distribusi publik.</p><p>4.2 Ketika PetaBencana.id setuju menyandangkan Anda sebagai pemilik copyright dengan menggunakan mekanisme 'Copyright PetaBencana.id dan Kontributor'.</p><p>4.3 PetaBencana.id memiliki kewenangan untuk menghapus laporan Anda dari proyek PetaBencana.id kapan pun dan untuk alasan apa pun.</p><h4>5. Keterbatasan dan Kewajiban</h4><p>5.1 Sepanjang diperkenankan oleh hukum yang berlaku, Anda memberikan isian dari Laporan Banjir Anda 'sebagaimana adanya' tanpa jaminan apa pun, baik tersurat maupun tersirat, termasuk tanpa batasan jaminan atau kondisi yang dapat diperjualbelikan, penyesuaian untuk tujuan khusus, atau sebaliknya.</p><p>5.2 Mematuhi kewajiban yang tidak terkecuali dan terbatasi oleh hukum, baik Anda maupun PetaBencana.id bertanggung jawab untuk kerugian khusus dan tidak langsung, insidensial, berkonsekuensi, menghukum, atau yang berpotensi untuk merusak perjanjian ini. Bagaimanapun, pengecualian ini berlaku bila salah satu pihak telah memberikan peringatan akan kemungkinan terjadinya kerusakan.</p><h4>6. Keterangan Tambahan</h4><p>6.1 Perjanjian ini diatur dan ditafsirkan sesuai dengan hukum federal Amerika Serikat. Apabila terdapat ketidakabsahan terkait ketentuan apa pun dalam Perjanjian ini, maka semua anggota telah menyetujui bahwa bagian yang tidak sah tersebut tidak akan mempengaruhi keabsahan dari bagian lainnya dalam Perjanjian ini. Keseluruhan dalam Perjanjian ini terjadi antara Anda dan PetaBencana.id yang bersifat menggantikan perjanjian sebelumnya dalam bentuk apa pun, baik lisan maupun tulisan, yang berkaitan dengan subjek yang disebutkan dalam Perjanjian ini.</p><p>6.2 Dokumen ini dicontoh dari laman OpenStreetMap Foundation <a href='http://wiki.osmfoundation.org/wiki/Licence/Contributor_Terms'>License Contributor Terms</a>.</p>"
    };
  }
}
