import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'; // تضمين الـ BrowserRouter هنا فقط
import { store } from './component/rtk/store'; // تأكد من وضع الاستيراد هنا في الأعلى
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/ecommerce-finnally"> {/* إضافة basename إذا كنت تستخدم GitHub Pages */}
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
