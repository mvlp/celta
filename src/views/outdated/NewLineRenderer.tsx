import React from "react";

export function NewLineRenderer(props: { value: string }) {
  // Substitui o caractere \n por <br> para quebras de linha
  const lines = props.value.split("\\n");
  return (
    <>
      {lines.map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </>
  );
}
