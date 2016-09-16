import { StyleSheet } from 'react-native'
import { color } from 'react-native-material-design-styles'

export default StyleSheet.create({
  aboutLink: {
    color: color.paperOrange600.color,
    fontWeight: 'bold',
    padding: 10
  },
  card: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontWeight: 'bold'
  },
  image: {
    height: 40,
    marginVertical: 10,
    width: 40
  },
  header: {
    backgroundColor: color.paperDeepOrange500.color
  },
  body: {
    flex: 1,
    backgroundColor: color.paperDeepOrange500.color
  },
  row: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  buttonRow: {
    justifyContent: 'center',
    paddingBottom: 10
  },
  itemRow: {
    flexDirection: 'row',
    paddingTop: 10,
    padding: 2,
    backgroundColor: 'rgb(255,255,255)',
    alignItems: 'flex-start',
    flexWrap: 'wrap'
  },
  itemSubRow: {
    backgroundColor: 'rgb(223,223,223)',
    justifyContent: 'space-around',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#eee'
  },
  column: {
    flexDirection: 'column'
  },
  box: {
    alignItems: 'center',
    borderWidth: 1
  },
  scrollViewContainer: {
    flex: 1
  },
  scrollViewContentContainerStyle: {
    paddingTop: 2,
    paddingBottom: 2
  },
  button: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 20
  },
  buttonOrange: {
    backgroundColor: color.paperDeepOrange500.color
  },
  buttonGray: {
    borderWidth: 0,
    backgroundColor: '#eee'
  }
})
