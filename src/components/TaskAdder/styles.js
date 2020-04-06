import styled from 'styled-components/native'

import { colors } from 'theme'

const RootView = styled.KeyboardAvoidingView``

const NewTask = styled.View`
  align-items: center;
  background: #e6e8ee;
  bottom: 0;
  flex-direction: row;
  left: 0;
  padding: 20px 28px;
  position: absolute;
  right: 0;
`

const NewTaskInput = styled.TextInput`
  color: ${colors.text};
  font-family: 'RobotoMono-Medium';
  font-size: 16px;
`

const Checkbox = styled.TouchableOpacity`
  align-content: center;
  align-items: center;
  background: ${({ completed, color }) => (completed ? color : colors.border)};
  border-radius: 12px;
  height: 24px;
  justify-content: center;
  margin-right: 12px;
  width: 24px;
`

export { RootView, NewTask, Checkbox, NewTaskInput }
