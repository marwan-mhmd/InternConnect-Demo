import React, { useState } from "react";
import "./AdminOverview.css";
import { useTranslation } from "react-i18next";
import { 
  MdArrowForward, 
  MdOutlineCorporateFare, 
  MdOutlinePolicy, 
  MdOutlineFactCheck, 
  MdVerified, 
  MdCancel 
} from "react-icons/md";

function AdminOverview({ setActiveView }) {
  const { t } = useTranslation();

  const [stats] = useState({
    placementRate: 84.2,
    placementGrowth: "+12.4%",
    activePartners: 1248,
    profileCompletion: 92,
    avgApplicationRate: 4.2
  });

  const [chartData] = useState([
    { id: 1, month: "Jan", value: 40, opacity: 0.2, isPeak: false },
    { id: 2, month: "Feb", value: 65, opacity: 0.4, isPeak: false },
    { id: 3, month: "Mar", value: 55, opacity: 0.3, isPeak: false },
    { id: 4, month: "Apr", value: 85, opacity: 1, isPeak: true, peakValue: 92 },
    { id: 5, month: "May", value: 70, opacity: 0.6, isPeak: false },
    { id: 6, month: "Jun", value: 95, opacity: 1, isPeak: false }
  ]);

  const [queue] = useState([
    {
      id: 1, initials: "ST", name: "Skyline Tech", location: "San Francisco, CA",
      docType: "Commercial Register", icon: <MdOutlinePolicy />, date: "24 Oct, 2024",
      status: "Pending Review", statusClass: "status-pending"
    },
    {
      id: 2, initials: "NV", name: "Nova Ventures", location: "Dubai, UAE",
      docType: "VAT Certificate", icon: <MdOutlineFactCheck />, date: "23 Oct, 2024",
      status: "In Progress", statusClass: "status-progress"
    }
  ]);

  return (
    <div className="admin-overview-container">
      
      <div className="admin-grid-top">
        <div className="chart-section">
          <div className="chart-header">
            <div>
              <h2 className="chart-subtitle">{t("adminOverview.placementPerf")}</h2>
              <p className="chart-title">{stats.placementRate}% <span className="chart-highlight">{stats.placementGrowth} {t("adminOverview.vsLY")}</span></p>
            </div>
            <div className="chart-legend">
              <span className="legend-dot blue"></span>
              <span className="legend-line light-blue"></span>
            </div>
          </div>
          
          <div className="chart-bars-container">
            {chartData.map((bar) => (
              <div key={bar.id} className={`chart-bar ${bar.isPeak ? 'relative-bar' : ''}`}>
                <div 
                  className={`bar-fill ${bar.isPeak ? 'gradient-fill' : ''}`} 
                  style={{ height: `${bar.value}%`, opacity: bar.opacity }}
                ></div>
                {bar.isPeak && <div className="peak-tooltip">{t("adminOverview.peak")} {bar.peakValue}%</div>}
              </div>
            ))}
          </div>
          
          <div className="chart-labels">
            {chartData.map(bar => (
              <span key={`label-${bar.id}`}>{bar.month}</span>
            ))}
          </div>
        </div>

        <div className="stats-section">
          <div className="stat-card-blue">
            <div className="stat-card-content">
              <h3>{t("adminOverview.activePartners")}</h3>
              <p className="stat-big-number">{stats.activePartners.toLocaleString()}</p>
              <p className="stat-desc">{t("adminOverview.top50")}</p>
            </div>
            <MdOutlineCorporateFare className="bg-icon" />
          </div>
          
          <div className="stat-card-white">
            <h3>{t("adminOverview.internEngagement")}</h3>
            <div className="progress-group">
              <div className="progress-header">
                <span>{t("adminOverview.profileCompletion")}</span>
                <span className="progress-value">{stats.profileCompletion}%</span>
              </div>
              <div className="progress-track">
                <div className="progress-fill" style={{ width: `${stats.profileCompletion}%` }}></div>
              </div>
            </div>
            <div className="progress-group">
              <div className="progress-header">
                <span>{t("adminOverview.avgAppRate")}</span>
                <span className="progress-value">{stats.avgApplicationRate}{t("adminOverview.perMo")}</span>
              </div>
              <div className="progress-track">
                <div className="progress-fill" style={{ width: `${(stats.avgApplicationRate / 5) * 100}%` }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="queue-section">
        <div className="queue-header">
          <div>
            <h2>{t("adminOverview.verifyQueue")}</h2>
            <p>{t("adminOverview.queueDesc")}</p>
          </div>
          <button className="view-all-btn" onClick={() => setActiveView('verifications')}>
            {t("adminOverview.viewAll")} <MdArrowForward />
          </button>
        </div>
        
        <div className="queue-table-container">
          <table className="queue-table">
            <thead>
              <tr>
                <th>{t("adminOverview.colCompany")}</th>
                <th>{t("adminOverview.colDoc")}</th>
                <th>{t("adminOverview.colDate")}</th>
                <th>{t("adminOverview.colStatus")}</th>
                <th style={{ textAlign: 'right' }}>{t("adminOverview.colActions")}</th>
              </tr>
            </thead>
            <tbody>
              {queue.map(item => (
                <tr key={item.id}>
                  <td>
                    <div className="company-info-cell">
                      <div className="company-initials">{item.initials}</div>
                      <div>
                        <p className="company-name">{item.name}</p>
                        <p className="company-loc">{item.location}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="doc-type-cell">
                      <span className="doc-icon">{item.icon}</span>
                      {item.docType}
                    </div>
                  </td>
                  <td className="date-cell">{item.date}</td>
                  <td>
                    <span className={`status-badge ${item.statusClass}`}>
                      {item.status}
                    </span>
                  </td>
                  <td style={{ textAlign: 'right' }}>
                    <div className="action-btns">
                      <button className="approve-btn"><MdVerified size={20} /></button>
                      <button className="reject-btn"><MdCancel size={20} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminOverview;