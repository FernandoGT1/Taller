import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import './PartsTable.css';
import PartsModal from '../PartsModal/PartsModal';

const PartsTable = () => {
  const [parts, setParts] = useState([
    { id: 1, partName: '', quantity: '', price: '' },
    // Agrega más piezas según sea necesario
  ]);

  const [selectedPart, setSelectedPart] = useState(null);
  const [isUpdateModalVisible, setUpdateModalVisible] = useState(false);

  const handleModalClose = () => {
    setSelectedPart(null);
    setUpdateModalVisible(false);
  };

  const handleAddPart = () => {
    const newPart = {
      id: parts.length + 1,
      partName: '',
      quantity: '',
      price: '',
    };

    setParts([...parts, newPart]);
  };

  const handleDeletePart = (part) => {
    const updatedParts = parts.filter((p) => p.id !== part.id);
    setParts(updatedParts);
  };

  const handleSavePart = (id, newData) => {
    const updatedParts = parts.map((part) =>
      part.id === id ? { ...part, ...newData } : part
    );
    setParts(updatedParts);
  };

  const handleUpdateModal = (part) => {
    setSelectedPart(part);
    setUpdateModalVisible(true);
  };

  return (
    <div>
      {/* Contenido de la tabla de piezas */}
      <table className="parts-table">
        <thead>
          <tr>
            <th>Pieza</th>
            <th>Cantidad</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {parts.map((part) => (
            <tr key={part.id}>
              <td>
                <input
                  type="text"
                  value={part.partName}
                  onChange={(e) =>
                    handleSavePart(part.id, { partName: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={part.quantity}
                  onChange={(e) =>
                    handleSavePart(part.id, { quantity: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={part.price}
                  onChange={(e) => handleSavePart(part.id, { price: e.target.value })}
                />
              </td>
              <td>
                <button onClick={() => handleUpdateModal(part)}>
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button onClick={() => handleDeletePart(part)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Botón Agregar Pieza */}
      <button className="add-button" onClick={handleAddPart}>
        Agregar Pieza
      </button>

      {/* Modal de actualización de pieza */}
      {isUpdateModalVisible && (
        <PartsModal
          row={selectedPart}
          onCloseModal={handleModalClose}
          onSave={(formData) => {
            handleSavePart(selectedPart.id, formData);
            handleModalClose();
          }}
        />
      )}
    </div>
  );
};

export default PartsTable;
