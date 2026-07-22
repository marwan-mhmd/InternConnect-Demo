import React, { useState } from "react";
import "./CompanyMessages.css";
import { MdOutlineWork, MdEventAvailable, MdWarningAmber } from "react-icons/md";
import { useTranslation } from "react-i18next";

function CompanyMessages() {
  const { t } = useTranslation();

  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "application",
      title: "New Application Received",
      text: "Omar Khalid applied for the Frontend Engineering Intern position.",
      time: "2 hours ago",
      isRead: false
    },
    {
      id: 2,
      type: "interview",
      title: "Interview Accepted",
      text: "Lina Mansour accepted your invitation for a technical interview on Monday.",
      time: "5 hours ago",
      isRead: false
    },
    {
      id: 3,
      type: "system",
      title: "Listing Expiring Soon",
      text: "Your 'Backend Developer Intern' listing will expire in 2 days.",
      time: "1 day ago",
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
    <div className="messages-container">
      <div className="messages-header">
        <div>
          <h2 className="messages-title">{t("companyMessages.title")}</h2>
          <p className="messages-subtitle">{t("companyMessages.subtitle")}</p>
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
                {t("companyMessages.markRead")}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompanyMessages;