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
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20px',
        }}
      >
        <p>
          <b>{`¿Quieres ver más información sobre ${title[type]}?`}</b>
        </p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Link
          to={`/app/${type === 'covid' ? 'subjects' : 'policies'}?id=${id}`}
          onClick={() => core.setURL(`/app/policies?id=${id}`)}
        >
          <Button type="primary">Haz click aquí</Button>
        </Link>
      </div>
    </>
  );
};

export default CallToActionTrends;
