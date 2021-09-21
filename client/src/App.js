
import './App.css';
import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch,  Link,
  useRouteMatch,
  useParams } from 'react-router-dom'

import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import Post from './components/Post/Post';
import Footer from './components/Footer/Footer';

const FILTER_MAP = {
  "All": () => true,
  "Essays": post => post.category === 'Essays',
  "Poems": post => post.category === 'Poems',
  "Reviews": post => post.category === 'Reviews',
  "Film critique": post => post.category === 'Film critique',
  "Game analysis": post => post.category === 'Game analysis',
  "Series introspection": post => post.category === 'Series introspection'
};

const essays = (post) => post.category === 'essays';
const FILTER_NAMES = Object.keys(FILTER_MAP);

const DATA = [{
  name: "Test post",
  category: "Poems",
  content: "This is just a test post you stupid bakaThis is just a test post you stupid bakaThis is just a test post you stupid bakaThis is just a test post you stupid bakaThis is just a test post you stupid baka",
  date: "April, ninth, 2020",
  id: "01"
},
{
  name: "Test post",
  category: "poems",
  content: "This is just a test post you stupid bakaThis is just a test post you stupid bakaThis is just a test post you stupid bakaThis is just a test post you stupid bakaThis is just a test post you stupid baka",
  date: "April, ninth, 2020",
  id: "02"
},
{
  name: "Test post",
  category: "Essays",
  content: "This is just a test post you stupid bakaThis is just a test post you stupid bakaThis is just a test post you stupid bakaThis is just a test post you stupid baka",
  date: "April, ninth, 2020",
  id: "03"
},
{
  name: "Test post",
  category: "essays",
  content: "This is just a test post you stupid bakaThis is just a test post you stupid bakaThis is just a test post you stupid bakaThis is just a test post you stupid baka",
  date: "April, ninth, 2020",
  id: "04"
}];

function App() {
  const [filter, setFilter] = useState('All');
  return (
    <Router>
      <Header setFilter={setFilter} />
      <Switch>
        <Route path={`/post/:postId`}>
          <Post posts = {DATA}  />
        </Route>
        <Route path={`/`}>
          <div className='container'>
            <MainContent posts = {DATA} filter={filter} FILTER_MAP={FILTER_MAP}/>
        </div>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
