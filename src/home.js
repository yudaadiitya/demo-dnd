import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonBase from "@material-ui/core/ButtonBase";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import "./App.css";
import Line from "./assets/images/Rectangle184.png";
import Signal from "./assets/images/signal.png";
import { makeStyles } from "@material-ui/core/styles";
import { FormatAlignJustify } from "@material-ui/icons";
import SwipeToDelete from "react-swipe-to-delete-component";
import { Link } from "react-router-dom";

const finalSpaceCharacters = [
  {
    id: "1",
    name: "Saya dapat kembali memasang sebuah benda setelah membongkarnya",
    label: "Sangat sesuai",
    thumb: "/images/gary.png",
  },
  {
    id: "2",
    name: "Pekerjaan yang mengandalkan kemampuan analisis adalah jenis pekerjaan yang saya sukai",
    label: "Sesuai",
    thumb: "/images/cato.png",
  },
  {
    id: "3",
    name: "Saya dikenal banyak orang karena kemampuan saya dalam menciptakan karya-karya artistik",
    label: "Agak sesuai",
    thumb: "/images/kvn.png",
  },
  {
    id: "4",
    name: "Saya siap menjadi sukarelawan untuk membantu orang-orang yang membutuhkan",
    label: "Agak tidak sesuai",
    thumb: "/images/mooncake.png",
  },
  {
    id: "5",
    name: "Saya memahami cara-cara agar orang lain mau berbuat sesuai yang saya inginkan",
    label: "Tidak sesuai",
    thumb: "/images/quinn.png",
  },
  {
    id: "6",
    name: "Saya menempatkan ketepatan dalam setiap hasil pekerjaan saya",
    label: "Sangat tidak sesuai",
    thumb: "/images/quinn.png",
  },
];

const useStyles = makeStyles((theme) => ({
  container: {
    display: "block",
    width: 316,
    height: 87,
  },
  paper: {
    width: 316,
    height: 87,
    borderRadius: 12,
    marginTop: 21,
    FormatAlignJustify: "center",
    position: "relative",
    left: 20,
  },
}));

function Home() {
  const [characters, updateCharacters] = useState(finalSpaceCharacters);
  const [count, setCount] = useState(0);

  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    if (result) {
      setCount(count + 1);
    }
    updateCharacters(items);
  }
  const classes = useStyles();

  const onDelete = (customProps) => console.info("onDelete", customProps);
  const onCancel = (customProps) => console.info("onCancel", customProps);
  const onLeft = (...args) => console.info("onLeft", ...args);
  const onRight = (...args) => console.info("onRight", ...args);

  const list = characters.map((item) => (
    <SwipeToDelete
      key={item.id}
      item={item}
      tag="li"
      classNameTag="tw feed"
      onDelete={onDelete}
    >
      <Paper>
        <h4 className="list-group-item-heading">{item.name}</h4>
        <p>{item.label}</p>
      </Paper>
    </SwipeToDelete>
  ));

  return (
    <>
      <Container maxWidth="sm" className="container-out">
        <div className="App">
          <div className="smartphone">
            <div className="smartphone__content">
              <div className="layout-home">
                <div className="instruction-home">
                  <p>Membandingkan Desain</p>
                  <img src={Signal} alt="signal" />
                </div>
                <Link to="/desain-a">
                  <Paper
                    style={{
                      width: 316,
                      height: 87,
                      marginBottom: 20,
                      borderRadius: 12,
                    }}
                  >
                    <p className="label-home">Desain A</p>
                  </Paper>
                </Link>
                <Link to="/desain-b">
                  <Paper
                    style={{
                      width: 316,
                      height: 87,
                      marginBottom: 20,
                      borderRadius: 12,
                    }}
                  >
                    <p className="label-home">Desain B</p>
                  </Paper>
                </Link>
                <a
                  href="https://yudaadiitya.github.io/prototype-riasec2/"
                >
                  <Paper
                    style={{
                      width: 316,
                      height: 87,
                      marginBottom: 20,
                      borderRadius: 12,
                    }}
                  >
                    <p className="label-home">Desain C</p>
                  </Paper>
                </a>
                <Button
                  variant="contained"
                  style={{ width: 316, marginBottom: 30 }}
                  href="https://docs.google.com/forms/d/e/1FAIpQLSer_DsId0SpiqJQ_qUqZlGe4RRhcM1J22QYdkpOBB0v6OYlJQ/viewform"
                >
                  Rate this design
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Home;
