import { React, View, BackButton, Button } from 'reapp-kit';

export default class extends React.Component {

  render() {
    const backButton =
      <BackButton onTap={() => window.history.back()} />

    return (
      <View {...this.props} title="Credits" titleLeft={backButton} style={{ 'textAlign': 'center' }} >
        <h1>R3DM</h1>
      </View>
    );
  }
}
