import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
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
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';

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

function Desain3() {
  const [characters, updateCharacters] = useState(finalSpaceCharacters);
  const [newItem, updateNewItem] = useState([]);
  const [count, setCount] = useState(0);

  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(newItem);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    if (result) {
      setCount(count + 1);
    }
    updateNewItem(items);
  }
  const classes = useStyles();

  const onDelete = (customProps) => {
    const result = { customProps };
    const items = Array.from(characters);
    const { id } = customProps.item;
    const [reorderedItem] = items.splice(id - 1, 1);
    newItem.push(reorderedItem);
    setCount(count + 1);
    // console.log(reorderedItem)
    // console.log(customProps)
    // updateCharacters(customProps)
    updateNewItem(newItem);
  };
  const onCancel = (customProps) => console.info("onCancel", customProps);
  const onLeft = (...args) => console.info("onLeft", ...args);
  const onRight = (customProps) => console.log(customProps);

  const list = characters.map((item) => (
    <SwipeToDelete
      key={item.id}
      item={item}
      classNameTag="delete-item"
      onDelete={onDelete}
      // onRight={onRight(item)}
      background={<p>{count + 1}</p>}
    >
      <Paper
        style={{
          height: 70,
          width: 320,
          position: "relative",
          bottom: 0,
          display: "flex",
          marginBottom: 20,
        }}
      >
        <p className="label-3">{item.name}</p>
        <ArrowForwardIosIcon
          style={{
            color: "#FD9F28",
            position: "relative",
            top: 30,
            fontSize: "small",
          }}
        />
        {/* <button onDelete={onDelete}>></button> */}
      </Paper>
    </SwipeToDelete>
  ));

  return (
    <>
      {count >= 6 ? (
        <Container maxWidth="sm" className="container-out">
          <div className="App">
            {/* <header className="App-header"> */}
            <div className="smartphone">
              <div className="smartphone__content">
                <div className="layout-3">
                  <div className="instruction">
                    <p>Jawaban urutan kesesuaian</p>
                    <img src={Signal} alt="" />
                  </div>
                  <div className="container">
                    <div className="number-list-3">
                      <p className="label">1</p>
                      <p className="label">2</p>
                      <p className="label">3</p>
                      <p className="label">4</p>
                      <p className="label">5</p>
                      <p className="label">6</p>
                    </div>
                    <DragDropContext onDragEnd={handleOnDragEnd}>
                      <Droppable droppableId="characters">
                        {(provided) => (
                          <ul
                            className="characters-3"
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                          >
                            <div>
                              {newItem.map(
                                ({ id, name, label, thumb }, index) => {
                                  return (
                                    <Draggable
                                      key={id}
                                      draggableId={id}
                                      index={index}
                                    >
                                      {(provided) => (
                                        <li
                                          ref={provided.innerRef}
                                          {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                        >
                                          {/* <Paper
                                      style={{
                                        height: 70,
                                        width: 320,
                                        position: "relative",
                                        bottom: 13.8,
                                      }}
                                    > */}
                                          <p className="label-3">{name}</p>
                                          <DragIndicatorIcon
                                            style={{
                                              color: "rgba(52, 52, 52, 0.5)",
                                              position: "relative",
                                              left: 0,
                                            }}
                                          />
                                          {/* <button onDelete={onDelete}>></button> */}
                                          {/* </Paper> */}
                                        </li>
                                        // {/* <label className="label">{label}</label> */}
                                        // <div
                                        //   className={`border${index}`}
                                        // ></div>
                                        // <p>
                                        //   {name}
                                        //   <DragIndicatorIcon
                                        //     style={{
                                        //       color: "rgba(52, 52, 52, 0.5)",
                                        //       position: "relative",
                                        //       left: 20,
                                        //     }}
                                        //   />
                                        // </p>
                                      )}
                                    </Draggable>
                                  );
                                }
                              )}
                              {provided.placeholder}
                            </div>
                          </ul>
                        )}
                      </Droppable>
                    </DragDropContext>
                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: "#005589",
                        width: 132,
                        height: 40,
                        position: "relative",
                        right: 80,
                        top: 530,
                      }}
                      onClick={() => {
                        setCount(0);
                        updateNewItem([]);
                      }}
                    >
                      <ArrowRightAltIcon style={{ color: "#FFFFFF" }} />
                    </Button>
                    <Link to="/" className="button-home-3">
                      <Button
                        variant="contained"
                        style={{ textDecoration: "none" }}
                      >
                        <HomeIcon />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* </header> */}
          </div>
        </Container>
      ) : (
        <Container maxWidth="sm" className="container-out">
          <div className="App">
            {/* <header className="App-header"> */}
            <div className="smartphone">
              <div className="smartphone__content">
                <div className="layout-3">
                  <div className="instruction">
                    <p>Geser ke kanan mulai dari yang paling sesuai</p>
                    <img src={Signal} alt="" />
                  </div>
                  <div className="list-group">{list}</div>
                  {count >= 6 ? (
                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: "#005589",
                        width: 132,
                        height: 40,
                        position: "relative",
                        left: 90,
                        top: 500,
                      }}
                      onClick={() => updateCharacters(finalSpaceCharacters)}
                    >
                      <ArrowRightAltIcon style={{ color: "#FFFFFF" }} />
                    </Button>
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
            </div>
            {/* </header> */}
          </div>
        </Container>
      )}
    </>
  );
}

export default Desain3;
