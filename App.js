import React,{useState,useEffect} from 'react';
import { View,Text,StyleSheet, TouchableOpacity, ScrollView, Alert,Linking } from 'react-native';

const App = () => {
  const [buttonText, setbuttonText] = useState('');
  const [Resultis, setResultis] = useState('');
  // const [temPo, settemPo] = useState('');
  
  // useEffect(() => {
  //   if(temPo!=='-' && temPo!=='*' && temPo!=='/' && temPo!=='+'){
  //     if(temPo==='√'){
  //       return setResultis(eval(Math.sqrt(buttonText).toFixed(5)));
  //     }else{
  //       setResultis(eval(buttonText));
  //     }
      
  //     //alert('dfd')
  //   }
    
  //   console.log(Resultis)
  // }, [Resultis,temPo]);

  function OnClickText(text){
    try{

      if(text=='del'){
        return setbuttonText(buttonText.slice(0, buttonText.length-1));
      }else if(text=='='){
        return setResultis(eval(buttonText));
      }else if(text=='√'){
        return setResultis(eval(Math.sqrt(buttonText).toFixed(5)));
      }
      else if(text=='ans'){
        return setbuttonText(Resultis);
      }
      else if(text=='ac'){
        setResultis('');
        return setbuttonText('');
      }
      else{
        setbuttonText(buttonText+text);
        // if(text!=='*'){
        //   setResultis(eval(buttonText))
        //   //alert('d')
        // }
      }
    }catch(err){
      return setResultis('ERROR');
    }
  }
  const createTwoButtonAlert = () =>
  Alert.alert(
    "What do you want?",
    "Version: 1.0.3",
    [
      {
        text: "Report Bug",
        onPress: () => Linking.openURL('mailto:shakisk23@gmail.com'),
        style: "cancel"
      },
      { text: "Open Setting", onPress: () => Linking.openSettings() },
      { text: "Cencel", onPress: () => console.log('Canceled') }

    ]
  );

 
  
  return (
    <View style={styles.mainBody}>
      
      <View style={{marginBottom:70}}>
        <Text onPress={()=>{createTwoButtonAlert()}} style={{...styles.textColor,fontSize:14,fontWeight:'bold',textAlign:'center',padding:5}}>OPTIONS</Text>
      </View>
        
      {/* Result Div */}
      <View style={{padding:5}}>
        <ScrollView horizontal={true} style={styles.resultDiv}>
          <Text style={{...styles.textColor,fontSize:50,fontWeight:'bold',textAlign:'right',height:70}}>{buttonText}</Text>
        </ScrollView>
      </View>
      {/* Calculation Div */}
      <View style={{padding:5}}>
        <ScrollView style={styles.calcDiv}>
          <Text style={{...styles.textColor,fontSize:35,textAlign:'right',marginTop:10}}>{Resultis}</Text>
        </ScrollView>
      </View>
      <View style={styles.ButnContainer}>
        {/* Button Box 1*/}
        <View style={styles.ButnRows}>
          <TouchableOpacity onPress={()=>{OnClickText('ac')}} style={styles.buttonDiv}>
            <Text style={{...styles.btnColorStyle,color:'rgb(0, 157, 242)'}}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{OnClickText('√')}} style={styles.buttonDiv}>
            <Text style={{...styles.btnColorStyle,color:'rgb(0, 157, 242)'}}>√</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{OnClickText('%')}} style={styles.buttonDiv}>
            <Text style={{...styles.btnColorStyle,color:'rgb(0, 157, 242)'}}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{OnClickText('/')}} style={styles.buttonDiv}>
            <Text style={{...styles.btnColorStyle,color:'rgb(0, 157, 242)'}}>÷</Text>
          </TouchableOpacity>
        </View>
        {/* Button Box 2*/}
        <View style={styles.ButnRows}>
          <TouchableOpacity onPress={()=>{OnClickText('7')}} style={styles.buttonDiv}>
            <Text style={styles.btnColorStyle}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{OnClickText('8')}} style={styles.buttonDiv}>
            <Text style={styles.btnColorStyle}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{OnClickText('9')}} style={styles.buttonDiv}>
            <Text style={styles.btnColorStyle}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{OnClickText('*')}} style={styles.buttonDiv}>
            <Text style={{...styles.btnColorStyle,color:'rgb(0, 157, 242)'}}>×</Text>
          </TouchableOpacity>
        </View>
        {/* Button Box 3*/}
        <View style={styles.ButnRows}>
          <TouchableOpacity onPress={()=>{OnClickText('4')}} style={styles.buttonDiv}>
            <Text style={styles.btnColorStyle}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{OnClickText('5')}} style={styles.buttonDiv}>
            <Text style={styles.btnColorStyle}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{OnClickText('6')}} style={styles.buttonDiv}>
            <Text style={styles.btnColorStyle}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{OnClickText('-')}} style={styles.buttonDiv}>
            <Text style={{...styles.btnColorStyle,color:'rgb(0, 157, 242)'}}>-</Text>
          </TouchableOpacity>
        </View>
        {/* Button Box 4*/}
        <View style={styles.ButnRows}>
          <TouchableOpacity onPress={()=>{OnClickText('1')}} style={styles.buttonDiv}>
            <Text style={styles.btnColorStyle}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{OnClickText('2')}} style={styles.buttonDiv}>
            <Text style={styles.btnColorStyle}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{OnClickText('3')}} style={styles.buttonDiv}>
            <Text style={styles.btnColorStyle}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{OnClickText('+')}} style={styles.buttonDiv}>
            <Text style={{...styles.btnColorStyle,color:'rgb(0, 157, 242)'}}>+</Text>
          </TouchableOpacity>
        </View>
        {/* Button Box row 5*/}
        <View style={{...styles.ButnRows,backgroundColor:'rgb(2, 11, 16)'}}>
          <TouchableOpacity onPress={()=>{OnClickText('del')}} style={styles.buttonDiv}>
            <Text style={{...styles.btnColorStyle,color:'red',fontSize:18}}>DEL</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{OnClickText(0)}} style={styles.buttonDiv}>
            <Text style={styles.btnColorStyle}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{OnClickText('.')}} style={styles.buttonDiv}>
            <Text style={styles.btnColorStyle}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{OnClickText('ans')}} style={styles.buttonDiv}>
            <Text style={styles.btnColorStyle}>Ans</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{OnClickText('=')}} style={styles.buttonDiv}>
            <Text style={{...styles.btnColorStyle,color:'rgb(0, 157, 242)'}}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainBody:{
    height:'100%',
    backgroundColor:'rgb(1, 22, 35)',
   
  },
  textColor:{
    color:'white'
  },
  calcDiv:{
    marginBottom:20,
    paddingLeft:0,
    paddingRight:0,
    width:'99%',
  },
  resultDiv:{
    paddingLeft:0,
    paddingRight:0,
    width:'99%',
    
  },
  buttonDiv:{
    backgroundColor:'rgb(2, 11, 16)',
    padding:8,
    height:70,
    width:75,
    borderRadius:20,
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  btnColorStyle:{
    color:'white',
    fontSize:29,
    fontWeight:'bold',

  },
  ButnRows:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:20,
  },
  ButnContainer:{
    backgroundColor:'rgba(0,0,0,0.9)',
    position:'absolute',
    bottom:0,
    left:0,
    width:'100%',
    padding:15,
    borderTopLeftRadius:20,
    borderTopRightRadius:20
  }

});

export default App;
