import React from 'react'
import ButtonList from 'src/components/molecules/ButtonList'
import styled from 'styled-components'

type Props = {
  pageName: string;
  className?: string;
}

const component: React.VFC<Props> = (props) => {
  return (
    <div className={props.className}>
      <h1>{props.pageName}</h1>
      <ButtonList />
    </div>
  )
}

const styledComponent = styled(component)``

export default styledComponent
