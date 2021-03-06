import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

import colors from 'lib/colors';

const width = Dimensions.get('window').width;

const RootView = styled.ScrollView`
  border-radius: 8px;
  flex-direction: row;
  margin: 4px 16px;
`;

const DeleteButton = styled.TouchableOpacity`
  align-items: center;
  background: ${colors.delete};
  justify-content: center;
  padding: 2px 0 0 4px;
  width: 64px;
`;

const Task = styled.View`
  align-items: center;
  background: ${colors.background};
  flex-direction: row;
  padding: 12px 64px 12px 16px;
  font-weight: 700;
  width: ${width - 32}px;
`;

const NameWrapper = styled.View`
  padding-bottom: 4px;
`;

const Name = styled.TextInput`
  color: ${colors.text};
  font-family: 'Merriweather-Regular';
  font-size: 16px;
  opacity: ${({completed}) => (completed ? 0.5 : 1)};
  text-decoration: ${({completed}) => (completed ? 'line-through' : 'none')};
`;

const Checkbox = styled.TouchableOpacity`
  align-content: center;
  align-items: center;
  background: ${({completed, color}) =>
    completed ? color : colors.content_deep};
  border-radius: 12px;
  height: 24px;
  justify-content: center;
  margin-right: 14px;
  width: 24px;
`;

export {RootView, DeleteButton, Task, NameWrapper, Name, Checkbox};
