import React, { Component } from 'react';
import withRouter from './withrouter';
import toast from 'react-hot-toast';
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
            return (
                <div style={{display:'grid',gap:10,gridTemplateColumns:'1fr'}}>
                    {this.state.options[this.state.index].map((item)=>{
                        return (
                            <div key={item}>
                                <Radio  index={this.state.index} handleCLick={this.handleClick.bind(this)} checked={this.state.correct[this.state.index] === item} name={item}/>
                            </div>
                        )
                    })}
                </div>
            )
        }         
    }

    shouldDisplayPrev(){
        if(this.state.index !== 0){
            return <button onClick={this.Prev} type="button" style={{float:'left'}} className="btn-ghost">Prev</button>            
        }
    }

    shouldDisplayNext(){
        if(this.state.index === this.state.qt.length-1){
            return <button onClick={this.submit.bind(this)} type="button" style={{float:'right'}} className="btn-primary-modern">Submit</button>
        }else{
            return <button onClick={this.Next.bind(this)} type="button" style={{float:'right'}} className="btn-ghost">Next</button>
        }
    }
    submit(){
        let marks = this.evaluate();
        console.log(marks);
        this.props.navigate('/submit',{state : {marks:marks}});
        // show a small toast notifying of submission
        try{
            toast.success(`Submitted — score: ${marks}`);
        }catch(e){
            // ignore if toast not available in environment
        }
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
                response.data.results[i].incorrect_answers.forEach((option)=>{
                    temp.push(option);
                })
                temp.push(response.data.results[i].correct_answer);
                options.push(this.shuffleArray(temp));
            }
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
            return (
                <div className='container mt-5'>
                    <div style={{display:'flex',alignItems:'center',justifyContent:'center',minHeight:300}}>
                        <ScaleLoader  color="#0DCAF0" size={40}/>
                    </div>
                </div>
            ) // Render loader while loading
        }                
        return (

            
            <div className='container mt-5'>
                <div style={{display:'grid',gridTemplateColumns:'240px 1fr 300px',gap:20,alignItems:'start'}}>
                    <aside>
                        <div className='card'>
                            <h4 style={{margin:0,marginBottom:8}}>Questions</h4>
                            <div style={{display:'flex',flexWrap:'wrap',gap:8,marginTop:8}}>
                                {this.state.qt.map((item,index)=>{
                                    return (
                                        <button key={index} onClick={()=> this.oncall(index)} className={index===this.state.index? 'btn-primary-modern':'btn-ghost'} style={{padding:8,minWidth:44}}>{index + 1}</button>
                                    )
                                })}
                            </div>
                        </div>
                    </aside>

                    <section>
                        <div className='card'>
                            <div style={{minHeight:180}}>
                                <h2 style={{marginTop:0,fontSize:20}}>{this.state.index+1}. {this.returnQuest(this.state.index)}</h2>
                                <div style={{marginTop:12}}>
                                    {this.returnOptions(this.state.index)}
                                </div>
                            </div>
                            <div style={{display:'flex',justifyContent:'space-between',marginTop:12}}>
                                {this.shouldDisplayPrev()}
                                {this.shouldDisplayNext()}
                            </div>
                        </div>
                    </section>

                    <aside>
                        <div className='card'>
                            <h4 style={{margin:0}}>Timer</h4>
                            <div style={{marginTop:12}}>
                                <Clock sec={180} onTimecomplete={this.onTimecomplete.bind(this)}/>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        );
    }
}
 
export default withRouter(Test);