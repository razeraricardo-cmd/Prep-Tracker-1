'use client';

import { useState } from 'react';
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Shield,
  Edit,
  Save,
  X,
  Camera,
  Lock,
  Bell,
  FileText
} from 'lucide-react';

export default function PerfilPage() {
  const [isEditing, setIsEditing] = useState(false);

  // Mock user data
  const [userData, setUserData] = useState({
    name: 'Usuário Exemplo',
    email: 'usuario@email.com',
    phone: '(11) 99999-9999',
    cpf: '***.***.***-**',
    birthDate: '1990-01-15',
    gender: 'Masculino',
    address: {
      street: 'Rua Exemplo',
      number: '123',
      complement: 'Apto 45',
      neighborhood: 'Centro',
      city: 'São Paulo',
      state: 'SP',
      cep: '01310-100',
    },
    prepStatus: 'Ativo',
    prepStartDate: '2024-06-15',
  });

  const handleSave = () => {
    setIsEditing(false);
    // Save logic would go here
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Meu Perfil</h1>
          <p className="text-slate-600">Gerencie suas informações pessoais</p>
        </div>
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="btn-secondary flex items-center gap-2 text-sm"
          >
            <Edit size={18} />
            Editar
          </button>
        ) : (
          <div className="flex gap-2">
            <button
              onClick={() => setIsEditing(false)}
              className="btn-secondary flex items-center gap-2 text-sm"
            >
              <X size={18} />
              Cancelar
            </button>
            <button
              onClick={handleSave}
              className="btn-primary flex items-center gap-2 text-sm"
            >
              <Save size={18} />
              Salvar
            </button>
          </div>
        )}
      </div>

      {/* Profile Card */}
      <div className="card p-6">
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
              <span className="text-3xl font-bold text-white">
                {userData.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </span>
            </div>
            {isEditing && (
              <button className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-slate-50">
                <Camera size={16} className="text-slate-600" />
              </button>
            )}
          </div>

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-xl font-bold text-slate-900">{userData.name}</h2>
            <p className="text-slate-500">{userData.email}</p>
            <div className="flex flex-wrap gap-2 mt-3 justify-center md:justify-start">
              <span className="badge-success flex items-center gap-1">
                <Shield size={14} />
                PrEP Ativa
              </span>
              <span className="badge-info">
                Paciente desde {new Date(userData.prepStartDate).toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Personal Info */}
      <div className="card p-6">
        <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
          <User size={20} className="text-primary-500" />
          Informações Pessoais
        </h3>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-500 mb-1">Nome completo</label>
            {isEditing ? (
              <input
                type="text"
                value={userData.name}
                onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                className="input-field"
              />
            ) : (
              <p className="text-slate-900">{userData.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-500 mb-1">E-mail</label>
            {isEditing ? (
              <input
                type="email"
                value={userData.email}
                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                className="input-field"
              />
            ) : (
              <p className="text-slate-900">{userData.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-500 mb-1">Telefone</label>
            {isEditing ? (
              <input
                type="tel"
                value={userData.phone}
                onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                className="input-field"
              />
            ) : (
              <p className="text-slate-900">{userData.phone}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-500 mb-1">CPF</label>
            <p className="text-slate-900">{userData.cpf}</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-500 mb-1">Data de nascimento</label>
            <p className="text-slate-900">
              {new Date(userData.birthDate + 'T12:00:00').toLocaleDateString('pt-BR')}
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-500 mb-1">Sexo</label>
            <p className="text-slate-900">{userData.gender}</p>
          </div>
        </div>
      </div>

      {/* Address */}
      <div className="card p-6">
        <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
          <MapPin size={20} className="text-primary-500" />
          Endereço
        </h3>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-500 mb-1">Rua</label>
            {isEditing ? (
              <input
                type="text"
                value={userData.address.street}
                onChange={(e) => setUserData({
                  ...userData,
                  address: { ...userData.address, street: e.target.value }
                })}
                className="input-field"
              />
            ) : (
              <p className="text-slate-900">{userData.address.street}, {userData.address.number}</p>
            )}
          </div>

          {isEditing && (
            <>
              <div>
                <label className="block text-sm font-medium text-slate-500 mb-1">Número</label>
                <input
                  type="text"
                  value={userData.address.number}
                  onChange={(e) => setUserData({
                    ...userData,
                    address: { ...userData.address, number: e.target.value }
                  })}
                  className="input-field"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-500 mb-1">Complemento</label>
                <input
                  type="text"
                  value={userData.address.complement}
                  onChange={(e) => setUserData({
                    ...userData,
                    address: { ...userData.address, complement: e.target.value }
                  })}
                  className="input-field"
                />
              </div>
            </>
          )}

          <div>
            <label className="block text-sm font-medium text-slate-500 mb-1">Bairro</label>
            {isEditing ? (
              <input
                type="text"
                value={userData.address.neighborhood}
                onChange={(e) => setUserData({
                  ...userData,
                  address: { ...userData.address, neighborhood: e.target.value }
                })}
                className="input-field"
              />
            ) : (
              <p className="text-slate-900">{userData.address.neighborhood}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-500 mb-1">Cidade/UF</label>
            {isEditing ? (
              <div className="flex gap-2">
                <input
                  type="text"
                  value={userData.address.city}
                  onChange={(e) => setUserData({
                    ...userData,
                    address: { ...userData.address, city: e.target.value }
                  })}
                  className="input-field flex-1"
                />
                <input
                  type="text"
                  value={userData.address.state}
                  onChange={(e) => setUserData({
                    ...userData,
                    address: { ...userData.address, state: e.target.value }
                  })}
                  className="input-field w-20"
                />
              </div>
            ) : (
              <p className="text-slate-900">{userData.address.city} - {userData.address.state}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-500 mb-1">CEP</label>
            {isEditing ? (
              <input
                type="text"
                value={userData.address.cep}
                onChange={(e) => setUserData({
                  ...userData,
                  address: { ...userData.address, cep: e.target.value }
                })}
                className="input-field"
              />
            ) : (
              <p className="text-slate-900">{userData.address.cep}</p>
            )}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-4">
        <button className="card p-4 flex items-center gap-3 hover:bg-slate-50 transition-colors">
          <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
            <Lock className="w-5 h-5 text-primary-600" />
          </div>
          <div className="text-left">
            <h4 className="font-medium text-slate-900">Alterar Senha</h4>
            <p className="text-xs text-slate-500">Atualize sua senha de acesso</p>
          </div>
        </button>

        <button className="card p-4 flex items-center gap-3 hover:bg-slate-50 transition-colors">
          <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
            <Bell className="w-5 h-5 text-amber-600" />
          </div>
          <div className="text-left">
            <h4 className="font-medium text-slate-900">Notificações</h4>
            <p className="text-xs text-slate-500">Gerencie seus alertas</p>
          </div>
        </button>

        <button className="card p-4 flex items-center gap-3 hover:bg-slate-50 transition-colors">
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
            <FileText className="w-5 h-5 text-green-600" />
          </div>
          <div className="text-left">
            <h4 className="font-medium text-slate-900">Meus Dados</h4>
            <p className="text-xs text-slate-500">Baixe seus dados (LGPD)</p>
          </div>
        </button>
      </div>
    </div>
  );
}
