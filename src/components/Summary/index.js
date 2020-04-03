import React from 'react'
import { size, filter, eq } from 'lodash/fp'
import { connect } from 'react-redux'

import { calcPercentage } from 'utils'
import { navigate } from 'routes/actions'
import Pie from 'components/Pie'

import { Summary, NameAndInfo, Name, Untitled, Info } from './styles'

const getInfo = ({ percentage, tasks }) => {
  if (tasks === 0) {
    return 'No tasks'
  }

  if (percentage === '0') {
    return 'Not started yet'
  }

  if (percentage === 100) {
    return 'Completed \ud83c\udf89'
  }

  return `${percentage}% Completed`
}

function SummaryComponent({ id, name, color, tasksById }) {
  const listTasks = filter(({ listId }) => eq(id)(listId))(tasksById)
  const completed = filter('completed')(listTasks)

  const percentage = calcPercentage(size(completed), size(listTasks))
  const info = getInfo({ percentage, tasks: size(listTasks) })

  const openList = () => navigate('list', { id })

  return (
    <Summary activeOpacity={0.75} onPress={openList}>
      <Pie percentage={percentage} color={color} />
      <NameAndInfo>
        {eq('')(name) ? <Untitled>Untitled</Untitled> : <Name>{name}</Name>}
        <Info>{info}</Info>
      </NameAndInfo>
    </Summary>
  )
}

const mapStateToProps = ({ tasksById }) => ({ tasksById })

export default connect(mapStateToProps)(SummaryComponent)
