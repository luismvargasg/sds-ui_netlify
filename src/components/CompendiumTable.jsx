import React, { useEffect, useState } from 'react';

/* Components */
import ErrorWarning from './ErrorWarning';
import LoadingCard from './LoadingCard';

/* UI Library Components */
import { Table } from 'antd';

/* Utilities */
import { APIRequest } from '../apis/api';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

/* Charts */
import TinyColumnLineChart from './charts/TinyColumnLineChart';
import TinyWordCloudChart from './charts/TinyWordCloudChart';

/* UI Library Sub-components */
const { Column } = Table;

const CompendiumTable = ({ core, type }) => {
  const [pagination, setPagination] = useState({ page: 1, max: 10 });
  const location = useLocation();
  let URL = location.pathname;
  const [state, setUrl] = APIRequest(
    `${URL}?data=${type}&page=${pagination.page}&max=${pagination.max}`
  );
  const title = {
    groups: 'Grupo de investigación',
    institutions: 'Institución',
  };

  useEffect(() => {
    setUrl(`${URL}?data=${type}&page=${pagination.page}&max=${pagination.max}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination]);

  if (state.isError) {
    return <ErrorWarning />;
  } else if (state.isLoading) {
    return <LoadingCard />;
  }
  return (
    <>
      <Table
        size="small"
        dataSource={state.data.data}
        bordered
        rowKey={(record) => record.id}
        pagination={{
          total: state.data.total,
          showSizeChanger: true,
          current: pagination.page,
          pageSize: pagination.max,
          pageSizeOptions: [10, 20, 30],
          onChange: (page, max) => setPagination({ page: page, max: max }),
        }}
        rowClassName="compendium__row--height"
        scroll={{ x: 1400 }}
      >
        <Column
          align="center"
          title="Puesto"
          dataIndex="index"
          render={(index) => <b>{index}</b>}
        />
        <Column
          title={title[type]}
          render={(item) => (
            <Link
              to={`/app/${type}?id=${item.id}`}
              onClick={() => core.setURL(`/app/${type}?id=${item.id}`)}
            >
              {item.name}
            </Link>
          )}
        />
        {type !== 'institutions' ? (
          <Column
            title="Afiliación"
            dataIndex={'affiliations'}
            render={(item) => (
              <Link
                to={`/app/institutions?id=${item.institution.id}`}
                onClick={() =>
                  core.setURL(`/app/institutions?id=${item.institution.id}`)
                }
              >
                {item.institution.name}
              </Link>
            )}
          />
        ) : (
          ''
        )}
        <Column title="Productos totales" dataIndex={'products_count'} />
        <Column title="Citas totales" dataIndex={'citations_count'} />
        <Column
          title="Productos y Citas por año"
          dataIndex={'plot'}
          render={(item) => <TinyColumnLineChart data={item} />}
          width={'30%'}
        />
        <Column
          title="Temas"
          dataIndex={'subjects'}
          width={'30%'}
          render={(item) => <TinyWordCloudChart data={item} core={core} />}
        ></Column>
      </Table>
    </>
  );
};

export default CompendiumTable;
