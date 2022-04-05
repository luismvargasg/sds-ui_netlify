import React from 'react';

/* Utilities */
import { useHistory } from 'react-router-dom';

/* UI Library Components */
import { Card, Col, Tree, Typography } from 'antd';

/* UI Library Sub-components */
const { Meta } = Card;

const SubjectsTitleCard = ({ data, core }) => {
  const history = useHistory();
  const onClick = (subject) => {
    history.push(`/app/subjects?id=${subject.id}`);
    core.setURL(`/app/subjects?id=${subject.id}`);
  };
  return (
    <>
      <Col span={18}>
        <Card bodyStyle={{ height: '200px' }} className="pattern">
          <Meta
            description={
              <>
                <Typography.Title level={4} style={{ marginBottom: 0 }}>
                  {data.tree.key === 0 ? 'Tema:' : 'Subtema:'}
                </Typography.Title>
                <Typography.Title level={2} style={{ margin: 0 }}>
                  {data.tree.title}
                </Typography.Title>
              </>
            }
          />
        </Card>
      </Col>
      <Col span={6}>
        <Card bodyStyle={{ height: '200px' }}>
          <Tree
            height={150}
            defaultExpandAll
            selectable={false}
            treeData={[data.tree]}
            onClick={(datum, subject) => onClick(subject)}
          />
        </Card>
      </Col>
    </>
  );
};

export default SubjectsTitleCard;
