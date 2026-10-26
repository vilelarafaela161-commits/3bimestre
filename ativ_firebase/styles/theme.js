import { StyleSheet } from 'react-native';
export const colors = { pink:'#ff5f9e', lightPink:'#ffd7e6', cream:'#fff9f2', red:'#e53950', blue:'#7ec8e3', purple:'#a78bfa', text:'#5b3650', white:'#ffffff' };
export default StyleSheet.create({
 page:{flex:1,backgroundColor:colors.cream,padding:24,justifyContent:'center'},
 scroll:{flexGrow:1,backgroundColor:colors.cream,padding:24,justifyContent:'center'},
 card:{backgroundColor:colors.white,borderRadius:28,padding:22,borderWidth:3,borderColor:colors.lightPink,elevation:4},
 logo:{fontSize:52,textAlign:'center',marginBottom:4},
 title:{fontSize:29,fontWeight:'900',color:colors.red,textAlign:'center',marginBottom:6},
 subtitle:{color:colors.text,textAlign:'center',marginBottom:20,fontSize:15},
 label:{color:colors.text,fontWeight:'800',marginTop:10,marginBottom:5},
 input:{borderWidth:2,borderColor:colors.lightPink,backgroundColor:'#fffafd',borderRadius:16,padding:13,color:colors.text},
 button:{backgroundColor:colors.pink,borderRadius:18,padding:14,alignItems:'center',marginTop:14},
 buttonBlue:{backgroundColor:colors.blue,borderRadius:18,padding:14,alignItems:'center',marginTop:10},
 buttonPurple:{backgroundColor:colors.purple,borderRadius:18,padding:14,alignItems:'center',marginTop:10},
 buttonText:{color:colors.white,fontWeight:'900',fontSize:16},link:{textAlign:'center',color:colors.red,fontWeight:'800',marginTop:18},
 info:{backgroundColor:'#fff0f6',borderRadius:18,padding:16,marginVertical:8},infoTitle:{color:colors.red,fontWeight:'900',fontSize:18},infoText:{color:colors.text,marginTop:5,lineHeight:21}
});
