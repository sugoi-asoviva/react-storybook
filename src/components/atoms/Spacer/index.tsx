import React from 'react'
import styled from 'styled-components'

type Props = {
  width?: string;
  height?: string;
  className?: string;
}

const component: React.VFC<Props> = (props) => {
  return (
    <span className={props.className} />
  )
}

const styledComponent = styled(component) <Props>`
  display: inline-block;
  width: ${props => props.width || '0'};
  height: ${props => props.height || '0'};
`

export default styledComponent
