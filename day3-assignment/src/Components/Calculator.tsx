import React,{useState} from 'react'
import Title from './Title'
import Displayscr from './Displayscr';
import Buttons from './Buttons';
import './Calculator.css';
function Calculator(){
     let [EnteredOperation,setEnteredOperation]=useState('');
     let [Answer,setAnswer]=useState('');
     const Buttonclick=(event:any)=>{
        const val=event.target.value;
        //console.log('aravind');
        setEnteredOperation(event.target.value);
        switch (val){
            case '=':{
                var ans='';
                if(EnteredOperation!==''){
                    try{
                        ans=eval(EnteredOperation);

                    }
                    catch(err){
                        setAnswer(`error`);
                    }
                    if(ans===undefined)
                        setAnswer("error")
                    else{
                        setAnswer(ans);
                        setEnteredOperation('');
                    }

                }
                break;
            }
            case "clear":{
                setEnteredOperation('');
                setAnswer('');
                break;
            }
            case "delete":{
                let str=EnteredOperation;
                str=str.substr(0,str.length-1);
                setEnteredOperation(str);
                break;
            }
            default:{
                EnteredOperation=EnteredOperation+val;
                setEnteredOperation(EnteredOperation)
            }

        }

     }
    return(
        <div>
            <Title  value="Aravind-Calculator"></Title>
            <div className="maindiv">
                <Displayscr  value1={EnteredOperation} value2={Answer}/>
                <div>
                    <Buttons label={'1'} fun={Buttonclick}/>
                    <Buttons label={'2'} fun={Buttonclick}/>
                    <Buttons label={'3'} fun={Buttonclick}/>
                    <Buttons label={'+'} fun={Buttonclick}/>
                </div>
                <div>
                    <Buttons label={'4'} fun={Buttonclick}/>
                    <Buttons label={'5'} fun={Buttonclick}/>
                    <Buttons label={'6'} fun={Buttonclick}/>
                    <Buttons label={'-'} fun={Buttonclick}/>
                </div>
                <div>
                    <Buttons label={'7'} fun={Buttonclick}/>
                    <Buttons label={'8'} fun={Buttonclick}/>
                    <Buttons label={'9'} fun={Buttonclick}/>
                    <Buttons label={'/'} fun={Buttonclick}/>
                </div>
                <div>
                    <Buttons label={'0'} fun={Buttonclick}/>
                    <Buttons label={'='} fun={Buttonclick}/>
                    <Buttons label={'clear'} fun={Buttonclick}/>
                    <Buttons label={'delete'} fun={Buttonclick}/>
                </div>



            </div>
                


        </div>
    );

}
export default Calculator;