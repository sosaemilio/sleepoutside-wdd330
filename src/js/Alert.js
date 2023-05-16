class Alert {
    constructor() {
      this.alerts = [];
    }
  
    readAlerts() {
      const alertsJson = require('./alerts.json');
      this.alerts = alertsJson.map((alert) => {
        return {
          message: alert.message,
          background: alert.background,
          color: alert.color,
        };
      });
    }
  
    renderAlerts() {
      const alertListSection = document.createElement('section');
      alertListSection.className = 'alert-list';
  
      this.alerts.forEach((alert) => {
        const alertP = document.createElement('p');
        alertP.style.backgroundColor = alert.background;
        alertP.style.color = alert.color;
        alertP.textContent = alert.message;
  
        alertListSection.appendChild(alertP);
      });
  
      document.querySelector('main').prepend(alertListSection);
    }
  }
  
  export default Alert;
  