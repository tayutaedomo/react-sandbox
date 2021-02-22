import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    console.log(this.props.interval);
    this.timerId = setInterval(() => this.tick(), this.props.interval);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <FormattedDate
            date={this.state.date}
            interval={this.props.interval}
          />
        </Container>
      </div>
    );
  }
}

function FormattedDate(props) {
  return (
    <h2>
      It is {props.date.toLocaleTimeString()}. (Interval:{props.interval})
    </h2>
  );
}

export default withStyles(useStyles)(Clock);
