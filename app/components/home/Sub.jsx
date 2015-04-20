import { React, View, BackButton } from 'reapp-kit';
import moment from 'moment';

export default class extends React.Component {
  componentWillMount() {
    this.setState({
      date: moment()
    })
    console.log('ran cwm')
  }
  // getInitialState() {
  //   return { date: new Date() }
  // }

  /*
   * returns array of wake up times
   */
  times(time) {
    var result = []
    for (var i=0; i < 6; i++) {
      var timeOption = time.add(90, 'minutes')
      result.push(
        <div>
          { timeOption.format('h:mma') }
        </div>
      )
    }
    return result
  }

  render() {
    const backButton =
      <BackButton onTap={() => window.history.back()} />
    var currentDate = this.state.date
    var times = this.times(currentDate)
    console.log('current time', currentDate.format('h:mma'))
    var timeString = currentDate.format('h:mma')

    return (
      <View {...this.props} title="Times" titleLeft={backButton}>
        <p>The current time is { timeString }.</p>
        <p>You should wake up at ...</p>
        { times }
      </View>
    );
  }
}
