import { React, View, BackButton } from 'reapp-kit';
import moment from 'moment';
import Color from 'color';

export default class extends React.Component {
  componentWillMount() {
    this.setState({
      date: Date.now(),
      baseColor: Color('#C7B2EC')
    })
    console.log('ran cwm')
  }
  // getInitialState() {
  //   return { date: new Date() }
  // }

  /*
   * returns array of wake up times
   */
  times(time, color) {
    var result = []
    for (var i=0; i < 6; i++) {
      var timeOption = moment(time + (90 * 60 * 1000 * (i+1)))
      var colorTmp = color.clone()
      colorTmp.darken(0.1*i)
      result.push(
        <div style={{
          'height': '50px',
          'backgroundColor': colorTmp.hslString(),
          'color': 'white',
          'font-weight': 'bold',
          'padding': '10px 0 0 0'
        }} >
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
