import React from 'react'
import { Text, View,
  TouchableHighlight, ScrollView,
  StatusBar, ActivityIndicator, Dimensions,
  Platform, Image } from 'react-native'


import { color } from 'react-native-material-design-styles'
import style from './Style'


// utils
import { domainUrl } from './utils'
import moment from 'moment'

// ComponentsmarginTop:
const Card = ({ children }) => <View style={style.card}>{children}</View>

const cursorStyle = Platform.OS === 'web' ? {cursor: 'pointer'} : {}

const Overlay = ({children, visible}) => (
  (visible) ? (
    <View style={{position: 'absolute', marginTop: (Platform.OS === 'ios') ? 48 : 28, zIndex: 1}}>
      <Text style={{fontSize: 28, marginLeft: Dimensions.get('window').width * 0.9, backgroundColor: 'rgba(52,52,52, 0.0)', color: 'white', zIndex: 3}}>⏏</Text>
      <View style={{padding: 10, marginTop: -17, width: Dimensions.get('window').width, height: 400, backgroundColor: 'rgba(255,255,255,80)'}}>
      {children}
      </View>
    </View>
    ) : <View />
)

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.scrollToTop = this.scrollToTop.bind(this)
  }

  scrollToTop () {
    this.refs._scrollView.scrollTo({x: 0, y: 0, animated: true})
  }

  render () {
    const { items, errors, loading, filter, overlayVisible, onLoadMore, onLoadItems, onOpenUrl, onToggleOverlay } = this.props

    return (
      <Card>
        {Platform.OS === 'android' ? (
          <StatusBar backgroundColor={'#d25500'} />
        ) : <View />}
        <View style={style.body}>



          <View style={[style.column, style.header,
            Platform.OS === 'ios' ? { height: 75, paddingTop: 20 } : {} ]}>
            <View style={[style.row, { height: 50 }]}>
              <View style={style.row}>
                <Text style={[{fontWeight: 'bold', paddingLeft: 4}]}>Home Search</Text>
              </View>
              <TouchableHighlight
                style={[style.button, filter === 'Top' ? style.buttonOrange : null]}
                underlayColor={color.paperOrange200.color}
                onPress={() => { onLoadItems('Top'); this.scrollToTop() }}>
                <View style={style.row}>
                  <Text style={{color: 'white', fontWeight: 'bold', paddingRight: 5}}>Top</Text>{ filter === 'Top' && loading ? <ActivityIndicator /> : null}
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                style={[style.button, filter === 'Latest' ? style.buttonOrange : null]}
                underlayColor={color.paperOrange200.color}
                onPress={() => { onLoadItems('Latest'); this.scrollToTop() }}>
                <View style={style.row}>
                  <Text style={{color: 'white', fontWeight: 'bold', paddingRight: 5}}>Latest</Text>{ filter === 'Latest' && loading ? <ActivityIndicator /> : null}
                </View>
              </TouchableHighlight>
            </View>
            { Object.keys(errors).length > 0 ? (
              <View style={[style.row, {flex: 1, backgroundColor: 'red'}]}>
                { Object.keys(errors).map((error, i) => (
                  <Text key={i}>. {errors[error].message}</Text>
                )
                )}
              </View>
            ) : null}

          </View>

          <View style={style.scrollViewContainer}>
            <ScrollView
              ref='_scrollView'
              className='scrollView'
              contentContainerStyle={style.scrollViewContentContainerStyle}
              scrollEventThrottle={1} // 1 event per second
              style={style.scrollViewStyle}
            >
              {items.map((item, i) => (
                <View key={i}>
                  <View style={style.itemRow}>
                    <Text style={{flex: 1}}>
                      <Text
                        style={[{fontWeight: 'bold', fontSize: 18}, cursorStyle]}
                        onPress={() => onOpenUrl(item.url || `https://news.ycombinator.com/item?id=${item.objectID}`)}>{i + 1}. {item.title}</Text>
                      <Text style={[{flex: 1, color: '#979797'}, cursorStyle]}> {item.url && domainUrl(item.url)}</Text>
                    </Text>
                  </View>
                  <View style={style.itemSubRow}>
                    <Text style={{padding: 2}}>{item.points} points </Text>
                    <Text style={{padding: 2}}> by {item.author}</Text>
                    <Text style={{padding: 2}}>| {item.num_comments} c. |</Text>
                    <Text
                      onPress={() => onOpenUrl(`https://news.ycombinator.com/item?id=${item.objectID}`)}
                      style={[{padding: 2, flex: 1, textDecorationLine: 'underline'}, cursorStyle]}> { moment(item.created_at).fromNow() }</Text>
                  </View>
                </View>

              ))}
              <View style={[style.itemRow, style.buttonRow]}>
                <TouchableHighlight
                  style={[style.button, style.buttonGray]}
                  underlayColor={color.paperOrange200.color}
                  onPress={() => onLoadMore()}>
                  <View style={[style.row, {height: 20}]}>
                    <Text
                      style={{fontWeight: 'bold', fontSize: 16, color: color.paperGrey500.color}}>
                      { loading ? null : 'Load more'}
                    </Text>
                    { loading ? <ActivityIndicator /> : null}
                  </View>
                </TouchableHighlight>
              </View>
            </ScrollView>
          </View>

        </View>
      </Card>
    )
  }
}
