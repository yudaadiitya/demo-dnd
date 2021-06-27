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
                Berikut Anda akan menghadapi beberapa pernyataan terkait sifat
                maupun preferensi tertentu. Silakan menilai kesesuaian
                pernyataan tersebut dengan kondisi diri Anda saat ini.
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
                ● Slide / geser ke kanan mulai dari pernyataan yang menurut Anda
                sangat sesuai sampai dengan pernyataan sangat tidak sesuai
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
                ● Setelah semua pernyataan digeser maka terdapat urutan
                pernyataan dari No. 1 (Sangat sesuai) sampai dengan No. 6
                (Sangat tidak sesuai)
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
                ● Jika Anda ingin merubah urutan pernyataan silahkan drag /
                seret pernyataan ke urutan yang anda inginkan
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
                ● Jika urutan menurut Anda sudah sesuai silahkan menekan tombol
                Panah untuk melanjutkan ke soal berikutnya
              </Typography>
              <div>
                <Link to="/demo-dnd/desain-a" className="button-next">
                  <Typography
                    variant="body1"
                    gutterBottom
                    style={{
                      textAlign: "left",
                      fontFamily: "Open Sans, sans-serif",
                      fontWeight: "normal",
                      fontSize: 14,
                      color: "#FFFFFF",
                      marginTop: 6,
                    }}
                  >
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
