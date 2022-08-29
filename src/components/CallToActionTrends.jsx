import React from 'react';

/* UI Library Components */
import { Button } from 'antd';

/* Utilities */
import { Link } from 'react-router-dom';

const CallToActionTrends = ({ core, id, type }) => {
  const title = {
    covid: 'COVID-19',
    pdd: 'el Plan Distrital de Desarrollo',
    pts: 'el Plan Territorial de Salud',
  };
  return type === 'covid' ? (
    <>
      <div
        style={{
          fontSize: '20px',
          marginTop: '20px',
        }}
      >
        <p>
          <b>{`¿Quieres ver la información detallada sobre ${title[type]}?`}</b>
        </p>
      </div>
      <div>
        <Link
          to={`/app/${type === 'covid' ? 'subjects' : 'policies'}?id=${id}`}
          onClick={() =>
            core.setURL(
              `/app/${type === 'covid' ? 'subjects' : 'policies'}?id=${id}`
            )
          }
        >
          <Button size="large" type="primary">
            Haz click aquí
          </Button>
        </Link>
      </div>
    </>
  ) : (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20px',
          marginBottom: '7px',
        }}
      >
        <p>
          <b>{`¿Quieres ver la información general sobre ${title[type]}?`}</b>
        </p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Link
          to={`/app/${type === 'covid' ? 'subjects' : 'policies'}?id=${id}`}
          onClick={() =>
            core.setURL(
              `/app/${type === 'covid' ? 'subjects' : 'policies'}?id=${id}`
            )
          }
        >
          <Button type="primary" size="large">
            Haz click aquí
          </Button>
        </Link>
      </div>
    </>
  );
};

export default CallToActionTrends;
