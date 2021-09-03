import React from 'react'
import styled from 'styled-components'

const colors = {
  'dark': {
    text: '#f0f0f0',
    bg: '#303030'
  },
  'light': {
    text: '#303030',
    bg: '#f0f0f0',
  },
}

export type Props = {
  buttonText: string;
  linkTo: string;
  colorTheme: keyof typeof colors;
  border?: boolean;
  className?: string;
}

const Link = styled.a`
  text-decoration: none;
`

const component: React.VFC<Props> = (props) => {
  return (
    <Link href={props.linkTo} className={props.className} target="_blank" rel="noreferrer noopener">
      {props.buttonText}
    </Link>
  )
}

const styledComponent = styled(component) <Props>`
  height: 30px;
  padding: .5rem;
  color: ${props => colors[props.colorTheme].text};
  background-color: ${props => colors[props.colorTheme].bg};
  border: ${props => props.border && `1px ${colors[props.colorTheme].text} solid`};
`

export default styledComponent
