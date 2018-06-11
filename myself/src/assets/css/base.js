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
  },
  'hr-20': {
    'margin': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': 'auto' }],
    'width': [{ 'unit': '%H', 'value': 0.97 }],
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }]
  }
});
