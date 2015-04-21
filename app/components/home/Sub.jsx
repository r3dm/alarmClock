import { React, View, BackButton, Button } from 'reapp-kit';
import moment from 'moment';
import Color from 'color';

export default class extends React.Component {
  componentWillMount() {
    this.setState({
      date: Date.now(),
      baseColor: Color('#C7B2EC')
    })
  }

  setAlarm(event, time) {
    console.log('button clicked', event)
    var timeDate = new Date(time)
    console.log(timeDate.getHours())
    var successCallback = function() {
      console.log('success callback')
    }
    var errorCallback = function() {
      console.log('error callback')
    }
    if (window.wakeuptimer) {
      window.wakeuptimer.wakeup(
        successCallback,
        errorCallback,
        {
          alarms : [{
            type : 'onetime',
            time : { hour : moment(time).hour(), minute : moment(time).minutes() },
            extra : { message : 'json containing app-specific information to be posted when alarm triggers' },
            message : 'Alarm has expired!'
          }]
        }
      );
    }
  }
  onTap(time, event) {
    this.setAlarm(event, time)
  }

  /*
   * returns array of wake up times
   */
  times(time, color) {
    var result = []
    for (var i=0; i < 6; i++) {
      var newTime = time + (90 * 60 * 1000 * (i+1))
      var timeOption = moment(newTime)
      var colorTmp = color.clone()
      colorTmp.darken(0.1*i)
      result.push(
        <Button style={{
          'height': '50px',
          'color': 'white',
          'fontWeight': 'bold',
          'padding': '10px 0 0 0'
          }}
          color={ colorTmp.hslString() }
          onTap={ this.onTap.bind(this, newTime) } >
          { timeOption.format('h:mma') }
        </Button>
      )
    }
    return result
  }

  render() {
    const backButton =
      <BackButton onTap={() => window.history.back()} />
    var currentDate = this.state.date
    var baseColor = this.state.baseColor
    var currentMoment = moment(currentDate)
    var times = this.times(currentDate, baseColor)
    console.log('current time', currentMoment.format('h:mma'))
    var timeString = currentMoment.format('h:mma')

    return (
      <View {...this.props} title="Times" titleLeft={backButton} style={{ 'textAlign': 'center' }} >
        <p>Its { timeString }</p>
        <p>You should wake up at ...</p>
        <div>
          { times }
        </div>
      </View>
    );
  }
}
