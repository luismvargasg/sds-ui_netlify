import React from 'react';

/* UI Library Componens */
import { Badge } from 'antd';

/* Libraries */
import { DualAxes } from '@ant-design/plots';

const TinyColumnLineChart = React.memo(function ({ data }) {
  const labels = { citations: 'Citaciones', products: 'Productos' };
  const config = {
    data: [data, data],
    height: 140,
    xField: 'year',
    yField: ['products', 'citations'],
    tooltip: {
      customContent: (title, items) => {
        return (
          <>
            <h4 style={{ margin: '10px 0' }}>Año: {title}</h4>
            {items.length === 2 && (
              <>
                <p style={{ marginTop: '5px', marginBottom: 0 }}>
                  <Badge color={'#6395F9'} />
                  {items[0]?.name === 'products'
                    ? `Productos: ${items[0].value}`
                    : ''}
                </p>
                <p style={{ margin: '10px 0' }}>
                  <Badge color={'#5AD8A6'} />
                  {items[1]?.name === 'citations'
                    ? `Citaciones: ${items[1].value}`
                    : ''}
                </p>
              </>
            )}
            {items.length === 1 && (
              <p style={{ marginTop: '5px', marginBottom: '10px' }}>
                {items[0]?.name === 'products' ? (
                  <>
                    <Badge color={'#6395F9'} /> Productos: {items[0].value}
                  </>
                ) : (
                  <>
                    <Badge color={'#5AD8A6'} />
                    Citaciones: {items[0].value}
                  </>
                )}
              </p>
            )}
          </>
        );
      },
    },
    legend: {
      itemName: {
        formatter: (item) => labels[item],
      },
    },
    geometryOptions: [
      {
        geometry: 'column',
      },
      {
        geometry: 'line',
        lineStyle: {
          lineWidth: 2,
        },
      },
    ],
  };

  return <DualAxes {...config} />;
});

export default TinyColumnLineChart;
