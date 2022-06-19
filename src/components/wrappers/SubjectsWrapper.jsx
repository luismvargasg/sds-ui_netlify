import React from 'react';

/* Utilities */
import { APIRequest } from '../../apis/api';
import { useLocation } from 'react-router';

/* Components */
import ErrorWarning from '../ErrorWarning';
import LoadingCard from '../LoadingCard';

/* Charts */
import WordCloudChart from '../charts/WordCloudChart';

const SubjectsWrapper = ({ core }) => {
  const location = useLocation();
  const [state] = APIRequest(
    `${location.pathname}${location.search}&data=subjects&limit=20`
  );

  if (state.isError) {
    return <ErrorWarning />;
  }
  if (state.isLoading) {
    return <LoadingCard />;
  }
  return (
    <div>
      <WordCloudChart title="Temas" data={state.data.data} core={core} />
    </div>
  );
};

export default SubjectsWrapper;
