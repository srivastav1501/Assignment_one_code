import './mainpage.css'
import React, { useEffect, useState } from "react";

const Mainpage = () => {
    const [top, setTop] = useState(0);
    const [bottom, setBottom] = useState(450);
    const [left, setLeft] = useState(0);
    const [right, setRight] = useState(450);


    const upFunction = (e) => {
        if (top !== 0) {
            document.querySelector('#down-btn').disabled = false;
            document.querySelector('.box').style.top = `${top - 50}px`;
            document.querySelector('.box').style.bottom = `${bottom + 50}px`;
            setTop(top - 50);
            setBottom(bottom + 50);
        } else {
            e.target.disabled = true;
            setBottom(450);
        }
    }


    const bottomFunction = (e) => {
        if (bottom !== 0) {
            document.querySelector('#top-btn').disabled = false;
            document.querySelector('.box').style.bottom = `${bottom - 50}px`;
            document.querySelector('.box').style.top = `${top + 50}px`;
            setTop(top + 50); setBottom(bottom - 50);
        } else {
            e.target.disabled = true;
            setTop(450);
        }

    }


    const leftFunction = (e) => {
        if (left !== 0) {
            document.querySelector('#right-btn').disabled = false;
            document.querySelector('.box').style.left = `${left - 50}px`;
            document.querySelector('.box').style.right = `${right + 50}px`;
            setLeft(left - 50);
            setRight(right + 50);
        } else {
            e.target.disabled = true;
            setRight(450);
        }
    }


    const rightHandeler = (e) => {
        if (right !== 0) {
            document.querySelector('#left-btn').disabled = false;
            document.querySelector('.box').style.right = `${right - 50}px`;
            document.querySelector('.box').style.left = `${left + 50}px`;
            setLeft(left + 50); setRight(right - 50);
        } else {
            e.target.disabled = true;
            setLeft(450);
        }

    }

    useEffect(() => {
        if (top === 0) {
            document.querySelector('#top-btn').disabled = true;
        } else if (bottom === 0) {
            document.querySelector('#down-btn').disabled = true;

        } else if (left === 0) {
            document.querySelector('#left-btn').disabled = true;

        } else if (right === 0) {
            document.querySelector('#right-btn').disabled = true;

        }
    }, [top, bottom, left, right])

    return (
        <div className='container'>
            <div className="mainpage">
                <div className="top" >
                    <button id='top-btn' onClick={upFunction}>Up</button>
                </div>

                <div className="middle">
                    <button id='left-btn' onClick={leftFunction}>Left</button>
                    <div className='field'>
                        <div className='box'>

                        </div>
                    </div>
                    <button onClick={rightHandeler} id='right-btn'>Right</button>
                </div>

                <div className="bottom">
                    <button id='down-btn' onClick={bottomFunction}>Down</button>
                </div>
            </div>
        </div>
    )
}

export default Mainpage;