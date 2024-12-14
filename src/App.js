import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './App.css';

function App() {
  const [items, setItems] = useState([]); 
  const [droppedItems, setDroppedItems] = useState([]); 
  const itemNames = {
    '1': 'Warm Up',
    '2': 'Active',
    '3': 'Cool Down',
    '4': 'Hard, Easy',
    '5': 'Active for four times',
    '6': 'Active for four times',
  };

  useEffect(() => {
    
    const fetchedData = [
      {
        id: '1',
        content: (
          <svg width="88" height="48" viewBox="0 0 88 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="88" height="48" rx="8" fill="#F2F2F2" />
            <rect width="88" height="18" transform="translate(0 30)" fill="#4339F2" fillOpacity="0.5" />
          </svg>
        ),
        distance:'2'
      },
      {
        id: '2',
        content: (
          <svg width="88" height="48" viewBox="0 0 88 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="88" height="48" rx="8" fill="#F2F2F2" />
            <rect width="88" height="37" transform="translate(0 11)" fill="#4339F2" fillOpacity="0.5" />
          </svg>
        ),
        distance:'2'
      },
      {
        id: '3',
        content: (
          <svg width="88" height="48" viewBox="0 0 88 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="88" height="48" rx="8" fill="#F2F2F2" />
            <rect width="88" height="24" transform="translate(0 24)" fill="#4339F2" fillOpacity="0.5" />
          </svg>
        ),
        distance:'2'
      },
      {
        id: '4',
        content: (
          <svg width="88" height="48" viewBox="0 0 88 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="88" height="48" rx="8" fill="#F2F2F2" />
            <rect width="46" height="26" transform="translate(0 22)" fill="#4339F2" fillOpacity="0.5" />
            <rect width="38" height="18" transform="translate(50 30)" fill="#4339F2" fillOpacity="0.5" />
          </svg>
        ),
        distance:'2'
      },
      {
        id: '5',
        content: (
          <svg width="88" height="48" viewBox="0 0 88 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="88" height="48" rx="8" fill="#F2F2F2" />
            <rect width="19" height="24" transform="translate(0 24)" fill="#4339F2" fillOpacity="0.5" />
            <rect width="19" height="29" transform="translate(23 19)" fill="#4339F2" fillOpacity="0.5" />
            <rect width="19" height="34" transform="translate(46 14)" fill="#4339F2" fillOpacity="0.5" />
            <rect width="19" height="39" transform="translate(69 9)" fill="#4339F2" fillOpacity="0.5" />
          </svg>
        ),
        distance:'2'
      },
      {
        id: '6',
        content: (
          <svg width="88" height="48" viewBox="0 0 88 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="88" height="48" rx="8" fill="#F2F2F2" />
            <rect width="19" height="24" transform="matrix(-1 0 0 1 88 24)" fill="#4339F2" fillOpacity="0.5" />
            <rect width="19" height="29" transform="matrix(-1 0 0 1 65 19)" fill="#4339F2" fillOpacity="0.5" />
            <rect width="19" height="34" transform="matrix(-1 0 0 1 42 14)" fill="#4339F2" fillOpacity="0.5" />
            <rect width="19" height="39" transform="matrix(-1 0 0 1 19 9)" fill="#4339F2" fillOpacity="0.5" />
          </svg>
        ),
        distance:'2'
      },
    ];
    setItems(fetchedData); 
  }, []);

  const onDragEnd = (result) => {
    const { destination, source } = result;

    
    if (!destination) return;

    const sourceItems = [...items]; 
    const destinationItems = [...droppedItems]; 

    if (source.droppableId === 'droppable-left' && destination.droppableId === 'droppable-right') {
      const draggedItem = sourceItems[source.index]; 
      destinationItems.splice(destination.index, 0, draggedItem); 
      setDroppedItems(destinationItems); 
    }

    
    if (source.droppableId === 'droppable-right' && destination.droppableId === 'droppable-right') {
      const [moved] = destinationItems.splice(source.index, 1); 
      destinationItems.splice(destination.index, 0, moved); 
      setDroppedItems(destinationItems); 
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '16px 32px',
          gap: '10px',
          position: 'absolute',
          width: '1234px',
          height: '76px',
          left: 'calc(50% - 1310px/2)',
          top: '0px',
          backgroundColor: '#FFFFFF',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.03)',
          borderRadius: '0px 0px 20px 20px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button
            style={{
              fontSize: '56px',
              marginRight: '10px',
              cursor: 'pointer',
              border: 'none',
              background: 'none',
            }}
            onClick={() => alert('Back button clicked')}
          >
            &#x2190; 
          </button>
          <h2 style={{ margin: 0 }}>Workout</h2>
        </div>

        <button
          style={{
            padding: '10px 20px',
            backgroundColor: '#464FEB',
            color: 'white',
            border: 'none',
            borderRadius: '22px',
            cursor: 'pointer',
            boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.12), 0px 4px 8px rgba(0, 0, 0, 0.14)',
            background: 'linear-gradient(90deg, #464FEB 10.42%, #8330E9 100%)',
          }}
        >
          Save Workout
        </button>
      </div>

      
      <button
        style={{
          width: '86px',
          height: '18px',
          fontFamily: 'DM Sans',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '14px',
          lineHeight: '18px',
          background: 'linear-gradient(90deg, #464FEB 10.42%, #8330E9 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textFillColor: 'transparent',
          padding: '8px 16px',
          borderRadius: '20px',
          marginTop: '20px',
          cursor: 'pointer',
        }}
        onClick={() => alert('Substep button clicked')}
      >
        Add Substep
      </button>

      <DragDropContext onDragEnd={onDragEnd}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          {/* Left Area */}
          <div style={{ width: '25%', padding: '20px' }}>
            
            <Droppable droppableId="droppable-left" direction="horizontal">
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '10px',
                    minHeight: '200px',
                    padding: '10px',
                    border: '1px solid #ddd',
                  }}
                >
                  {items && items.length > 0 ? (
                    items.map((item, index) => (
                      <Draggable key={item.id} draggableId={item.id} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{
                              ...provided.draggableProps.style,
                            }}
                          >
                            <p>{item.content}</p>
                          </div>
                        )}
                      </Draggable>
                    ))
                  ) : (
                    <p>Loading items...</p>
                  )}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>


          <div style={{ width: '75%', border: '1px solid #ccc', padding: '20px' }}>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-end'}}>
            
            <button
              style={{
              width: '100px',
              borderRadius: '30px',
              padding: '10px',
              color: 'black',
              border: 'none',
              cursor: 'pointer',
  
            }}
            onClick={() => setDroppedItems([])}
            >
            Clear
            </button>
          </div>
            <Droppable droppableId="droppable-right" direction="horizontal">
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'nowrap',
                    minHeight: '200px',
                    padding: '10px'
                  }}
                >
                  {droppedItems && droppedItems.length > 0 ? (
                    droppedItems.map((item, index) => (
                      <Draggable key={item.id} draggableId={item.id} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{
                              margin: '5px',
                              ...provided.draggableProps.style,
                            }}
                          >
                            <p>{item.content}</p>
                          </div>
                        )}
                      </Draggable>
                    ))
                  ) : (
                    <p>Drop items here...</p>
                  )}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            <div style={{ marginTop: '20px' }}>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                {droppedItems.map((item) => (
      <li
        key={item.id}
        style={{
          padding: '10px 15px',
          background: 'linear-gradient(90deg, rgba(67, 57, 242, 0.1), rgba(67, 57, 242, 0.3))',
          borderRadius: '8px',
          marginBottom: '10px',
        }}
      >
      {item.id === '5' || item.id === '6' ? (
          Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              style={{
                marginBottom: '15px', 
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '14px',
                  fontWeight: '600',
                  marginBottom: '8px',
                }}
              >
                <span>Active</span>
                <span>{item.distance} KM</span>
              </div>

              <div
  style={{
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'center',
    textAlign: 'center',
  }}
>
  <button
    style={{
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '8px 16px',
      gap: '8px',
      
      width: '118px',
      height: '32px',
      
      borderRadius: '20px',
      
      
      flex: 'none',
      order: 1,
      flexGrow: 0,
    }}
    onClick={() => alert(`Add substep for ${itemNames[item.id]}`)}
  >
    Add Substep
  </button>
</div>

            </div>
          ))
        ) : (
          <>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '14px',
                fontWeight: '600',
                marginBottom: '8px',
              }}
            >
              <span>{itemNames[item.id]}</span>
              <span>{item.distance} KM</span>
            </div>
            <div
  style={{
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'center',
    justifyContent: 'center', 
    textAlign: 'center',
  }}
>
  <button
    style={{
      boxSizing: 'border-box',
      
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center', 
      padding: '8px 16px',
      gap: '8px',
      
      width: '118px',
      height: '32px',
      
      borderRadius: '20px',
      
      flex: 'none',
      order: 1,
      flexGrow: 0,
    }}
    onClick={() => alert(`Add substep for ${itemNames[item.id]}`)}
  >
    Add Substep
  </button>
</div>

          </>
        )}
      </li>
    ))}
  </ul>
</div>
          </div>
        </div>
      </DragDropContext>
    </div>
  );
}

export default App;
