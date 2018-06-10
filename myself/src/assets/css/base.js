import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'clearfix:after': {
    'display': 'block',
    'clear': 'both',
    'content': '""',
    'visibility': 'hidden',
    'height': [{ 'unit': 'px', 'value': 0 }]
  },
  'clearfix': {
    'zoom': '1'
  }
});
