import React , { Component } from "react";
import Card from './Card';
import course1img from './images/c1.jpg'
import course2img from './images/c2.jpg'
import course3img from './images/c3.jpg'
import course4img from './images/c4.jpg'
import course5img from './images/c5.jpg'

class Cards extends Component{
    render(){
        return(



            <div className="container">
                

            <div className="selectionInnerContainer">

                <h3>Expand your career opportunities with Python</h3>
                <p>Take one of Udemy’s range of Python courses and learn
                    how to code using this incredibly useful language. 
                    Its simple syntax and readability makes Python perfect
                    for Flask, Django, data science, and machine learning.
                    You’ll learn how to build everything from games to sites
                    to apps. Choose from a range of courses that will appeal to ...</p>
                    
                <button type="button">Explore Python</button>

                
                <div className="cardContainer">
                <Card price="$84.99" stars="4.3" instructor="Avinash Jain" img ={course1img}  title="Python from zero to hero" />

                <Card price="$19.99" stars="4.3" instructor="Jose Portilla" img = {course2img} title="Python from zero to hero "/>
                
                <Card price="$19.99" stars="4.3" instructor="Bryson Payne" img ={course3img} title="Python from zero to hero "/>

                <Card price="$19.99" stars="4.3" instructor="Admas Kinfu" img ={course4img} title="Python from zero to hero "/>

                <Card price="$84.99" stars="4.3" instructor="Edwin Diaz" img ={course5img} title="Python from zero to hero "/>
                </div>

            </div>


                
            </div>




        );
    }



}


export default Cards