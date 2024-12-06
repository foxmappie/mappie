import React, { useState, useEffect } from 'react';

const PolylineForm = ({ polyline, tiposCabos, onSave, onDelete, onClose }) => {
  const [formData, setFormData] = useState({
    caboId: polyline.id,
    nome: polyline.name || '',
    tipo: polyline.tipo || '',
    nivel: polyline.nivel || '',
    fibras: polyline.fibras || '',
    loose: polyline.loose || '',
    atenuacao: polyline.atenuacao || '0.25',
    descricao: polyline.descricao || '',
    path: polyline.getPath().getArray().map(latlng => ({
      lat: latlng.lat(),
      lng: latlng.lng()
    }))
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (formData.tipo && tiposCabos[formData.tipo]) {
      const tipoCabo = tiposCabos[formData.tipo];
      polyline.setOptions({
        strokeColor: tipoCabo.cor,
        strokeWeight: parseInt(tipoCabo.largura, 10)
      });
    }
  }, [formData.tipo, tiposCabos, polyline]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave({ ...formData });
    setIsEditing(false);
    onClose();
  };

  const handleDelete = () => {
    if (window.confirm("Tem certeza que deseja deletar este cabo?")) {
      onDelete(polyline.id);
      onClose();
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
    polyline.setEditable(true);
  };

  const handleCancel = () => {
    polyline.setEditable(false);
    setIsEditing(false);
    onClose();
  };

  return (
    <div className="form-popup">
      <form className="form-container">
        <input type="hidden" name="caboId" value={formData.caboId} />

        <div className="item-form">
          <label><b>Nome:</b></label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleInputChange}
            placeholder="Digite o nome do cabo"
            required
          />
        </div>

        <div className="item-form">
          <label><b>Tipo:</b></label>
          <select
            name="tipo"
            value={formData.tipo}
            onChange={handleInputChange}
            required
          >
            {Object.keys(tiposCabos).map(tipo => (
              <option key={tipo} value={tipo}>{tiposCabos[tipo].nome}</option>
            ))}
          </select>
        </div>

        <div className="item-form">
          <label><b>Nível:</b></label>
          <select
            name="nivel"
            value={formData.nivel}
            onChange={handleInputChange}
            required
          >
            <option value="backbone">Backbone</option>
            <option value="backhall">Backhall</option>
            <option value="ramal">Ramal</option>
            <option value="drop">Drop</option>
          </select>
        </div>

        <div className="item-form">
          <label><b>N. de Fibras:</b></label>
          <input
            type="number"
            name="fibras"
            value={formData.fibras}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="item-form">
          <label><b>N. de Loose:</b></label>
          <input
            type="number"
            name="loose"
            value={formData.loose}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="item-form">
          <label><b>Atenuação por km:</b></label>
          <input
            type="number"
            name="atenuacao"
            value={formData.atenuacao}
            onChange={handleInputChange}
            required
            disabled
          />
        </div>

        <div className="item-form">
          <label><b>Descrição:</b></label>
          <input
            type="text"
            name="descricao"
            value={formData.descricao}
            onChange={handleInputChange}
            placeholder="Digite a descrição"
            required
          />
        </div>

        <div className="btn-group">
          <button type="button" className="btn cancel-btn" onClick={handleCancel}>Cancelar</button>
          <button type="button" className="btn" onClick={handleSave}>Salvar</button>
          {!isEditing && (
            <button type="button" className="btn edit-btn" onClick={handleEdit}>Editar</button>
          )}
          <button type="button" className="btn delete-btn" onClick={handleDelete}>Deletar</button>
        </div>
      </form>
    </div>
  );
};

export default PolylineForm;
