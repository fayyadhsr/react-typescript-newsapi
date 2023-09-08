import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import type { FC } from 'react';
import 'antd/dist/reset.css';
import { GetList } from './components/list';
import ArticleDetail from './components/articleDetail';
import { AppHeader } from './components/header';
import { AppFooter } from './components/footer';

const App: FC = () => (
  <div>
    <Router>
      <AppHeader />
      <Routes>
        <Route path="/" element={<GetList />} />
        <Route path="/article/:articleTitle" element={<ArticleDetail />} />
      </Routes>
      <AppFooter />
    </Router>
  </div>
);

export default App;
