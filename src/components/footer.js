import React from 'react'

import './styles/footer.css'
export default class Example extends React.Component {
    render() {
        const elements = [
            {
                href: 'https://github.com/YuliaMeoow',
                className: 'fa fa-github'
            },
            {
                href: 'https://vk.com/id18064315',
                className: 'fa fa-vk'
            },
            {
                href: 'https://www.instagram.com/iuliiameow/',
                className: 'fa fa-instagram'
            }
        ];
        return (
          <footer>
            {elements.map(({ href, className }, index) => {
              return <a key={index} href={href} target='blank'>
                        <i className={className}></i>
                    </a>
            })}
          </footer>
        )
    }
}