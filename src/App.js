import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import Container from "@material-ui/core/Container";
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import "./App.css";
import Line from "./assets/images/Rectangle184.png";
import Signal from "./assets/images/signal.png"

const finalSpaceCharacters = [
  {
    id: "1",
    name: "Saya menyukai menjadi orang yang mengambil keputusan dan tanggung jawab",
    label: "Sangat sesuai",
    thumb: "/images/gary.png",
  },
  {
    id: "2",
    name: "Saya menyukai pekerjaan yang melibatkan aktivitas fisik",
    label: "Sesuai",
    thumb: "/images/cato.png",
  },
  {
    id: "3",
    name: "Saya peka terhadap perasaan orang lain asdasdasd ",
    label: "Agak sesuai",
    thumb: "/images/kvn.png",
  },
  {
    id: "4",
    name: "Saya senang mencoba tugas yang berhubungan dengan pekerjaan baru",
    label: "Agak tidak sesuai",
    thumb: "/images/mooncake.png",
  },
  {
    id: "5",
    name: "Saya menyukai menjadi orang yang mengambil keputusan dan tanggung jawab",
    label: "Tidak sesuai",
    thumb: "/images/quinn.png",
  },
  {
    id: "6",
    name: "Banyak orang menganggap saya adalah orang yang selalu ingin tahu",
    label: "Sangat tidak sesuai",
    thumb: "/images/quinn.png",
  },
];

function App() {
  const [characters, updateCharacters] = useState(finalSpaceCharacters);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  return (
    <Container maxWidth="sm" className="container-out">
      <div className="App">
        <header className="App-header">
          <h1>RIASEC</h1>
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
                        {characters.map(({ id, name, label, thumb }, index) => {
                          return (
                            <Draggable key={id} draggableId={id} index={index}>
                              {(provided) => (
                                <li
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  {/* <label className="label">{label}</label> */}
                                  <div className={`border${index}`}></div>
                                  <p>
                                    {name}
                                    <DragIndicatorIcon />
                                  </p>
                                </li>
                              )}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    </ul>
                  )}
                </Droppable>
              </DragDropContext>
            </div>
          </div>
        </header>
        <Button variant="contained" color="primary" className="button-next">
          <ArrowRightAltIcon />
        </Button>
        <p>
          <a href="https://www.talentlytica.com/">Talentlytica</a>
        </p>
      </div>
    </Container>
  );
}

export default App;
