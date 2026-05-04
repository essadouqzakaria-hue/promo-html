// components/SearchSection.tsx
"use client";
import { useState } from 'react';

export default function SearchSection() {
  const [activeTab, setActiveTab] = useState('vente');

  return (
    <section className="section-slide">
      <div className="container">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 'vente' ? 'active' : ''}`}
              onClick={() => setActiveTab('vente')}
            >
              Vente
            </button>
          </li>
          {/* ... باقي الأزرار ... */}
        </ul>

        <div className="tab-content">
          {activeTab === 'vente' && (
            <form className="row">
              {/* كود نموذج البيع */}
              <select className="form-select">
                <option>Type bien</option>
                <option value="11">Villa</option>
              </select>
              <button className="btn btn-find">Chercher</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}