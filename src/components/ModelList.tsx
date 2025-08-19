import React from 'react'
import './ModelList.css'

interface Model {
  id: string
  name: string
  path: string
  thumbnail?: string
}

interface ModelListProps {
  models: Model[]
  selectedModel: Model | null
  onSelectModel: (model: Model) => void
  onDeleteModel?: (modelId: string) => void
  onAddModel?: () => void
}

const ModelList: React.FC<ModelListProps> = ({ 
  models, 
  selectedModel, 
  onSelectModel, 
  onDeleteModel,
  onAddModel 
}) => {
  return (
    <div className="model-list">
      <div className="model-list-header">
        <h3>My Models</h3>
        <button className="add-model-btn" onClick={onAddModel} title="Add new model">
          +
        </button>
      </div>
      <div className="model-items">
        {models.map((model) => (
          <div
            key={model.id}
            className={`model-item ${selectedModel?.id === model.id ? 'selected' : ''}`}
            onClick={() => onSelectModel(model)}
          >
            <div className="model-thumbnail">
              {model.thumbnail ? (
                <img src={model.thumbnail} alt={model.name} />
              ) : (
                <div className="default-thumbnail">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2L2 7L12 12L22 7L12 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 17L12 22L22 17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 12L12 17L22 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
            <div className="model-info">
              <div className="model-name">{model.name}</div>
              <div className="model-type">GLTF Model</div>
            </div>
            {onDeleteModel && (
              <button 
                className="delete-model-btn"
                onClick={(e) => {
                  e.stopPropagation()
                  onDeleteModel(model.id)
                }}
                title="Delete model"
              >
                ×
              </button>
            )}
          </div>
        ))}
      </div>
      <div className="model-list-footer">
        <div className="storage-info">
          <div className="storage-text">Storage: 1/10 models</div>
          <div className="storage-bar">
            <div className="storage-fill" style={{ width: '10%' }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ModelList