import { React, View, BackButton } from 'reapp-kit';
import moment from 'moment';

export default class extends React.Component {
  componentWillMount() {
    this.setState({
      date: Date.now()
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
      var timeOption = moment(time + (90 * 60 * 1000 * (i+1)))
      result.push(
        <div style={{ 'height': '50px' }} >
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
    var currentMoment = moment(currentDate)
    var times = this.times(currentDate)
    console.log('current time', currentMoment.format('h:mma'))
    var timeString = currentMoment.format('h:mma')

    return (
      <View {...this.props} title="Times" titleLeft={backButton}>
        <p>The current time is { timeString }.</p>
        <p>You should wake up at ...</p>
        <div style={{ 'text-align': 'center' }} >
          { times }
        </div>
      </View>
    );
  }
}
