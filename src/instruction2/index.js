import React from "react";
import Talentlytica from "../assets/Logo/Talentlytica.png";
import Container from "@material-ui/core/Container";
import CardHeader from "@material-ui/core/CardHeader";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import "./style.css";

const logo = <img src={Talentlytica} alt="Talentlytica" />;

export default function index() {
  return (
    <Container maxWidth="xs">
<div className="smartphone">
        <div className="smartphone__content">
          <div className="content-instruction">
      <header>
        <img src={Talentlytica} alt="Talentlytica" />
      </header>
      <div className="content">
        <Typography
          variant="h6"
          gutterBottom
          style={{
            textAlign: "center",
            fontFamily: "Open Sans, sans-serif",
            fontWeight: "normal",
            fontSize: 24,
            color: "#000000",
            marginTop: 12,
          }}
        >
          RIASEC
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          style={{
            textAlign: "center",
            fontFamily: "Open Sans, sans-serif",
            fontWeight: "normal",
            fontSize: 14,
            color: "#444A58",
            marginTop: 12,
          }}
        >
          Instruksi tes:
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          style={{
            textAlign: "left",
            fontFamily: "Open Sans, sans-serif",
            fontWeight: "normal",
            fontSize: 14,
            color: "#444A58",
            marginTop: 12,
          }}
        >
          Berikut Anda akan menghadapi beberapa pernyataan terkait sifat maupun
          preferensi tertentu. Silakan menilai kesesuaian pernyataan tersebut
          dengan kondisi diri Anda saat ini.
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          style={{
            textAlign: "left",
            fontFamily: "Open Sans, sans-serif",
            fontWeight: "normal",
            fontSize: 14,
            color: "#444A58",
            marginTop: 12,
          }}
        >
          Tugas Anda adalah :
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          style={{
            textAlign: "left",
            fontFamily: "Open Sans, sans-serif",
            fontWeight: "normal",
            fontSize: 14,
            color: "#444A58",
            marginTop: 6,
          }}
        >
          ● Terdapat 6 pernyataan yang harus anda urutkan dari yang menurut Anda sangat sesuai s/d sangat tidak sesuai.
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          style={{
            textAlign: "left",
            fontFamily: "Open Sans, sans-serif",
            fontWeight: "normal",
            fontSize: 14,
            color: "#444A58",
            marginTop: 6,
          }}
        >
          ● Untuk memindahkan urutan pernyataan tersebut yaitu dengan cara menyeret / drag pernyataan yang ingin Anda pindahkan sesuai urutan yang Anda inginkan.
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          style={{
            textAlign: "left",
            fontFamily: "Open Sans, sans-serif",
            fontWeight: "normal",
            fontSize: 14,
            color: "#444A58",
            marginTop: 6,
          }}
        >
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          style={{
            textAlign: "left",
            fontFamily: "Open Sans, sans-serif",
            fontWeight: "normal",
            fontSize: 14,
            color: "#444A58",
            marginTop: 6,
          }}
        >
          ● Jika menurut Anda urutan sudah sesuai, silahkan menekan tombol Panah
          untuk melanjutkan ke soal berikutnya
        </Typography>
        <div >
          <Link to="/demo-dnd/desain-b" className="button-next">
            <Typography variant="body1"
          gutterBottom
          style={{
            textAlign: "left",
            fontFamily: "Open Sans, sans-serif",
            fontWeight: "normal",
            fontSize: 14,
            color: "#FFFFFF",
            marginTop: 6,
          }}>
                COBA SIMULASI
            </Typography>
          </Link>
        </div>
      </div>
      </div>
        </div>
      </div>
    </Container>
  );
}
