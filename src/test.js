import React, { Component } from 'react';
import withRouter from './withrouter';
import axios from 'axios';
import Clock from './clock';
import Radio from './radio';
import './style.css'
import ScaleLoader from "react-spinners/ScaleLoader";

class Test extends Component {    
    constructor(props){
        super(props);
        this.state = {
            qt : [],
            index : 0,
            options : [],
            answer : [],
            correct :[],
            loading: true // Add loading state
         }
        this.Prev = this.Prev.bind(this);
     }

     shuffleArray(array) { 
        return array.sort( ()=>Math.random()-0.5 );
     } 
    returnQuest(index){
        if(this.state.qt.index !== 0){
            return this.state.qt[index];
        }
    }
    Next(){
        if(this.state.index < 9){
            this.setState({qt:this.state.qt,index:this.state.index+1});
        }
    }
    Prev(){
        if(this.state.index > 0){
            this.setState({qt:this.state.qt,index:this.state.index-1});
        }
    }
    oncall(index){
        this.setState({qt:this.state.qt,index:index});
    }
    returnOptions(){        
        if(this.state.qt.length !==0){
            return this.state.options[this.state.index].map((item)=>{
                return <div><h4 className='mb-3'><Radio  index={this.state.index} handleCLick={this.handleClick.bind(this)} checked={this.state.correct[this.state.index] === item} name={item}/></h4></div>
            })
        }         
    }

    shouldDisplayPrev(){
        if(this.state.index !== 0){
            return <button onClick={this.Prev} type="button" style={{float:'left'}} class="btn btn-outline-info">Prev</button>            
        }
    }

    shouldDisplayNext(){
        if(this.state.index === this.state.qt.length-1){
            return <button onClick={this.submit.bind(this)} type="button" style={{float:'right'}} class="btn btn-success">Submit</button>
        }else{
            return <button onClick={this.Next.bind(this)} type="button" style={{float:'right'}} class="btn btn-outline-info">Next</button>
        }
    }
    submit(){
        let marks = this.evaluate();
        console.log(marks);
        this.props.navigate('/submit',{state : {marks:marks}});        
    }
    onTimecomplete(){
        let marks = this.evaluate();
        console.log(marks);
        this.props.navigate('/submit',{state : {marks:marks}});
    }

    handleClick(questionIndex,name){
        let updateCorrect = this.state.correct.map(function(item,index){
            if(index === questionIndex){
                return name;
            }else{
                return item;
            }
        }
        )
        console.log(updateCorrect);
        this.setState({correct:updateCorrect});
    }

    evaluate(){
        let marks = 0;
        for(let i=0;i<=9;i++){
            if(this.state.correct[i] !== ""){
                if(this.state.correct[i] === this.state.answer[i]){
                    marks += 3
                }else{
                    marks -= 0.25;
                }
            }           
        }
        return marks;
    }

    componentDidMount(){

        let category = this.props.params.id;   
        axios
        .get('https://opentdb.com/api.php?amount=10&category=' + category)
        .then((response)=>{
            let questions = [];
            let options = [];
            let answer = [];
            let correct = [];
            for(let i=0;i<=9;i++){
                questions.push(response.data.results[i].question);
                answer.push(response.data.results[i].correct_answer);           
                let temp = [];
                correct.push("");
                response.data.results[i].incorrect_answers.map((option)=>{
                    temp.push(option);
                })
                temp.push(response.data.results[i].correct_answer);
                options.push(this.shuffleArray(temp));
            }
            let quest = response.data.results;
            this.setState({qt:questions,index:0,options:options,answer:answer,correct:correct, loading: false});  
            console.log(this.state.answer);    
        })
        .catch((error)=>{
            console.log(error);
            this.setState({ loading: false }); // Set loading to false in case of error
        })          
    }
    render() {      
        if (this.state.loading) {
            return <div className='conatiner mt-5'>
                <div className='row mt-5'>
                    <div className='col-12'>                                                    
                        <h1 style={{marginLeft:800,marginTop:200}}><ScaleLoader  color="#0DCAF0" size={100}/></h1>                                         
                    </div>
                </div>
            </div> // Render loader while loading
                
        }                
        return (

            
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-3'>
                        <h4>Questions</h4>
                        {
                            this.state.qt.map((item,index)=>{
                                if(index === this.state.index){
                                    return <button style={{margin:3,padding:15}} className='btn btn-info' onClick={()=> this.oncall(index)}>{index + 1}</button>
                                }else{
                                    return <button style={{margin:3,padding:15}} className='btn btn-outline-info' onClick={()=> this.oncall(index)}>{index + 1}</button>
                                }                                
                            })
                        }
                    </div>
                    <div className='col-6'>
                        <div style={{minHeight:400}}>
                            <h1 className='mb-4'>{this.state.index+1}. {this.returnQuest(this.state.index)}</h1>
                            {console.log(this.state.answer)}
                            {                                   
                                this.returnOptions(this.state.index)
                            }
                        </div>                        
                        <div className='mt-4'>
                            {this.shouldDisplayPrev()}
                            {this.shouldDisplayNext()}
                        </div>                        
                    </div>                    
                    <div className='col-3'>
                        <div className='card'>
                            <div className='card-body'>
                                {   
                                    <Clock sec={180} onTimecomplete={this.onTimecomplete.bind(this)}/>
                                }
                            </div>                            
                        </div>                            
                    </div>                           
                    <div className='col-3'></div>
                </div>
            </div>
        );
    }
}
 
export default withRouter(Test);