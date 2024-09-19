import {MultiChatSocket,MultiChatWindow,useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage=(props)=>{
  const chatProps=useMultiChatLogic('5727b5f2-5e32-4f93-ad28-b2f5c746164b',props.user.username,props.user.secret);

  return (<div style={{height: '100vh'}}>
    <MultiChatSocket {...chatProps}/>
    <MultiChatWindow {...chatProps} style={{height:'100%'}}/>
  </div>)
}
export default ChatsPage