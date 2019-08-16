import React from 'react'
import vis from 'visjs-network'

import './styles/skills.css'
// icons
import html5Icon  from './images/icons/html5.png'
import css3Icon  from './images/icons/css3.png'
import jsIcon  from './images/icons/js.png'
import gitIcon  from './images/icons/git.png'
import bootstrapIcon  from './images/icons/bootstrap.png'
import sqlIcon  from './images/icons/sql.png'
import visIcon from './images/icons/vis.png'
import adobeIcon  from './images/icons/adobe.png'
import reactIcon  from './images/icons/react.png'


export default class Example extends React.Component {
    render() { 
        return(
            <div className='skills' href='/skills/'>
                <h2>Мои навыки</h2>
                    <div id="mynetwork"></div>
            </div>
        )
    }
    componentDidMount(){
        const nodes = [
            {id: 1, shape: 'circularImage', image: html5Icon , title: 'Люблю верстать'},
            {id: 2, shape: 'circularImage', image: css3Icon , title: 'Очень люблю верстать.'},
            {id: 3, shape: 'circularImage', image: jsIcon , title: 'Начинающий javaScript ниндзя'},
            {id: 4, shape: 'circularImage', image: gitIcon , title: 'Знаю основы и простейшие команды'},
            {id: 5, shape: 'circularImage', image: bootstrapIcon , title: 'Для сайта использовала реализацию Bootstrap 4 Для React'},
            {id: 6, shape: 'circularImage', image: sqlIcon , title: 'Здесь не применялся, знаю на уровне простых запросов'},
            {id: 7, shape: 'circularImage', image: visIcon , title: 'С помощью этой библиотеки отрисовывались графы'},
            {id: 8, shape: 'circularImage', image: adobeIcon , title: 'Иногда развлекаюсь с рисованием логотипов, разработала себе логотип MEOW'},
            {id: 9, shape: 'circularImage', image: reactIcon , title: 'Мой сайт создавался на reactsrap'}
        ];
        const edges = [
            {from: 1, to: 3},
            {from: 1, to: 2},
            {from: 3, to: 4},
            {from: 2, to: 5},
            {from: 5, to: 6},
            {from: 6, to: 7},
            {from: 7, to: 8},
            {from: 8, to: 9}
        ];
        const container = document.getElementById('mynetwork');
        const data = { nodes, edges };
        const options = {  
            nodes: {  
                borderWidth: 0,
                size: 60, 
                color: {border: '#222222'},
                font: {color:'#2c2c2c', face: 'Abel', size: 25},
                shadow: {enabled: true, color: "#696969", size: 20}
            },
            edges: {
                length: 300,
                selectionWidth: 1
            },
            physics: {
                maxVelocity: 160,
                timestep: 0.35,
                stabilization: { iterations: 150 },
            }
        }
        new vis.Network(container, data, options);
    }
    
}

   