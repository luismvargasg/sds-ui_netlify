import React from 'react';

/* Libraries */
import { WordCloud } from '@ant-design/charts';

/* Utilities */
import { useHistory } from 'react-router-dom';

const TinyWordCloudChart = React.memo(function ({ data, core }) {
  const history = useHistory();
  let config = {
    data: data,
    wordField: 'name',
    weightField: 'products',
    colorField: 'name',
    wordStyle: {
      fontFamily: 'Verdana',
      fontSize: [10, 22],
      rotation: 0,
    },
    height: 140,
    tooltip: {
      formatter: (datum) => {
        return {
          name: datum.text,
          value:
            datum.value === 1
              ? `${datum.value} producto`
              : `${datum.value} productos`,
        };
      },
    },
  };

  return (
    <WordCloud
      {...config}
      onReady={(plot) => {
        plot.on('plot:click', (evt) => {
          if (evt.data) {
            history.push(`/app/subjects?id=${evt.data.data.datum.id}`);
            core.setURL(`/app/subjects?id=${evt.data.data.datum.id}`);
          }
        });
      }}
    />
  );
});

export default TinyWordCloudChart;
