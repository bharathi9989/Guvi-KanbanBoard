import React from "react";
import Column from "./Column";

const COLUMNS = [
  { id: "todo", title: "To Do" },
  { id: "inprogress", title: "In Progress" },
  { id: "done", title: "Done" },
];
function Board() {
  return (
    <div className="">
      {COLUMNS.map((col) => (
        <Column key={col.id} status={col.id} title={col.title} />
      ))}
    </div>
  );
}

export default Board;
