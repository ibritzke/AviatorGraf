import React, { useState } from "react";
import { Chart } from "react-google-charts";
import { Container, Grafico } from "./style";
export const BarChart = () => {
  const [options, setOptions] = useState({
    title: "Gráfico Histórico",
    is3D: true,
  });

  const [data, setData] = useState([
    ["Status", "Quantidade"],
    ["WinTop", 3],
    ["Win", 4],
    ["Loss", 2],
  ]);

  //   const [optionsBar, setOptionsBar] = useState({
  //     title: 'Gráfico de Barra'
  //   });

  //   const [dataBar, setDataBar] = useState([
  //     ['Cidades', '2010 População', '2000 População'],
  //     ['New York City, NY', 8175000, 8008000],
  //     ['Los Angeles, CA', 3792000, 3694000],
  //     ['Chicago, IL', 2695000, 2896000],
  //     ['Houston, TX', 2099000, 1953000],
  //     ['Philadelphia, PA', 1526000, 1517000],
  //   ])

  return (
    <Container>
      <Grafico>
        <Chart
          width={"500px"}
          height={"300px"}
          chartType="PieChart"
          data={data}
          options={options}
        />
        {/* <Chart
          width={'500px'}
          height={'300px'}
          chartType="BarChart"
          data={dataBar}
          options={optionsBar}
        /> */}
      </Grafico>
    </Container>
  );
};
