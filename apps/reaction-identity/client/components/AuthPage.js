import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  },
  content: {
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '85%',
    },
  },
  logoutButton: {
    textAlign: 'center',
  },
}));

/**
 * @summary AuthPage React component
 * @param {Object} props Component props
 * @return {React.Node} Rendered component instance
 */
function AuthPage(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}

AuthPage.propTypes = {
  children: PropTypes.node,
};

export default AuthPage;
