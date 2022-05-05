import React from 'react';
import Plot from 'react-plotly.js';

function Map(props) {

    const states = props.data.map(x=>Object.values(x)[0])
    const surgeries = props.data.map(x=>Object.values(x)[1])

    return (
      <Plot
        data={[
          {
              type: 'choropleth',
              locations: states,
              z: surgeries,
              locationmode: 'USA-states',
              autocolorscale: false,
              colorscale: 'Portland',
              colorbar: {
              title: 'Nb. Surgeries',
          },
          }
        ]}
        layout={ {geo:{
              scope: 'usa',
              showlakes: true,
              lakecolor: 'rgb(255,255,255)',
                bgcolor: 'rgba(0,0,0,0)'
          },
            paper_bgcolor: 'rgba(0,0,0,0)',
            plot_bgcolor: 'rgba(0,0,0,0)',
            margin: {l: 0,
                r: 0,
                b: 0,
                t: 0,
                pad: 1},
            dragmode: false
      }}
        config={{
            scrollZoom: false,
            displayModeBar: false
        }}
      />
    );
}

export default Map