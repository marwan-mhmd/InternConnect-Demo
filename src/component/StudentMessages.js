import React, { useState } from "react";
import "./StudentMessages.css";
import { MdOutlineWork, MdEventAvailable, MdWarningAmber } from "react-icons/md";
import { useTranslation } from "react-i18next";

function StudentMessages() {
  const { t } = useTranslation();

  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "interview",
      title: "Interview Invitation",
      text: "ICTHub invited you to a technical interview for the Full-Stack Web Developer Intern position.",
      time: "2 hours ago",
      isRead: false
    },
    {
      id: 2,
      type: "application",
      title: "Application Update",
      text: "Your application for Junior Penetration Tester at Shield Security is now under review.",
      time: "1 day ago",
      isRead: false
    },
    {
      id: 3,
      type: "system",
      title: "Profile Reminder",
      text: "Update your LinkedIn link and add your recent Node.js projects to boost your match rate.",
      time: "3 days ago",
      isRead: true
    }
  ]);

  const markAsRead = (id) => {
    setMessages(messages.map(msg => 
      msg.id === id ? { ...msg, isRead: true } : msg
    ));
  };

  const getIcon = (type) => {
    switch(type) {
      case 'application': return <MdOutlineWork className="msg-icon bg-blue" />;
      case 'interview': return <MdEventAvailable className="msg-icon bg-green" />;
      case 'system': return <MdWarningAmber className="msg-icon bg-orange" />;
      default: return null;
    }
  };

  return (
    <div className="student-messages-container">
      <div className="messages-header">
        <div>
          <h2 className="messages-title">{t("studentMessages.title")}</h2>
          <p className="messages-subtitle">{t("studentMessages.subtitle")}</p>
        </div>
      </div>

      <div className="messages-list">
        {messages.map((msg) => (
          <div key={msg.id} className={`message-card ${msg.isRead ? 'read' : 'unread'}`}>
            <div className="message-icon-wrapper">
              {getIcon(msg.type)}
            </div>
            
            <div className="message-content">
              <div className="message-top-row">
                <span className="message-subject">{msg.title}</span>
                <span className="message-time">{msg.time}</span>
              </div>
              <p className="message-body">{msg.text}</p>
            </div>

            {!msg.isRead && (
              <button 
                className="mark-read-btn" 
                onClick={() => markAsRead(msg.id)}
              >
                {t("studentMessages.markRead")}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentMessages;