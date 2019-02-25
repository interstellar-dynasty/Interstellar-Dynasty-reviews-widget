import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';



const Chart = (props) => {
    const chartStyle = {
        gridRow: '1',
        horizontal: 'true'
    }
    const pullData = () => {
        let data = [];
        let hash = {0:0, 1:0, 2:0, 3:0, 4:0, 5:0}
        
        for (let i = 0; i < props.data.length; i++) {
            let rounded = Math.floor(props.data[i].rating)
            hash[rounded] = hash[rounded] + 1 || 0;
        }
        for (let rating in hash) {
            let storage = {};
            storage.x = `${rating} Star`
            storage.y = hash[rating]
            console.log(storage)
            data.push(storage)
        }
        return data;
    }

    const data = pullData();
    
    return <div style={chartStyle}>
       <VictoryChart
       domainPadding={20}
       height={200}
       width={250}
       >
       <VictoryAxis tickFormat={t => null}/>
       <VictoryAxis dependentAxis />
       <VictoryBar
      horizontal
      barWidth={12}
      style={{data: {fill: "#ffce00"}}} 
      data={data}
      labels={(d) => d.y}
       />
       </VictoryChart>
       </div>
}

export default Chart