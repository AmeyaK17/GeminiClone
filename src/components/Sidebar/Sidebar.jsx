import React, { useContext, useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets.js'
import { Context } from '../../context/Context.jsx'

function Sidebar() {
  const [extended, setExtended] = useState(false)
  const {onSent, previousPrompts, setRecentPrompt, newChat} = useContext(Context)

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt)
    await onSent(prompt)
  }

  return (
    <div className='sidebar'>
      <div className="top">
        <img onClick={() => setExtended(prev => !prev)} className='menu' src={assets.menu_icon} alt=''></img>
        <div onClick={() => newChat()} className="new-chat">
          <img src={assets.plus_icon} alt=''></img>
          {extended ? <p>New Chat</p> : null}
        </div>

        {extended ?
          <div className="recent">
            <p className="recent-title">Recent</p>
            {previousPrompts.map((item, index) => {
              return (
                <div onClick={() => loadPrompt(item)} className="recent-entry">
                    <img src={assets.message_icon} alt=''></img>
                    <p>{item} ...</p>
                </div>
              )
            })}
          </div>
          : null
        }

      </div>

      <div className="bottom">
        <div className="botton-item recent-entry">
          <img src={assets.question_icon} alt=''></img>
          {extended ? <p>Help</p> : null}
        </div>

        <div className="botton-item recent-entry">
          <img src={assets.history_icon} alt=''></img>
          {extended ? <p>Activity</p> : null}
        </div>

        <div className="botton-item recent-entry">
          <img src={assets.setting_icon} alt=''></img>
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
