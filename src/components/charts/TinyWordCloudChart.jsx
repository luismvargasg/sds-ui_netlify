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
    weightField: 'value',
    colorField: 'name',
    wordStyle: {
      fontFamily: 'Verdana',
      fontSize: [10, 22],
      rotation: 0,
    },
    height: 120,
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
