import { Reapp, React, NestedViewList, View, Button } from 'reapp-kit';

class Home extends React.Component {
  render() {
    return (
      <NestedViewList {...this.props.viewListProps}>
        <View title="alarmClock">

          <Button onTap={() => this.router().transitionTo('sub')}>
            When should I sleep?
          </Button>
        </View>

        {this.props.child()}
      </NestedViewList>
    );
  }
}

export default Reapp(Home);

/*
 This is your root route. When you wrap it with Reapp()
 it passes your class two properties:

  - viewListProps: Passes the scrollToStep to your ViewList so it animates
  - child: The child route
*/
