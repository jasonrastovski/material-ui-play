import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'typeface-roboto';
import { Grid } from "@material-ui/core";

interface User {
  username: string;
}

const users: User[] = [
  { username: "one" },
  { username: "two" },
  { username: "three" },
  { username: "one" },
  { username: "two" },
  { username: "one" },
  { username: "two" },
  { username: "one" },
  { username: "two" },
];

const App: React.FC = () => {
  return (
    <div className="App">
      <Grid container spacing={2}>
        {users.map(user =>
          <Grid item sm={12} md={6} lg={3}>
            {user.username}
          </Grid>
        )}

      </Grid>
    </div>
  );
}

export default App;
