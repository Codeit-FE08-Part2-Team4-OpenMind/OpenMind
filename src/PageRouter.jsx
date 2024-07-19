import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import SubjectSelection from './pages/SubjectSelection';
import AnswerFeed from './pages/AnswerFeed';
import Home from './pages/Home';
import QuerySample from './pages/QuerySample';
import QuestionFeed from './pages/QuestionFeed';

function PageRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/list'} element={<SubjectSelection />} />
        <Route path={'/post/:id'}>
          <Route index element={<QuestionFeed />} />
          <Route path={'answer'} element={<AnswerFeed />} />
        </Route>
        {/* 팀원분들 Suspense + tanstack-query 예시용 샘플 */}
        <Route path={'/querysample'} element={<QuerySample />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PageRouter;
