import React from 'react';
import './App.css';


export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            posMouseX: 0,
            posMouseY: 0
        }
    }
    componentDidMount = ()=>{
        window.addEventListener('mousemove', this.manipularMovimentoDoMouse);
    }
    componentWillUnmount = () => {
        window.addEventListener('mousemove', this.manipularMovimentoDoMouse);
    }
    manipularMovimentoDoMouse = (e) =>{
        let elemento_gato = document.getElementById('embrulho-criatividade')
        let posX = (e.clientX-(elemento_gato.clientWidth/2))
        let posY = (e.clientY-(elemento_gato.clientHeight/2))
        if (posY > 20){posY=20}
        else if (posY < -20){posY=-20}
        if (posX > 20){posX=20}
        else if (posX < -20){posX=-20}
        console.log(posX)
        this.setState({posMouseX:posX,posMouseY:posY})
    }
    render(){
        return(
              <div id='embrulho-criatividade' style={{minHeight:'100vh', background:'#1a273c'}} className=''>
                <div id='embrulho-gato' style={{position:'absolute'}} className='centro embrulho-gato'>
                    <div className='orelha-e'/>
                    <div className='orelha-d'/>
                    <div className='rosto'>
                        <div className='face-gato' style={{transition:'1s', transform:'translate3d('+this.state.posMouseX+'px,'+Number(this.state.posMouseY+30)+'px,0)'}}>
                            <div className='nariz'/>
                            <div className='olho-e'/>
                            <div className='olho-d'/>
                            <div className='focinho-e'/>
                            <div className='focinho-d'/>
                            <div style={{transform:'translate3d(55px,-30px,0) rotate(25deg)'}} className='bigode'/>
                            <div style={{transform:'translate3d(53px,-10px,0)'}} className='bigode'/>
                            <div style={{transform:'translate3d(55px,10px,0) rotate(-25deg)'}} className='bigode'/>
                            <div style={{transform:'translate3d(170px,-35px,0) rotate(-25deg)'}} className='bigode'/>
                            <div style={{transform:'translate3d(175px,-18px,0) rotate(0deg)'}} className='bigode'/>
                            <div style={{transform:'translate3d(170px,-0px,0) rotate(25deg)'}} className='bigode'/>
                        </div>
                    </div>   
                </div>
            </div>
        )
    }
}