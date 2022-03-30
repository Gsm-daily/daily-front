import styled from 'styled-components';

const JoinCss = styled.div`


body {
    background-color:#f9f6fa;
  }

  
#JoinBox {
    z-index: 3;
    position: absolute;
    left: 50%;
    top: 50%;
     transform: translate(-50%,-50%);
      width: 30vw;
      height: 75vh;
      background-color: rgba(255, 255, 255, 0.694);
      border-radius: 10px;
      box-shadow: rgba(0, 0, 0, 0.17) 0px 5px 15px;
    }
    #Logo {
        text-align: center;
        padding: 3vh 0 ;
        background-color: rgba(255, 255, 255, 0);
    }
    
    #JoinBoxForm {
    background-color: transparent;
    margin: 2vw 8vh 0vw 8vh;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items:baseline;
    align-content: center;
}

#JoinBoxForm > .InputBox {
    width: 100%;
    margin-top: 5vh;
    background-color: transparent;
    position: relative;
}

#JoinBoxForm > .InputBox > * {
    background-color: white;
}

#JoinBoxForm > .InputBox > input {
    width: 100%;
    height: 5.5vh;
    border: none;
    border-bottom:2px solid #FFD0D0;
    cursor: text;
    font-size:1vw;
    transition: all .4s ease;

} 

#JoinBoxForm > .InputBox > input::placeholder {
    color: transparent;
}

#JoinBoxForm > .InputBox > input:focus::placeholder {
    color: #C4C4C4;
    font-size: 1vw;
}

#JoinBoxForm > .InputBox > input:focus {
    font-size: 1.5vw;
    outline: none;
    transition: all .4s ease;
}

#JoinBoxForm > .InputBox > label {
    font-size: 1.3vw;
    position: absolute;
    top: 0.2vw;
    left:0vw;
    background-color: transparent;
    transition: all .4s ease;
}

#JoinBoxForm > .InputBox > input:focus + label,
#JoinBoxForm > .InputBox > input:not(:placeholder-shown) + label {
    font-size: 1vw;
    position: absolute;
    top: -1.7vw;
    left:0vw;
    background-color: transparent;
}


#JoinBoxForm > button {
    width:100%;
    height: 8vh;
    border-radius: 50px;
    font-size: 20px;
    font-weight:700;
    border: none;
    background-color: #FFD0D0;
    margin-top: 10vh;
    position: relative;
    cursor: pointer;
}


#SignUp {
    width: 100%;
    background-color: transparent;
    display: flex;
    gap: 1vw;
    justify-content: center;
    margin-top: 0.8vh;
}

#SignUp > * {
    background-color: transparent;
    font-size: 1vw;
}

#SignUp > p {
    margin:  0 0 0 0;
    background-color: transparent;
}

#Splash {
    width:100%;
    height: 99.5vh;
    display: inline-block;
 
}

#Splash > img {
    display: inline-block;
    position: absolute;
    left: 50%;
    top: 50%;
     transform: translate(-50%,-50%);

}
.flasg{ animation: 0.6s ease-in-out loadEffect1; }
#WaveEffect{ animation: 3.5s ease-in-out loadEffect1; }
#JoinBox{ animation:test 2.2s;}

@keyframes loadEffect1 {
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}


@keyframes test{

0%{top:-300px;}
100%{top:373px;}

}


.Links {
    cursor: pointer;
}

.Links:not(:focus) {
    text-decoration: none;
}
.Links:hover {
    text-decoration: underline;
    text-underline-position: under;
}

#ForGotIdL {
    color: #1B7DC5; 
    border: none; 
    background-color: transparent;
    font-size: 1vw; 
    margin-top: 0.4vh;
}

#SignUpL {
    color: #FE769B;
}
`

export default JoinCss