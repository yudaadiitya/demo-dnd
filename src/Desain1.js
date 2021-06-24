import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import Container from "@material-ui/core/Container";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import "./App.css";
import Line from "./assets/images/Rectangle184.png";
import Signal from "./assets/images/signal.png";
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

function Desain1() {
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

  return (
    <>
      <Container maxWidth="sm" className="container-out">
        <div className="App">
          <header className="App-header">
                <h1>RIASEC</h1>
            <div className="smartphone">
              <div className="smartphone__content">
                <div className="layout">
                  <div className="instruction">
                    <p>Urutkanlah dari yang paling sesuai (atas - bawah)</p>
                    <img src={Signal} alt="" />
                  </div>
                  <div className="container">
                    <div className="number-list">
                      <p className="label">Paling Sesuai</p>
                      <img src={Line} alt="line" className="line" />
                      <p className="label">Paling Tidak Sesuai</p>
                    </div>
                    <DragDropContext onDragEnd={handleOnDragEnd}>
                      <Droppable droppableId="characters">
                        {(provided) => (
                          <ul
                            className="characters"
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                          >
                            <div>
                              {characters.map(
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
                                          {/* <label className="label">{label}</label> */}
                                          <div
                                            className={`border${index}`}
                                          ></div>
                                          <p>
                                            {name}
                                            <DragIndicatorIcon
                                              style={{
                                                color: "rgba(52, 52, 52, 0.5)",
                                                position: "relative",
                                                left: 20,
                                              }}
                                            />
                                          </p>
                                        </li>
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
                  </div>
                </div>
              </div>
            </div>
          </header>
          {count >= 1 ? (
            <>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#005589",
                width: 132,
                height: 40,
                position: "relative",
                left: 90,
                bottom: 125,
              }}
              onClick={() => updateCharacters(finalSpaceCharacters)}
            >
              <ArrowRightAltIcon style={{ color: "#FFFFFF" }} />
            </Button>
          <Link to="/" className="button-home">
            <Button variant="contained" style={{textDecoration:"none"}}>
              <HomeIcon />
            </Button>
          </Link>
          </>
          ) : (
            <div></div>
          )}
        </div>
      </Container>
    </>
  );
}

export default Desain1;
