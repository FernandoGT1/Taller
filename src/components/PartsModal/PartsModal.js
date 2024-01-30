import React, { useState } from 'react';
import './PartsModal.css';

const Modal = ({ row, onCloseModal, onSave }) => {
  const [formData, setFormData] = useState({
    nombre: row?.partName || '',
    correo: row?.quantity || '',
    telefono: row?.price || '',
  });

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSaveClick = () => {
    onSave(row.id, formData);
    onCloseModal();
  };

  if (!row) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onCloseModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>Editar Información</h3>
        <div className="input-group">
          <label htmlFor="nombre">Pieza:</label>
          <input
            type="text"
            id="nombre"
            placeholder={`Nombre${row.id}`}
            value={formData.nombre}
            onChange={(e) => handleInputChange('nombre', e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="correo">Cantidad:</label>
          <input
            type="text"
            id="correo"
            placeholder={`Correo${row.id}`}
            value={formData.correo}
            onChange={(e) => handleInputChange('correo', e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="telefono">Precio:</label>
          <input
            type="text"
            id="telefono"
            placeholder={`Teléfono${row.id}`}
            value={formData.telefono}
            onChange={(e) => handleInputChange('telefono', e.target.value)}
          />
        </div>
        <div className="modal-buttons">
          <button onClick={onCloseModal}>Cancelar</button>
          <button onClick={handleSaveClick}>Guardar</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
