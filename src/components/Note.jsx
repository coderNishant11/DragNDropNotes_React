/* eslint-disable react/prop-types */


export const Note = ({ content, initialPos, ...props }) => {
    console.log(initialPos)
    return <div style={{
        position: "absolute",
        left:`${initialPos?.x}px`,
        top:`${initialPos?.y}px`,
        border: "1px solid black",
        userSelect: "none",
        padding:"10px",
        width:"200px",
        cursor: "move",
        backgroundColor: "lightyellow"
    }}>
      📌{content}
  </div>;
};

export default Note
