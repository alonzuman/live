import React from 'react';
import Video from './components/pages/Video';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`

`

function App() {
  return (
    <Router>
      <Switch>
        <Container>
          <Route path='/' component={Video} />
        </Container>
      </Switch>
    </Router>
  );
}

export default App;
